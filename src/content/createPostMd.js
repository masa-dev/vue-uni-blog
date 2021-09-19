"use strict";

const { exec } = require("child_process");
const fs = require("fs");
const config = require("../../config");

const CRLF = "\r\n";
const outDir = "./src/content/post";
const currDate = new Date();
const fileName = `${currDate.getFullYear()}-${specifyDigits(
  currDate.getMonth() + 1,
  2
)}-${specifyDigits(currDate.getDate(), 2)}.md`;
const fullPath = `${outDir}/${fileName}`;

// すでにファイルがある場合は実行しない
if (fs.existsSync(fullPath)) {
  console.error(`Error: すでに "${fullPath}" は存在しています。`);
} else {
  fs.writeFile(
    fullPath,
    `---${CRLF}title: ${CRLF}draft: true${CRLF}---${CRLF + CRLF + CRLF}`,
    "utf-8",
    () => {
      // 作成したMdファイルを開く
      if (config.OpenMdFileWhenCreated) {
        exec(`code ${fullPath}`, (err) => {
          if (err) console.error(err);
        });
      }
    }
  );
}

/**
 * @param {Number} num 数字
 * @param {Number} digit 桁数
 * @return {String} 指定した桁数の結果
 */
function specifyDigits(num, digit) {
  let numStr = num.toString();

  for (let i = numStr.length; i < digit; i++) {
    numStr = "0" + numStr;
  }

  return numStr;
}
