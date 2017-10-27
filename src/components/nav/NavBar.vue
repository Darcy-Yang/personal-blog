<template>
<div class="main">
  <ul class="nav">
    <li v-for="item in items"><a :href="item.href">{{item.name}}</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      items: [
        { name: '文章', href: '#' },
        { name: '文章', href: '#' },
        { name: '文章', href: '#' },
        { name: '文章', href: '#' },
        { name: '关于我', href: '#' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  margin-right: 120px;
  align-items: center;
  justify-content: flex-end;
  li {
    float: left;
    margin-right: 60px;
    list-style: none;
    a {
      text-decoration: none;
    }
  }
}
</style>
