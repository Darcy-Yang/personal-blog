<template>
  <div>
    <NavBar/>
    <div class="content">
      <NavBar class="content-nav" :showAuthor="showAuthor" :fontStyle="fontStyle" :items="items" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar'

export default {
  name: 'index',
  components: {
    NavBar
  },
  data () {
    return {
      showAuthor: false,
      fontStyle: 'color: orange;',
      items: [
        { name: '优选', href: '#' },
        { name: '优选', href: '#' },
        { name: '优选', href: '#' },
        { name: '优选', href: '#' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightgray;
  .content-nav {
    align-self: flex-end;
    font-size: 18px;
  }
}
</style>

