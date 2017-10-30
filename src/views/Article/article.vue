<template>
<div>
  <span> {{ this.article.title }} </span>
  <span> {{ this.article.content }} </span>
</div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
      article: this.$route.params.article[this.$route.params.id]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
