<template>
<div class="main">
  <span v-if="showAuthor">{{ author }}</span>
  <ul class="nav">
    <li v-for="item in items"><a :style="fontStyle" :href="item.href">{{item.name}}</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    showAuthor: {
      type: Boolean,
      default: true
    },
    fontStyle: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => [
        { name: '首页', href: '/#/' },
        { name: '音乐', href: '#' },
        { name: '图片', href: '#' },
        { name: '书评', href: '#' },
        { name: '关于我', href: '#' }
      ]
    }
  },
  data () {
    return {
      author: 'Daniel Yang'
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  position: fixed;
  width: 100%;
  height: 88px;
  margin: -88px 0 0 -8px;
  align-items: center;
  justify-content: space-between;
  background: white;
  z-index: 999;
  box-shadow: 0px 2px 8px #665e5e;
  span {
    padding: 2px 10px;
    margin-left: 32px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    background: blue;
  }
  li {
    float: left;
    margin-right: 60px;
    list-style: none;
    a {
      color: black;
      text-decoration: none;
    }
    a:hover {
      color: orange;
    }
  }
}
</style>
