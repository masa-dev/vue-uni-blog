const imgToBase64 = require("./imgToBase64");

/**
 * 与えられたhtmlの中でimgのリンクをbase64形式に置換する
 * @param {String} html htmlの文字列
 * @param {String} imgFolderPath 画像があるフォルダパス
 * @returns {String} 
 */

function convertImgToBase64(html, imgFolderPath) {
  let convertedHtml = html.replace(/<img(\s)src=\".+?\"/g, function (match) {
    let url = match.match(/\"(?<url>.+)\"/).groups.url;
    url = url.match(/[^\/]+$/);
    let base64 = imgToBase64(`${imgFolderPath}/${url}`, "image/png");

    return `<img src="${base64}"`;
  })

  return convertedHtml;
}

module.exports = convertImgToBase64;
