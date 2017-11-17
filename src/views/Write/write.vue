<template>
  <div>
    <TopNav class="top-nav"/>
    <Editor/>
  </div>
</template>

<script>
import TopNav from '@/components/nav/TopNav'
import Editor from '@/components/Editor'

export default {
  name: 'write',
  components: {
    TopNav,
    Editor
  }
}
</script>

<style lang="less" scoped>
.top-nav {
  margin-left: -8px;
}
</style>

