import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/Index.vue'
import content from '@/views/Content.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/index',
    name: 'Home',
    component: Index,
    children: [
      {
        path: 'content/:id',
        name: 'content',
        component: content
      }
    ]
  },
  {
    path: '/',
    redirect: '/index'
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router