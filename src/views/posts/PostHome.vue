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
