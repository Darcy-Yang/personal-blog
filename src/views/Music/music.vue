<template>
  <div class="main-music">
    <TopNav/>
    <div class="show-music">
      <div class="music" v-for="item in music">
        <img class="image" src="static/uploads/25.jpg" alt="image"/>
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
  background: #ebebeb;
}
.show-music {
  display: flex;

}
.music {
  display: flex;
  margin: 0px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image {
  margin-top: 20px;
  width: 200px;
  height: 160px;
}
.music-list {
  width: 200px;
  height: 62px;
  background-color: #ebebeb;
}
.music-name {
  margin-top: -16px;
  text-align: center;
}
</style>
