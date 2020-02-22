import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";
import { Drink, Result, Scoreboard, ScoreboardScore } from "../front/src/types";
const app = require("express")();
const server = require("http").createServer(app);
const sockets = require("socket.io")(server, { origins: "*:*" });
const drinks = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "drinkList.json")).toString()
);

const results: Result[] = JSON.parse(
  "[" +
    fs
      .readFileSync(path.join(__dirname, "..", "logs/backup.txt"))
      .toString()
      .slice(0, -1) +
    "]"
);

const resultToScoreboardScore = (res: Result): ScoreboardScore => {
  const juomat = res.drinkIds.map((id: string) => drinks[id]);
  const litrat =
    Math.round(juomat.reduce((acc, j) => acc + j.amount, 0) * 10) / 10;
  const alc = juomat.reduce((acc, j) => acc + j.strength * j.amount, 0);
  const annokset = Math.round((alc * 100) / 1.5);
  return {
    name: res.name,
    annokset,
    litrat,
    tuotteet: juomat.length
  };
};

const scoreBoard = (): Scoreboard => {
  const kaikkiIdt = _.flatten(results.map(res => res.drinkIds));
  const kaikkijuomat = kaikkiIdt.map((id: string): Drink => drinks[id]);
  const litrat =
    Math.round(kaikkijuomat.reduce((acc, j) => acc + j.amount, 0) * 10) / 10;
  const alc = kaikkijuomat.reduce((acc, j) => acc + j.strength * j.amount, 0);
  const annokset = Math.round((alc * 100) / 1.5);

  const sortedDrinks = _.uniq(kaikkiIdt)
    .map(id => ({ id, amount: kaikkiIdt.filter(fid => fid === id).length }))
    .sort((a, b) => b.amount - a.amount);
  const scoreboardScores = results
    .map(res => resultToScoreboardScore(res))
    .sort((a, b) => b.annokset - a.annokset);

  return {
    litrat,
    annokset,
    tuotteet: kaikkiIdt.length,
    top: scoreboardScores.slice(0, 10),
    topJuomat: sortedDrinks.slice(0, 10),
    last: results.length
      ? {
          name: results[results.length - 1].name,
          drinkIds: results[results.length - 1].drinkIds
        }
      : { name: "Ei viel raittiusritareitaa :D", drinkIds: [] }
  };
};

sockets.on("connection", socket => {
  console.log("a user connected");
  socket.emit("connected");

  socket.on("message", (data: any) => {
    console.log(data);
  });

  socket.on("getDrinks", () => {
    socket.emit("drinks", drinks);
  });

  socket.on("joinRoom", (data: any) => {
    socket.join(data, () => {
      sockets.to(data).emit("message", "New user joined");
    });
  });

  socket.on("sendScore", (data: Result) => {
    fs.appendFile(
      path.join(__dirname, "..", "logs/backup.txt"),
      JSON.stringify(data) + ",",
      err => {
        if (err) {
          socket.emit("errorScore");
        } else {
          results.push(data);

          socket.emit("confirmScore");
          socket.broadcast.emit("setScoreboard", scoreBoard());
        }
      }
    );
    console.log(data);
  });

  socket.on("getScoreboard", () => {
    socket.emit("setScoreboard", scoreBoard());
  });

  socket.on("disconnect", reason => {
    console.log("user disconnected");
  });
});

server.listen(4000);
console.log("Running");
