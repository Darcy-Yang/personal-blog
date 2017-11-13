<template>
  <div class="main">
    <NavBar/>
    <div class="whole">
      <div class="navbar">
        <NavBar class="content-nav" :showAuthor="showAuthor" :fontStyle="fontStyle" :items="items" />
      </div>
      <div class="display">
        <div class="article" @click="read(item)" v-for="item in article">
          <img :src="item.avatar" alt="image"/></br>
          <div class="arrow"></div>
          <div class="title">
            <span>{{ item.title }}</span></br>
          </div>
          <div class="content">
            <span>
              {{ item.content }}
            </span>
          </div>
        </div>
      </div>
   </div> 
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar'

import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'index',
  components: {
    NavBar
  },
  data () {
    return {
      showAuthor: false,
      fontStyle: 'color: orange;',
      items: [
        { name: '优选', href: '#' },
        { name: '优选', href: '#' },
        { name: '优选', href: '#' },
        { name: '写文章', href: '#/write' }
      ],
      article: null
    }
  },
  created () {
    this.$http.get('/api/article/allArticle').then((response) => {
      this.article = response.body
    })
  },
  methods: {
    read (item) {
      this.$http.post('/api/article/findById', {id: item.id}, {}).then((response) => {
        this.$router.push({ name: 'article', params: { article: response.body[0] } })
      })
    }
  }
}
</script>

<style lang="less" scoped>

.main {
  margin: -8px;
}
.whole {
  background: rgb(245, 245, 245);
}
.navbar {
  margin-top: -8px;
  display: flex;
  flex-direction: column;
  .content-nav {
    align-self: flex-end;
    font-size: 18px;
  }
}
.display {
  margin: 0px 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .article {
    margin: 0px 10px 28px 10px;
    width: 22%;
    height: 522px;
    cursor: pointer;
    background: white;
    img {
      width: 100%;
      height: 215px;
    }
    .arrow {
      width: 0;
      height: 0;
      position: relative;
      top: -16px;
      left: 48%;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 12px solid white;
    }
    .title {
      text-align: center;
      margin-top: 20px;
      font-size: 26px;
    }
    .content {
      margin: 10px 16px 0px 16px;
    }
  }
}
</style>

