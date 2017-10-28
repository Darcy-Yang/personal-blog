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
        { name: '文章', href: '#' },
        { name: '文章', href: '#' },
        { name: '文章', href: '#' },
        { name: '文章', href: '#' },
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
  margin: 18px 120px 18px 40px;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 24px;
    font-weight: bold;
  }
  li {
    float: left;
    margin-right: 60px;
    list-style: none;
    a {
      color: gray;
      text-decoration: none;
    }
  }
}
</style>
