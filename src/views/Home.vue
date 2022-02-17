<template>
  <div class="Home">
    <h2>ホームページ</h2>

    <h3>このサイトについて</h3>

    <p>情報物理研究室の戸田の卒研用のサイトです。</p>
    <p>卒業研究の資料や、技術的な記事をここに置いています。</p>
    <p>
      GitHubリンク：<a
        href="https://github.com/masa-dev/vue-uni-blog"
        target="_blank"
        rel="noopener noreferrer"
        >masa-dev/vue-uni-blog</a
      >
    </p>

    <h3>卒業論文関連</h3>

    <div class="table-wrapper">
      <table>
        <tbody>
          <tr>
            <th>種類</th>
            <th>リンク</th>
          </tr>
          <tr>
            <td>制作アプリケーション</td>
            <td>
              <a
                href="./cbt-three-panel-manga/"
                target="_blank"
                rel="noopener noreferrer"
                >認知行動療法３コマ漫画</a
              >
            </td>
          </tr>
          <tr>
            <td>ソースコード</td>
            <td>
              <a
                href="https://github.com/masa-dev/three-panel-comic-demo"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub</a
              >
            </td>
          </tr>
          <tr>
            <td>ソースコード（閲覧用）</td>
            <td>
              <a
                href="https://github1s.com/masa-dev/three-panel-comic-demo"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub1s</a
              >
            </td>
          </tr>
          <tr>
            <td>卒論（Word）</td>
            <td>
              <a href="./thesis/1810990019戸田正彦R3卒論.docx"
                >1810990019戸田正彦R3卒論.docx</a
              >
            </td>
          </tr>
          <tr>
            <td>卒論（PDF）</td>
            <td>
              <a
                href="./thesis/1810990019戸田正彦R3卒論.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >1810990019戸田正彦R3卒論.pdf</a
              >
            </td>
          </tr>
          <tr>
            <td>卒論プレゼン（パワポ）</td>
            <td>
              <a href="./thesis/卒論プレゼンテーション.pptx"
                >卒論プレゼンテーション.pptx</a
              >
            </td>
          </tr>
          <tr>
            <td>卒論発表原稿（PDF）</td>
            <td>
              <a
                href="./thesis/卒論発表原稿.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >卒論発表原稿.pdf</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>研究室</h3>
    <p>研究室のリンク：<a href="../">2021年研究室</a></p>

    <h3>成果物</h3>
    <ul>
      <li><a href="./product/gBooksAPI/">gBooksAPI</a></li>
      <li><a href="./product/localStrage/localStrage.html">localStrage</a></li>
      <li><a href="./product/toDoList/todo.html">toDoList</a></li>
      <li><a href="./product/BBS/">掲示板</a></li>
      <li><a href="./product/md2html/">マークダウン変換</a></li>
      <li><a href="./product/threePanelComic/sample/">3コマ漫画サンプル</a></li>
      <li>
        <a href="./product/threePanelComic/sample2/">3コマ漫画サンプル 2</a>
      </li>
      <li>
        <a href="./product/threePanelComic/sample3/">3コマ漫画サンプル 3</a>
      </li>
      <li>
        <a href="./product/firebaseTest/login.html">ログイン デモ</a>
      </li>
      <li>
        <a href="https://github.com/masa-dev/three-panel-comic-demo"
          >3コマ漫画サンプル デモ</a
        >
      </li>
    </ul>

    <h3>読んだ本</h3>
    <ul>
      <li>
        <a
          href="https://www.amazon.co.jp/dp/4873119235/ref=cm_sw_r_tw_dp_0WX0N6D9C2P64S7BSMFP"
          >ハンズオン Node.js</a
        >
      </li>
      <li>
        <a
          href="https://www.amazon.co.jp/dp/4873115655/ref=cm_sw_r_tw_dp_X0FRBX5JW9GSXX658T2A"
          >リーダブルコード</a
        >
      </li>
    </ul>

    <h3>参考メモ</h3>
    <ul>
      <li>
        <a
          href="https://www.hws-kyokai.or.jp/images/ronbun/all/201608-03.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >認知の偏りと抑うつの関連 - 厚生労働統計協会</a
        >
      </li>
    </ul>

    <h3>スワイプに関する参考サイトとか</h3>
    <ul>
      <li>
        <a
          href="https://getbootstrap.jp/docs/5.0/components/carousel/"
          target="_blank"
          rel="noopener noreferrer"
          >Bootstrap carousel(カルーセル)</a
        >
      </li>
      <li>
        <a
          href="https://naver.github.io/egjs-flicking/"
          target="_blank"
          rel="noopener noreferrer"
          >Flicking</a
        >
      </li>
      <li>
        <a
          href="https://swiperjs.com/demos"
          target="_blank"
          rel="noopener noreferrer"
          >Swiper</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  title: "Home",
  description:
    "情報物理研究室の戸田の卒研用のサイトです。卒業研究の資料や、技術的な記事をここに置いています。",
};
</script>
