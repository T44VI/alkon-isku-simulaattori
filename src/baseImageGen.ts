import * as path from "path";
import * as fs from "fs";
import Jimp from "jimp";

const testDir = "kuvat_vanilla";
const outDirWhite = "kuvat_white";
const outDirBlack = "kuvat_black";

fs.readdir(path.join(__dirname, "..", testDir), (err, files) => {
  files.forEach(file => {
    Jimp.read(path.join(__dirname, "..", testDir, file))
      .then(photo => {
        const res = photo
          .resize(1800, Jimp.AUTO)
          .opacity(0.8)
          .background(0x00ffeeff)
          .posterize(4);
        return [
          res
            .brightness(0.5)
            .write(path.join(__dirname, "..", outDirBlack, file)),
          res
            .brightness(-0.5)
            .write(path.join(__dirname, "..", outDirWhite, file))
        ];
      })
      .catch(err => {
        console.error(err);
      });
  });
});
