<template>
  <div class="main-music">
    <TopNav/>
    <div class="show-music">
      <div class="music" v-for="item in music">
        <embed class="music-list" height="200px" width="200px" :src="item.path"/>
      </div>
    </div>
  </div>
</template>
<script>
import TopNav from '@/components/nav/TopNav'

import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'music',
  components: {
    TopNav
  },
  data () {
    return {
      music: null
    }
  },
  created () {
    this.$http.get('/api/music/allMusic').then((response) => {
      this.music = response.body
    })
  }
}
</script>
<style lang="less" scoped>
.main-music {
  margin-top: 88px;
}
.music-list {
  margin-top: 20px;
}
</style>
