<template>
  <div>
    <NavBar/>
    <div class="navbar">
      <NavBar class="content-nav" :showAuthor="showAuthor" :fontStyle="fontStyle" :items="items" />
    </div>
    <div class="display">
      <div class="article">
        <img src='../../assets/image.png' alt="photo"/></br>
        <div class="arrow"></div>
        <div class="title">
          <span>Hello-Hello</span></br>
        </div>
        <div class="content">
          <span>
            再见我的爱，wanna say goodbye；再见我的过去，I want a new life；再见我的眼泪，跌倒和失败；再见那个年少青春的时代；
          </span>
        </div>
      </div>
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
.navbar {
  display: flex;
  flex-direction: column;
  .content-nav {
    align-self: flex-end;
    font-size: 18px;
  }
}

.display {
  img {
      width: 100%;
      height: 215px;
    }
  .article {
    width: 25%;
    height: 542px;
    border: 1px solid orange;
    .arrow {
      width: 0;
      height: 0;
      position: relative;
      top: -16px;
      left: 48%;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 12px solid white;
    }
    .title {
      text-align: center;
      margin-top: 20px;
      font-size: 26px;
    }
    .content {
      margin: 10px 16px 0px 16px;
    }
  }
}
</style>

