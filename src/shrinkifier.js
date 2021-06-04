const sharp = require("sharp");
const fs = require("fs");

module.exports = function processFromDir(
  start = "./src/temp/unprocessed/",
  finish = "./src/temp/processed/"
) {
  fs.readdir(start, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      shrinkifier(data, start, finish);
    }
  });
};

function shrinkifier(images, startPath, endPath, opts = {}) {
  if (!fs.existsSync(endPath)) {
    fs.mkdirSync(endPath);
  }

  for (const image of images) {
    sharp(startPath + image)
      .jpeg({ mozjpeg: true })
      .toFile(`${endPath}${image.split(".")[0]}.jpeg`);
  }
}
