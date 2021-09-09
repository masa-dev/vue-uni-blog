# content.json の内容

## 作成コマンド

```
npm run create-post
```


## コマンドで生成されるcontent.jsonファイルの形式

```json
[
  {
    "property": {
      "fileName": "20XX-XX-XX",
      "title": "Page title is here."
    },
    "body": "Page body is here."
  },
  ...
]
```


## ディレクトリ

```
src
└── content
    └── content.json
```

### ディレクトリ作成に使用したツール

> [dir-tree](https://dir-tree.netlify.app/)