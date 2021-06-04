const sharp = require("sharp");
const fs = require("fs");

function shrinkifier(images, startPath, endPath, opts = {}) {
  if (!fs.existsSync(endPath)) {
    fs.mkdirSync(endPath, { recursive: true });
  }

  for (const image of images) {
    sharp(startPath + image)
      .jpeg({ mozjpeg: true })
      .toFile(`${endPath}${image.split(".")[0]}.jpeg`);
  }
}

exports.processFromDir = function processFromDir({
  start = "./src/temp/unprocessed/",
  finish = "./src/temp/processed/",
}) {
  fs.readdir(start, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      shrinkifier(data, start, finish);
    }
  });
};

exports.mkdir = (path) => {
  if (!fs.existsSync(path)) fs.mkdirSync(path);
};

exports.rmdir = (path) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
};
