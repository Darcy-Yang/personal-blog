<template>
  <div class="main-music">
    <TopNav/>
    <div class="show-music">
      <div class="music" v-for="item in music">
         <embed class="music-list" :src="item.path" autostart="false"/></br>
          <div class="music-name">
            <span>{{ item.name }}</span>
          </div>
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
.show-music {
  display: flex;
  align-items: center;
  justify-content: center;
}
.music-list {
  margin-top: 20px;
  width: 200px;
  height: 200px;
}
.music-name {
  text-align: center;
}
</style>
