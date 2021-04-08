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
    path: '*',
    name: 'Not Found',
    component: () => import('../views/404.vue')
  }
]