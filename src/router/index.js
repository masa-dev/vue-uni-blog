import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const siteConfig = require('../../config')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
    children: [
      {
        path: '',
        name: 'Post Home',
        component: () => import('../views/posts/PostHome.vue')
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('../views/posts/Test.vue')
      }
    ]
  },
  {
    path: '/products',
    name: 'Product',
    component: () => import(/* webpackChunkName: "post" */ '../views/Product.vue')
  },
  {
    path: '/*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: siteConfig.pathPrefix, //default: process.env.BASE_URL,
  routes
})

export default router
