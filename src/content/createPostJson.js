'use strict';

const marked = require("marked");
const hljs = require("highlight.js");
const fs = require("fs");

const dir = './src/content/post';
const outDir = './src/content';
const outFileName = 'content.json';
const fileList = fs.readdirSync(dir);
fileList.sort();

let contentList = [];
let contentListJSON;

marked.setOptions({
  langPrefix: '',
  highlight: function(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  }
});

for (let fileName of fileList) {
  let content = fs.readFileSync(`${dir}/${fileName}`, 'utf-8');
  content = getMarkdownProperties(content, fileName);
  let htmlMarked = {
    property: content.property,
    body: marked(content.body),
  }
  contentList.push(htmlMarked);
}

contentListJSON = JSON.stringify(contentList,); // null, 2
fs.writeFileSync(`${outDir}/${outFileName}`, contentListJSON, 'utf-8');


// マークダウンのプロパティと内容を分割する関数
function getMarkdownProperties(content = "", fileName = "") {
  let startIndex = content.indexOf('---', 0);
  let endIndex = content.indexOf('---', 1) + 3; // 最後の文字列も含める
  let property = { fileName: fileName.replace(/\.md/g, '') };
  let body = "";

  if (startIndex === 0) {
    let propStr = content.substring(startIndex + 3, endIndex - 3);
    let propStrArray = propStr.split(/\r\n|\r|\n/);

    for (let prop of propStrArray) {
      if (prop !== '') {
        let [propName, propContent] = prop.split(':');
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
