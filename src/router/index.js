import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/index'
import Article from '@/views/Article/article'
import Write from '@/views/Write/write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'index'
    },
    {
      path: '/article',
      component: Article,
      name: 'article'
    },
    {
      path: '/write',
      component: Write,
      name: 'write'
    }
  ]
})
