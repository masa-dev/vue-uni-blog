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
    name: 'サイトの構成',
    component: () => import('../views/posts/post-210305.vue')
  },
  {
    path: 'post-210412',
    name: 'JavaScriptのプライベートについて',
    component: () => import('../views/posts/post-210412.vue')
  },
  {
    path: 'post-210426',
    name: 'クロージャ',
    component: () => import('../views/posts/post-210426.vue')
  },
  {
    path: 'post-210511',
    name: 'JavaScriptで使われる構文など',
    component: () => import('../views/posts/post-210511.vue')
  },
  {
    path: 'post-210518',
    name: '非同期処理とコールバック',
    component: () => import('../views/posts/post-210518.vue')
  },
  {
    path: 'post-210615',
    name: '分割代入',
    component: () => import('../views/posts/post-210615.vue')
  },
  {
    path: 'post-210628',
    name: 'ES2021とかで興味を持ったものとか',
    component: () => import('../views/posts/post-210628.vue')
  },
  {
    path: 'post-210706',
    name: 'URLでGoogleカレンダーに登録する',
    component: () => import('../views/posts/post-210706.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('../views/404.vue')
  }
]