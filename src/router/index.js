import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const siteConfig = require('../../config')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
    children: []
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "post" */ '../views/Product.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: siteConfig.pathPrefix, //default: process.env.BASE_URL,
  routes
})

export default router
