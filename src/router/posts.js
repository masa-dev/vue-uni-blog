module.exports = [
  {
    path: "",
    name: "Post Home",
    component: () => import("../views/posts/PostHome.vue"),
  },
  {
    path: ":id",
    name: "Post Content",
    component: () => import("../views/posts/postContent.vue"),
  },
  {
    path: "*",
    name: "Not Found",
    component: () => import("../views/404.vue"),
  },
];
