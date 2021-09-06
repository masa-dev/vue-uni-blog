<template>
  <div v-html="body"></div>
</template>

<script>
import content from "../../content/export/content.json";

function getPost(id, callback) {
  callback(false, searchPost(id).body);
}

function searchPost(id) {
  for (let post of content) {
    if (post.property.fileName === id) {
      return {
        body: post.body,
        title: post.property.title,
      };
    }
  }

  return {
    body: "Not Found",
    title: "Not Found",
  };
}

export default {
  title: "",
  data() {
    return {
      body: searchPost(this.$route.params.id).body,
      id: this.$route.params.id,
    };
  },
  methods: {
    log() {
      console.log(this.$route.params.id);
    },
    setData(err, post) {
      if (err) {
        this.error = err.toString();
      } else {
        this.body = post;
      }
    },
  },
  beforeMount() {
    this.$options.title = searchPost(this.$route.params.id).title;
  },
  beforeRouteEnter(route, redirect, next) {
    redirect;
    getPost(route.params.id, (err, post) => {
      next((vm) => vm.setData(err, post));
    });
  },
  beforeRouteUpdate(to, from, next) {
    from;
    this.body = null;
    getPost(to.params.id, (err, post) => {
      this.setData(err, post);
      next();
    });
  },
};
</script>