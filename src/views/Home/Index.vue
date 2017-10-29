<template>
  <div class="main">
    <NavBar/>
    <div class="whole">
      <div class="navbar">
        <NavBar class="content-nav" :showAuthor="showAuthor" :fontStyle="fontStyle" :items="items" />
      </div>
      <div class="display">
        <div class="article" @click="read(item)" v-for="item in article">
          <img src='../../assets/image.png' alt="photo"/></br>
          <div class="arrow"></div>
          <div class="title">
            <span>{{ item.title }}</span></br>
          </div>
          <div class="content">
            <span>
              {{ item.content }}
            </span>
          </div>
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
      ],
      article: [
        { id: 0, title: 'Hello-Hello', content: '再见我的爱，I wanna say goodbye；再见我的过去，I want a new life；再见我的眼泪，跌倒和失败；再见那个年少青春的时代；' },
        { id: 1, title: 'Today', content: '明年今日，别要再失眠；床褥都改变，离开你六十年；但愿能够认出你的子女，离别也听得到你讲 再见；' },
        { id: 2, title: 'Mr Lonely', content: '我想我会一直孤单，一辈子都这么孤单；我想我会一直孤单，这样孤单一辈子；想过的将就一点，却发现将就更难；于是我学着乐观，这样孤单一辈子；当孤单已经变成一种习惯，习惯到我已经不再去想该怎么办；就算心烦意乱，就算没有人作伴；自由和落寞之间怎么换算，我独自走在街上看着天空找不到答案，我也没有答案；' },
        { id: 3, title: 'Happy Time', content: '让我有个美满旅程，让我记得有多高兴；让我有勇气去喊停，没有结局也可即兴；时间尚早，别睁开眼睛；长路漫漫是如何走过，宁愿让乐极忘形的我；毫无代价唱最幸福的歌，愿我可...' }
      ]
    }
  },
  methods: {
    read (item) {
      this.$emit('showArticle', item.id)
      this.$router.push({ name: 'article', params: { article: this.article } })
    }
  }
}
</script>

<style lang="less" scoped>

.main {
  margin: -8px;
}
.whole {
  background: rgb(245, 245, 245);
}
.navbar {
  margin-top: -8px;
  display: flex;
  flex-direction: column;
  .content-nav {
    align-self: flex-end;
    font-size: 18px;
  }
}
.display {
  margin: 0px 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .article {
    margin: 0px 10px 28px 10px;
    width: 22%;
    height: 522px;
    cursor: pointer;
    background: white;
    img {
      width: 100%;
      height: 215px;
    }
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

