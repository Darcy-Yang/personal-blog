<template>
<div class="main">
  <ul class="nav">
    <li v-for="item in items"><a :style="fontStyle" :href="item.href">{{item.name}}</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    fontStyle: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  margin: 18px 2px 18px 40px;
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