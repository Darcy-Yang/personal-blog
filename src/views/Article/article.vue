<template>
  <div class="whole">
    <div class="article-main">
      <div class="title">
        <span>{{ this.article.title }}</span>
      </div>
      <img :src="article.avatar" />
      <div class="content">
        <span>{{ this.article.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article',
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    width: 100%;
    margin: 10px -20px 30px -20px;
    padding: 20px 0px;
    text-align: center;
    font-size: 36px;
    background: rgb(245, 245, 245);
  }
  img {
    width: 40%;
    height: 360px;
  }
  .content {
    width: 40%;
    padding: 20px;
    font-size: 18px;
    letter-spacing: 1.2px;
    text-align: center;
    text-align-last: left;
  }
}
</style>
