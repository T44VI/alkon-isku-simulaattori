"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var _ = __importStar(require("lodash"));
var app = require("express")();
var server = require("http").createServer(app);
var sockets = require("socket.io")(server, { origins: "*:*" });
var drinks = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "drinkList.json")).toString());
var results = JSON.parse("[" +
    fs
        .readFileSync(path.join(__dirname, "..", "logs/backup.txt"))
        .toString()
        .slice(0, -1) +
    "]");
console.log(results);
var resultToScoreboardScore = function (res) {
    var juomat = res.drinkIds.map(function (id) { return drinks[id]; });
    var litrat = Math.round(juomat.reduce(function (acc, j) { return acc + j.amount; }, 0) * 10) / 10;
    var alc = juomat.reduce(function (acc, j) { return acc + j.strength * j.amount; }, 0);
    var annokset = Math.round((alc * 100) / 1.5);
    return {
        name: res.name,
        annokset: annokset,
        litrat: litrat,
        tuotteet: juomat.length
    };
};
var scoreBoard = function () {
    var kaikkiIdt = _.flatten(results.map(function (res) { return res.drinkIds; }));
    var kaikkijuomat = kaikkiIdt.map(function (id) { return drinks[id]; });
    var litrat = Math.round(kaikkijuomat.reduce(function (acc, j) { return acc + j.amount; }, 0) * 10) / 10;
    var alc = kaikkijuomat.reduce(function (acc, j) { return acc + j.strength * j.amount; }, 0);
    var annokset = Math.round((alc * 100) / 1.5);
    var sortedDrinks = _.uniq(kaikkiIdt)
        .map(function (id) { return ({ id: id, amount: kaikkiIdt.filter(function (fid) { return fid === id; }).length }); })
        .sort(function (a, b) { return b.amount - a.amount; });
    var scoreboardScores = results
        .map(function (res) { return resultToScoreboardScore(res); })
        .sort(function (a, b) { return b.annokset - a.annokset; });
    return {
        litrat: litrat,
        annokset: annokset,
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
sockets.on("connection", function (socket) {
    console.log("a user connected");
    socket.emit("connected");
    socket.on("message", function (data) {
        console.log(data);
    });
    socket.on("getDrinks", function () {
        socket.emit("drinks", drinks);
    });
    socket.on("joinRoom", function (data) {
        socket.join(data, function () {
            sockets.to(data).emit("message", "New user joined");
        });
    });
    socket.on("sendScore", function (data) {
        fs.appendFile(path.join(__dirname, "..", "logs/backup.txt"), JSON.stringify(data) + ",", function (err) {
            if (err) {
                socket.emit("errorScore");
            }
            else {
                results.push(data);
                socket.emit("confirmScore");
                socket.broadcast.emit("setScoreboard", scoreBoard());
            }
        });
        console.log(data);
    });
    socket.on("getScoreboard", function () {
        socket.emit("setScoreboard", scoreBoard());
    });
    socket.on("disconnect", function (reason) {
        console.log("user disconnected");
    });
});
server.listen(4000);
console.log("Running");
