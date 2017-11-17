<template>
<div class="main">
  <span class="author">{{ author }}</span>
  <div class="tabs">
    <router-link to="/index" active-class="active">
      <span>首页</span>
    </router-link>
    <router-link to="/music" active-class="active">
      <span>音乐</span>
    </router-link>
    <router-link to="/photo" active-class="active">
      <span>图片</span>
    </router-link>
    <router-link to="/book" active-class="active">
      <span>书评</span>
    </router-link>
    <router-link to="/me" active-class="active">
      <span>关于我</span>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'navbar',
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
  margin: -88px 0px 0 0px;
  align-items: center;
  justify-content: space-between;
  background: white;
  z-index: 999;
  box-shadow: 0px 2px 8px #665e5e;
  .author {
    padding: 2px 10px;
    margin-left: 32px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    background: blue;
  }
  .tabs {
    margin-right: 20px;
    font-size: 24px;
    font-family: Arial,Verdana,Sans-serif;
    span {
      padding-right: 40px;
      color: #000;
    }
    a {
      text-decoration: none;
    }
    a:hover {
      span {
        color: orange;
      }
    }
    .active {
      span {
        color: orange;
      }
    }
  }
}
</style>
