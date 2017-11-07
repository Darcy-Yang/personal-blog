<template>
  <div class="main">
    <form>
      <input class="title" type="text" placeholder="标题" v-model="title"/>
      <textarea class="content" placeholder="想说的..." v-model="content"></textarea>
      <button class="submit" @click="addArticle">提交</button>
    </form>
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
      content: ''
    }
  },
  methods: {
    addArticle () {
      var title = this.title
      var content = this.content
      // 需要进行封装📦
      this.$http.post('/api/article/addArticle', {
        title: title,
        content: content
      }, {}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  .title {
    width: 600px;
    height: 40px;
    margin: 20px 0px;
    font-size: 24px;
    border-radius: 3px;
  }
  .content {
    width: 600px;
    height: 480px;
    resize: none;
    font-size: 16px;
    border-radius: 3px;
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
