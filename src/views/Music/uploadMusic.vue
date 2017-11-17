<template>
  <div class="upload-music">
    <TopNav/>
    <div class="main-music">
      <form>
        <input class="info" type="text" placeholder=" 歌名" v-model="name"/>
        <input class="music" type="file" accept=".mp3" @change="uploadMusic"/>
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
  data () {
    return {
      name: '',
      maxId: 0,
      date: null
    }
  },
  created () {
    this.$http.get('/api/music/getMaxId').then((response) => {
      this.maxId = response.body
    })
  },
  methods: {
    uploadMusic (e) {
      const music = e.target.files[0]
      this.name = music.name
      var time = new Date()
      var month = time.getMonth()
      var day = time.getDate()
      this.date = `${month + 1}月${day}日`
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
      var reg = new RegExp('.mp3', 'g')
      var regName = this.name.replace(reg, '')
      this.$http.post('/api/music/addMusic', {
        name: regName,
        path: `static/music/${this.maxId}.mp3`,
        cover: `static/music/cover/${this.maxId}.jpg`
      }, {}).then((response) => {
      })
      this.$router.push('/music')
    }
  }
}
</script>
<style lang="less" scoped>
.upload-music {
  margin: 0px -5px;
  margin-top: 88px;
}
.main-music {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    flex: 1;
    margin-top: 28px;
    background: #ebebeb;
    border-radius: 6px;
  }
}
.info {
  margin: 20px;
}
.button {
  margin: 24px 0px 0px 365px;
  width: 90px;
  height: 30px;
  cursor: pointer;
  background: rgb(58, 139, 250);
  border: none;
  border-radius: 3px;
}
</style>
