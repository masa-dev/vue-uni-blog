module.exports = [
  {
    path: '',
    name: 'Post Home',
    component: () => import('../views/posts/PostHome.vue')
  },
  {
    path: 'test',
    name: 'Test',
    component: () => import('../views/posts/Test.vue')
  },
  {
    path: 'post-210305',
    name: '',
    component: () => import('../views/posts/post-210305.vue')
  },
  {
    path: 'post-210412',
    name: '',
    component: () => import('../views/posts/post-210412.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('../views/404.vue')
  }
]