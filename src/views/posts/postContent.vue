<template>
  <div v-html="body"></div>
</template>

<script>
import content from "@/content/content.json";

export default {
  title: "",
  data() {
    return {
      body: this.searchPost(this.$route.params.id).body,
      id: this.$route.params.id,
    };
  },
  methods: {
    setData(err, post) {
      if (err) {
        this.error = err.toString();
      } else {
        this.body = post;
      }
    },
    getPost(id, callback) {
      callback(false, this.searchPost(id).body);
    },
    searchPost(id) {
      for (let post of content) {
        if (post.property.fileName === id) {
          return {
            body: post.body,
            title: post.property.title,
          };
        }
      }

      let errHtml = `
        <h2>404 - Not Found</h2>
        <p>お探しのページは見つかりませんでした。</p>
        <p>リクエストURL： ${location.origin}/#/post/${id}</p>
      `;

      return {
        body: errHtml,
        title: "404: Not Found",
      };
    },
  },
  beforeMount() {
    this.$options.title = this.searchPost(this.$route.params.id).title;
  },
  beforeRouteEnter(route, redirect, next) {
    redirect;
    this.getPost(route.params.id, (err, post) => {
      next((vm) => vm.setData(err, post));
    });
  },
  beforeRouteUpdate(to, from, next) {
    from;
    this.body = null;
    this.getPost(to.params.id, (err, post) => {
      this.setData(err, post);
      next();
    });
  },
};
</script>
