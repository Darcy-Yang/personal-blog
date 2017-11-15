<template>
  <div class="main">
    <form>
      <input class="title" type="text" placeholder="标题" v-model="title"/>
      <input class="img" type="file" placeholder="上传封面图片" @change="uploadImg"/>
      <textarea class="content" placeholder="想说的..." cols="3" wrap="hard" v-model="content"></textarea>
    </form>
    <button class="submit" @click="addArticle">完成</button>
  </div>
</template>

<script>
import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'editor',
  data () {
    return {
      title: '',
      content: '',
      maxId: 0
    }
  },
  created () {
    this.$http.get('/api/article/getMaxId').then((response) => {
      this.maxId = response.body
    })
  },
  methods: {
    uploadImg (e) {
      const avatar = e.target.files[0]
      const xhr = new XMLHttpRequest()
      let fd = new FormData()
      fd.append('avatar', avatar)
      xhr.open('post', '/api/article/uploadImg')
      xhr.onload = function () {
        console.log(xhr.status)
      }
      xhr.send(fd)
    },
    addArticle () {
      // var reg1 = new RegExp('', 'g')
      var title = this.title
      var content = this.content
      // var regContent = content.replace(reg1, '<br>')
      var avatar = `static/uploads/${this.maxId}.jpg`
      var date = new Date()
      var month = date.getMonth()
      var day = date.getDate()
      var timeStamp = `${month + 1}月${day}日`
      // 需要进行封装，同时把vue－resource替换成axios；
      this.$http.post('/api/article/addArticle', {
        title: title,
        content: content,
        avatar: avatar,
        date: timeStamp
      }, {}).then((response) => {
      })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  margin: 0 auto;
  margin-top: 88px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    width: 600px;
    height: 40px;
    margin: 20px 0px;
    font-size: 24px;
    border-radius: 3px;
  }
  .img {
    height: 40px;
  }
  .content {
    width: 600px;
    height: 480px;
    resize: none;
    font-size: 16px;
    border-radius: 3px;
    word-wrap: break-word;
    white-space: normal;
  }
  .submit {
    align-self: flex-end;
    margin: 20px 0px;
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    color: white;
    background: rgb(58, 139, 250);
  }
}

</style>
