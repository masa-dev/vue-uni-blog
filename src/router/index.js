import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueGtag from "vue-gtag"

const siteConfig = require('../../config');

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
    children: require('./posts')
  },
  {
    path: '/products',
    name: 'Product',
    component: () => import(/* webpackChunkName: "post" */ '../views/Product.vue')
  },
  {
    path: '/*',
    name: 'Not Found',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',//'history',
  base: siteConfig.pathPrefix, //default: process.env.BASE_URL,
  routes
})

Vue.use(VueGtag, {
  config: { id: siteConfig.googleAnalyticsId }
}, router)


export default router
