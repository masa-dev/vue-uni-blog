"use strict";

const marked = require("marked");
const hljs = require("highlight.js");
const fs = require("fs");
const convertImgToBase64 = require("../util/convertImgToBase64");

const dir = "./src/content/post";
const outDir = "./src/content";
const outFileName = "content.json";
const fileList = fs.readdirSync(dir);
fileList.sort();

let contentList = [];
let contentListJSON;

marked.setOptions({
  langPrefix: "",
  highlight: function (code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
});

for (let fileName of fileList) {
  let content = fs.readFileSync(`${dir}/${fileName}`, "utf-8");
  content = getMarkdownProperties(content, fileName);
  let htmlMarked = {
    property: content.property,
    body: marked(content.body),
  };

  // imgタグの画像をbase64形式で表示する
  htmlMarked.body = convertImgToBase64(htmlMarked.body, "./src/content/img");
  htmlMarked.body = customHtml(htmlMarked.body);

  // draft(下書き)で無ければ内容を取得する
  if (content.property.draft.toLowerCase() === "false") {
    // draftプロパティは不要なため、削除する
    delete content.property.draft;
    contentList.push(htmlMarked);
  }
}

contentListJSON = JSON.stringify(contentList); // null, 2
fs.writeFileSync(`${outDir}/${outFileName}`, contentListJSON, "utf-8");

// マークダウンのプロパティと内容を分割する関数
function getMarkdownProperties(content = "", fileName = "") {
  let startIndex = content.indexOf("---", 0);
  let endIndex = content.indexOf("---", 1) + 3; // 最後の文字列も含める
  let property = { fileName: fileName.replace(/\.md/g, "") };
  let body = "";

  if (startIndex === 0) {
    let propStr = content.substring(startIndex + 3, endIndex - 3);
    let propStrArray = propStr.split(/\r\n|\r|\n/);

    for (let prop of propStrArray) {
      if (prop !== "") {
        let [propName, propContent] = prop.split(":");
        property[propName] = propContent.trim();
      }
    }

    body = content.substring(endIndex, content.length - 1).trim();
  }

  return {
    property: property,
    body: body,
  };
}

function customHtml(html) {
  let convertedHtml = html.replace(
    /<span(\s)class="hljs-doctag">@param(\s)<span(\s)class="hljs-type">{.+?}<\/span>(\s)<\/span>.+?(\s)/g,
    function (match) {
      let type = match.match(/{(?<valType>.+?)}/).groups.valType;
      let val = match.match(/}<\/span>(\s|)<\/span>(?<val>.+?)(\s)/).groups.val;
      let replacedVal = `<span class="hljs-doctag-val">${val} </span>`;
      return `<span class="hljs-doctag">@param <span class="hljs-type">{${type}}</span> </span>${replacedVal}`;
    }
  );

  convertedHtml = convertedHtml.replace(
    /<pre><code(\s)class="(js|javascript)">[\s\S]+?<\/code><\/pre>/g,
    function (code) {
      code = code.replace(
        /=&gt;/g,
        '<span class="hljs-arrow-symbol">=&gt;</span>'
      );
      return code;
    }
  );

  convertedHtml = convertedHtml.replace(
    /<table>[\s\S]+?<\/table>/g,
    function (table) {
      return `<div class="table-wrapper">${table}</div>`;
    }
  );

  return convertedHtml;
}
