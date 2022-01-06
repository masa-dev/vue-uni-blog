<template>
  <div>
    <h2>記事</h2>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.property.fileName">
        <router-link :to="`/post/${post.property.fileName}`">
          <div class="post-item">{{ post.property.title }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import content from "@/content/content.json";

const reversedContent = content.reverse();

export default {
  title: "Post",
  data() {
    return {
      posts: reversedContent,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../components/_base.scss";

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
    border: 1px solid rgb(214, 226, 231);
    background-color: rgb(235, 239, 241);
    border-radius: 10px;

    &:nth-child(2n - 1) {
      margin-right: 2%;
    }

    .post-item {
      padding: 0.7rem 1rem;
    }

    &:hover {
      border: 1px solid rgb(225, 231, 235);
      background-color: rgb(225, 231, 235);
    }
  }
}

@media only screen and (max-width: $flexibleWidth) {
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

body.dark-theme {
  /* post list style */
  ul.post-list {
    li {
      border-color: #40404d;
      background-color: #2d2d31;
      &:hover {
        background-color: rgb(36, 36, 41);
      }
    }
  }
}
</style>
