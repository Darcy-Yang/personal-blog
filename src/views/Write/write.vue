<template>
  <div>
    <NavBar/>
    <Editor/>
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar'
import Editor from '@/components/Editor'

export default {
  name: 'write',
  components: {
    NavBar,
    Editor
  }
}
</script>

<style lang="less" scoped>

</style>

