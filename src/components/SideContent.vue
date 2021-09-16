<template>
  <div class="side-content">
    <div class="profile">
      <router-link to="/about"
        ><img
          src="../assets/profile-img.jpg"
          title="プロフィール画像"
          alt="プロフィール画像"
      /></router-link>
      <p class="author">{{ getName() }}</p>
      <p class="author-description" v-html="getBio()"></p>
      <p class="author-description">
        <a :href="getContactUrl('github')" target="_blank" rel="noopener"
          >GitHub</a
        >
      </p>
      <div class="tools">
        <a
          :href="getContactUrl('github')"
          target="_blank"
          rel="noopener"
          v-if="seen('github')"
          ><img
            src="../assets/github-icon.png"
            title="github link"
            alt="github.com/masa-dev"
        /></a>
        <a
          :href="getContactUrl('twitter')"
          target="_blank"
          rel="noopener"
          v-if="seen('twitter')"
          ><img
            src="../assets/twitter-icon.png"
            title="twitter link"
            alt="twitter.com/masa_devpro"
        /></a>
        <a :href="getContactUrl('mail')" v-if="seen('mail')"
          ><img src="../assets/mail-icon.png" title="mail" alt="mail"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
const siteConfig = require("../../config");

export default {
  name: "SideContent",
  methods: {
    getName: function () {
      return siteConfig.author.name;
    },
    getBio: function () {
      return siteConfig.author.bio.replace(/\n/g, "<br>");
    },
    getContactUrl: function (type = "") {
      if (type == "mail") {
        return `mailto:${siteConfig.author.contacts.mail}`;
      } else if (type == "github") {
        return `https://github.com/${siteConfig.author.contacts.github}/`;
      } else if (type == "twitter") {
        return `https://twitter.com/${siteConfig.author.contacts.twitter}/`;
      } else {
        return ``;
      }
    },
    getMail: function () {
      return siteConfig.author.mail;
    },
    seen: function (iconName = "") {
      if (
        siteConfig.author[iconName] != "" &&
        Object.keys(siteConfig.author.contacts).indexOf(iconName) !== -1
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "_base.scss";

div.side-content {
  width: $sideContentWidth;
  padding: 20px 0 0 0;
  text-align: center;
  box-sizing: border-box;

  div.profile {
    width: 150px;
    margin: 0 auto;
    position: sticky;
    top: 20px;

    p.author {
      font-size: 1.3em;
      padding: 0;
      margin: 10px 0;
      font-weight: bold;
    }

    p.author-description {
      font-size: 1em;
      padding: 0 15px;
      margin: 5px 0;
      text-align: left;
    }

    > a {
      width: $profileImageWidth;
      height: $profileImageWidth;
      display: block;
      border-radius: 50%;

      > img {
        width: $profileImageWidth;
        height: $profileImageWidth;
        border-radius: 50%;
      }
    }

    div.tools {
      /*text-align: left;*/
      padding: 15px 5px 10px;
      width: 100%;
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: space-around;

      > a > img {
        width: $toolsImageWidth;
        height: $toolsImageWidth;
        border-radius: 50%;
        background-color: gray;
        box-shadow: 0 0 8px gray;

        &:hover {
          background-color: rgb(37, 102, 241);
          transition: background-color 0.3s;
        }
      }
    }
  }
}

@media only screen and (max-width: $flexibleWidth) {
  div.side-content {
    margin: 0 auto;
    margin-top: 30px;
  }
}

// ダークテーマ（スイッチ切り替え用）
body.dark-theme {
  @import "_darkBase.scss";

  div.side-content {
    div.profile {
      div.tools {
        > a > img {
          background-color: transparent;
          box-shadow: none;

          &:hover {
            background-color: rgb(74, 111, 190);
          }
        }
      }
    }
  }
}
</style>
