<template>
  <div class="whole">
    <TopNav/>
    <div class="article-main">
      <div class="title">
        <span>{{ this.article.title }}</span>
      </div>
      <img :src="article.avatar" />
      <div class="content">
        <span class="content-word">{{ this.article.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/nav/TopNav'

export default {
  name: 'article',
  components: {
    TopNav
  },
  data () {
    return {
      article: this.$route.params.article
    }
  }
}
</script>

<style lang="less" scoped>
.whole {
  margin-bottom: 60px;
}

.article-main {
  margin: 0 -8px;
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    width: 100%;
    margin: 16px -20px 30px -20px;
    padding: 20px 0px;
    text-align: center;
    font-size: 36px;
    background: rgb(245, 245, 245);
  }
  img {
    width: 40%;
    height: 340px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  .content {
    width: 40%;
    font-size: 18px;
    letter-spacing: 1.2px;
    text-align: center;
    text-align-last: left;
    word-wrap: break-word;
    white-space: normal;
    background: #ebebeb;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    .content-word {
      padding: 20px;
    }
  }
}
</style>
