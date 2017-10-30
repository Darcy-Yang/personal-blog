<template>
<div class="whole">
  <NavBar/>
  <div class="article-main">
    <div class="title">
      <span>{{ this.article.title }}</span>
    </div>
    <img src="../../assets/image.png"/>
    <div class="content">
      <span>{{ this.article.content }}</span>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '@/components/nav/NavBar'

export default {
  name: 'article',
  components: {
    NavBar
  },
  data () {
    return {
      article: this.$route.params.article[this.$route.params.id]
    }
  }
}
</script>

<style lang="less" scoped>
.whole {
  margin-bottom: 60px;
}
.article-main {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    width: 100%;
    margin: 20px 0px;
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
    letter-spacing: 1px;
  }
}
</style>
