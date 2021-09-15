"use strict";

const fs = require("fs");

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
  fs.writeFileSync(fullPath, `---${CRLF}title: ${CRLF}---${CRLF}`, "utf-8");
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
