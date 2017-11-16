<template>
  <div class="upload-music">
    <TopNav/>
    <div class="main-music">
      <form>
        <input class="music" type="file" @change="uploadMusic"/>
      </form>
      <button class="button" @click="compelete">上传音乐</button>
    </div>
  </div>
</template>
<script>
import TopNav from '@/components/nav/TopNav'

import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'uploadMusic',
  components: {
    TopNav
  },
  methods: {
    uploadMusic (e) {
      const music = e.target.files[0]
      const xhr = new XMLHttpRequest()
      let fd = new FormData()
      fd.append('music', music)
      xhr.open('post', '/api/music/uploadMusic')
      xhr.onload = function () {
        console.log(xhr.status)
      }
      xhr.send(fd)
    },
    compelete () {
      this.$http.post('/api/music/addMusic', {
        path: 'static/music/favorite.mp3'
      }, {}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.upload-music {
  margin-top: 88px;
}
.main-music {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.music {
  margin-top: 66px;
}
.button {
  margin: 24px 0px 0px -180px;
}
</style>
