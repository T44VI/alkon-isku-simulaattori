import fs from "fs";
import path from "path";
import xlsxj from "xlsx-to-json";
import _ from "lodash";
import { Drink } from "../front/src/types";
import { generateTicket } from "./imageGen";

interface ExcelRow {
  id: string;
  nimi: string;
  tilavuus: string;
  vahvuus: string;
  etiketin_korkeus: string;
  etiketin_leveys: string;
  lisakuvaus?: string;
}

const dirWhite = "kuvat_white";

const images = fs.readdirSync(path.join(__dirname, "..", dirWhite));

xlsxj(
  {
    input: path.join(__dirname, "..", "Alkon isku -simulaattori.xlsx"),
    output: path.join(__dirname, "..", "Alkon isku -simulaattori.json")
  },
  function(err, result) {
    if (err) {
      return console.error(err);
    }
    const valids: ExcelRow[] = result.filter(
      row =>
        row.id &&
        row.nimi &&
        row.tilavuus &&
        !isNaN(Number(row.tilavuus)) &&
        row.vahvuus &&
        !isNaN(Number(row.vahvuus)) &&
        row.etiketin_korkeus &&
        !isNaN(Number(row.etiketin_korkeus)) &&
        row.etiketin_leveys &&
        !isNaN(Number(row.etiketin_leveys))
    );

    let newJson: Record<string, Drink> = {};

    valids.forEach(
      (row: { id: string; nimi: string; tilavuus: string; vahvuus: string }) =>
        (newJson[row.id] = {
          id: row.id,
          name: row.nimi,
          amount: Number(row.tilavuus),
          strength: Number(row.vahvuus)
        })
    );

    fs.writeFile(
      path.join(__dirname, "..", "drinkList.json"),
      JSON.stringify(newJson),
      err => console.log(err ? "Error saving json" : "Json saved!")
    );

    const promises = Promise.all(
      valids.map(row =>
        generateTicket(
          images[Math.floor(Math.random() * images.length)],
          Number(row.tilavuus),
          Number(row.vahvuus),
          row.nimi,
          row.id,
          Number(row.etiketin_leveys),
          Number(row.etiketin_korkeus),
          Math.random() < 0.5,
          undefined,
          row.lisakuvaus
        )
      )
    );

    promises
      .then(() => console.log("Success :D"))
      .catch(() => console.log("Failure :("));
  }
);
