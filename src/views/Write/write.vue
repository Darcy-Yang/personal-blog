<template>
  <div>
    <TopNav/>
    <Editor/>
  </div>
</template>

<script>
import TopNav from '@/components/nav/topNav'
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

</style>

