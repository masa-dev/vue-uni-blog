<template>
  <div class="main-content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: {},
};
</script>

<style lang="scss">
@import "_base.scss";
@import "highlight/_vs.scss";
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");

div.main-content {
  width: $mainContentWidth;
  padding: 0 15px;
  box-sizing: border-box;

  menu {
    padding: 20px;
    background-color: rgb(231, 228, 202);
    border-radius: 10px;
    max-width: 500px;

    ul {
      margin: 0;

      li {
        list-style-type: disc;
      }
    }
  }

  h1 {
    font-size: 2.2rem;
    text-align: center;
  }

  h2 {
    margin-top: 40px;
    border: {
      bottom: 4px solid;
      color: $mainHeadingBorderColor;
      radius: 4px;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin: {
      top: 1.75em;
      left: 0.6em;
      bottom: 0.9em;
    }
    padding: {
      top: 0.2em;
      left: 1em;
      bottom: 0.2em;
    }

    border: {
      left: 4px solid;
      color: $mainHeadingBorderColor;
      radius: 3px;
    }
  }

  h4 {
    font-size: 1.15rem;
    margin: {
      top: 1.6em;
      bottom: 0.9rem;
      left: 0.5rem;
    }
    padding: {
      top: 0.1em;
      left: 1.25em;
      bottom: 0.1em;
    }
    border-left: 3px dashed gray;
  }

  .table-wrapper {
    table {
      margin: 1rem;
      border-collapse: collapse;

      tr:nth-child(even) {
        //偶数列のみ少し濃くする
        background-color: rgb(244, 245, 248);
      }

      th,
      td {
        padding: 0.3rem 1rem;
        border: solid 1px;
        border-color: rgb(180, 185, 189);
      }
    }
  }

  .img-wrapper {
    margin: 0 1rem;
    overflow-x: auto;

    img {
      max-width: $flexibleWidth;
      border-radius: 10px;
    }
  }

  blockquote {
    font-style: italic;
    background-color: rgb(228, 228, 228);
    padding: 0.4em 0.7rem;
    margin: 1rem;
    border: {
      radius: 0.25rem;
      left: 4px solid;
      color: rgb(86, 162, 212);
    }

    > p {
      padding: 0;
      margin: 0.3rem;
    }
  }

  ul {
    padding-left: 20px;
    margin-left: 20px;
  }

  code {
    padding: 0.1em 0.3em 0.15em;
    margin: 0 0.15em;
    background-color: rgb(248, 230, 195);
    border-radius: 5px;
    white-space: nowrap;
    font-family: Consolas, "Ubuntu Mono", monospace;
  }

  pre {
    padding: 10px;
    margin: 1rem;
    overflow-x: auto;
    border: 1px solid;
    border: {
      color: rgb(240, 230, 207);
      radius: 6px;
    }

    code {
      padding: unset;
      margin: unset;
      background-color: unset;
      white-space: unset;
      font-size: 1rem;
      font-family: Consolas, "Ubuntu Mono", Noto Sans JP, monospace;
      line-height: 120%;
    }
  }

  details {
    height: var(--collapsed);
    overflow: hidden;
    margin: 1em;
    border: 1px solid gray;
    border-radius: 5px;
    transition: height 300ms cubic-bezier(0.4, 0.01, 0.165, 0.99);
    box-shadow: 0 0 3px rgba(128, 128, 128, 0.4);

    summary {
      padding: 0.5em;
      background-color: rgb(233, 241, 241);
      outline: none;
      user-select: none;
      cursor: pointer;
    }

    &[open] {
      summary {
        border-bottom: 1px solid gray;
      }
    }
  }
}

@media only screen and (max-width: $flexibleWidth) {
  div.main-content {
    width: 100%;
    padding: 0 10px;

    h2 {
      padding-left: 0.2em;
    }

    p {
      padding-left: 0.3em;
    }

    .table-wrapper {
      overflow-x: auto;

      table {
        min-width: 450px;
        margin: {
          left: 0.3em;
          right: 0.3em;
        }
      }
    }

    .img-wrapper {
      margin: 0;
    }

    pre {
      margin: {
        left: 0.3em;
        right: 0.3em;
      }
    }

    blockquote {
      margin: {
        left: 0.4em;
        right: 0.4em;
      }
    }

    details {
      margin-left: 0;
      margin-right: 0;
    }
  }
}

// ダークテーマ（スイッチ切り替え用）
body.dark-theme {
  @import "_darkBase.scss";
  @import "highlight/_vs2015.scss";

  div.main-content {
    menu {
      background-color: #2c2c30;
    }

    h2 {
      border: {
        bottom: 4px solid;
        color: $mainHeadingBorderColor;
      }
    }

    h3 {
      border: {
        left: 4px solid;
        color: $mainHeadingBorderColor;
      }
    }

    table {
      tr:nth-child(even) {
        //偶数列のみ少し濃くする
        background-color: rgb(40, 40, 43);
      }

      th,
      td {
        border-color: rgb(85, 85, 85);
      }
    }

    blockquote {
      border-color: rgb(50, 94, 148);
      background-color: rgb(41, 41, 44);
    }

    code {
      background-color: rgb(69, 69, 83);
    }

    pre {
      border-color: rgb(85, 85, 85);

      code {
        background-color: unset;
      }
    }

    details {
      box-shadow: none;
      summary {
        background-color: rgb(55, 60, 65);
      }
    }
  }
}
</style>
