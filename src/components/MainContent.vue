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

  h1 {
    font-size: 30px;
  }

  h2 {
    border: {
      bottom: 4px solid;
      color: $mainHeadingBorderColor;
      radius: 4px;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1.25em;
    margin-bottom: 0.9em;
    padding-left: 15px;
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
      top: 1.25rem;
      bottom: 0.9rem;
      left: 0.5rem;
    }
    margin-top: 1.25em;
    margin-bottom: 0.9em;
    padding: {
      top: 0.1em;
      left: 1.25em;
      bottom: 0.1em;
    }
    border-left: 3px dashed gray;
  }

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

  .img-wrapper {
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
    font-family: Consolas, 'Ubuntu Mono', monospace;
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
      font-family: Consolas, 'Ubuntu Mono', Noto Sans JP, monospace;
      line-height: 120%;
    }
  }

  /* post list style */
  ul.post-list {
    padding: 0 !important;
    margin-left: 0px !important;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    li {
      box-sizing: border-box;
      width: 49%;
      margin-bottom: 20px;
      border: 1px solid rgb(184, 183, 183);
      border-radius: 10px;

      &:nth-child(2n - 1) {
        margin-right: 2%;
      }

      .post-item {
        padding: 0.7rem 1rem;
      }

      &:hover {
        background-color: rgb(248, 248, 248);
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

    table {
      margin: {
        left: 0.3em;
        right: 0.3em;
      }
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

    /* post list style */
    ul.post-list {
      li {
        width: 100%;
        margin-bottom: 13px;

        &:nth-child(2n - 1) {
          margin-right: 5px;
        }

        margin: {
          left: 5px;
          right: 5px;
        }
      }
    }
  }
}

// ダークテーマ（スイッチ切り替え用）
body.dark-theme {
  @import "_darkBase.scss";
  @import "highlight/_vs2015.scss";

  div.main-content {
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

    /* post list style */
    ul.post-list {
      li {
        border-color: rgb(92, 92, 92);

        &:hover {
          background-color: rgb(36, 36, 41);
        }
      }
    }
  }
}
</style>
