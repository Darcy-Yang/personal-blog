<template>
  <div class="main-music">
     <TopNav/> 
    <div class="show-music">
      <vue-aplayer class="aplayer" :music="music" ref="player" v-if="flag"></vue-aplayer>
    </div>
  </div>
</template>
<script>
import TopNav from '@/components/nav/TopNav'
import VueAplayer from 'vue-aplayer'

import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'music',
  components: {
    TopNav,
    'vue-aplayer': VueAplayer
  },
  data () {
    return {
      // music: {
      //   title: '',
      //   author: '',
      //   url: '',
      //   pic: 'static/uploads/25.jpg',
      //   lrc: ''
      // },
      music: null,
      flag: false
    }
  },
  created () {
    this.$http.get('/api/music/allMusic').then((response) => {
      this.music = response.body
      if (this.music !== null) {
        this.flag = true
      }
    })
  }
}
</script>
<style lang="less" scoped>
.main-music {
  margin-top: 88px;
  background: #ebebeb;
}
.show-music {
  display: flex;
  align-items: center;
  justify-content: center;
  .aplayer {
    margin-top: 60px;
    width: 60%;
  }
}
</style>
