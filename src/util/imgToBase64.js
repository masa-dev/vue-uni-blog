const fs = require("fs");

/**
 * 画像をbase64形式の文字列に変換する
 * @param {String} path 画像のURL
 * @param {String} type ファイル形式(default: image/jpeg)
 * @return {String} base64形式
 */
function imgToBase64(path, type = "image/jpeg") {
  let img = fs.readFileSync(path, "base64");
  img = `data:${type};base64,${img}`;
  return img;
}

module.exports = imgToBase64;
