<template>
  <div class="photo-main">
    <TopNav/>
  </div>
</template>

<script>
import TopNav from '@/components/nav/TopNav'

export default {
  name: 'photo',
  components: {
    TopNav
  }
}
</script>

<style lang="less" scoped>
.photo-main {
  margin: 88px -8px 0px -8px;
}
</style>
