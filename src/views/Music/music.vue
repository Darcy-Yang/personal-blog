<template>
  <div class="main-music">
     <TopNav/> 
     <div class="display">
      <div class="show-music" v-for="(item, index) in music">
        <img class="image" :src="item.cover" alt="image" ref="cover" @click="test(index)"/>
         <span class="hole"></span> 
         <span class="second-hole"></span> 
        <audio class="audio" :src="item.path" hidden="hidden" controls="controls" ref="player">no support</audio>
        <span class="name">{{ item.name }}</span>
      </div>
     </div>
  </div>
</template>
<script>
import TopNav from '@/components/nav/TopNav'
import VueAplayer from 'vue-aplayer'

import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'music',
  components: {
    TopNav,
    'vue-aplayer': VueAplayer
  },
  data () {
    return {
      music: null,
      flag: false,
      play: false
    }
  },
  created () {
    this.$http.get('/api/music/allMusic').then((response) => {
      this.music = response.body
      if (this.music !== null) {
        this.flag = true
      }
    })
  },
  methods: {
    test (index) {
      if (!this.play) {
        this.$refs.player[index].play()
        this.$refs.cover[index].setAttribute('class', 'image rotate')
      } else {
        this.$refs.player[index].pause()
        this.$refs.cover[index].setAttribute('class', 'image')
      }
      this.play = !this.play
    }
  }
}
</script>
<style lang="less" scoped>
.main-music {
  margin: 80px -6px 0px -6px;
  min-height: 500px;
  background: #ebebeb;
}
.display {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.show-music {
  display: flex;
  margin: 20px;
  flex-direction: column;
  flex-wrap: wrap;
  .image {
    width: 160px;
    height: 160px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0px 0px 12px #000;
  }
  .image:hover {
    box-shadow: 0px 0px 0px #fff;
  }
  @keyframes rotation {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  .rotate {
    animation: rotation 3s linear infinite;
  }
  .hole {
    position: relative;
    top: -99px;
    left: 62px;
    width: 36px;
    height: 36px;
    background: #000;
    border-radius: 50%;
    opacity: 0.6;
    cursor: pointer;
    z-index: 900;
  }
  .second-hole {
    position: relative;
    top: -130px;
    left: 67px;
    width: 26px;
    height: 26px;
    background: #ebebeb;
    border-radius: 50%;
    cursor: pointer;
    z-index: 901;
  }
  .name {
    width: 160px;
    margin: -54px 0px 20px 0px;
    text-align: center;
  }
}
</style>
