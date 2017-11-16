import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/index'
import Article from '@/views/Article/article'
import Write from '@/views/Write/write'
import Music from '@/views/Music/music'
import UploadMusic from '@/views/Music/uploadMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
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
    },
    {
      path: '/music',
      component: Music,
      name: 'music'
    },
    {
      path: '/upload-music',
      component: UploadMusic,
      name: 'uploadMusic'
    }
  ]
})
