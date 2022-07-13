/* eslint-disable vue/valid-v-else */
<template>
  <div>
    <!-- 登录 -->
    <div class="get" v-if="$store.state.user && $store.state.user.token">
      <img class="ball" src="http://liufusong.top:8080/img/avatar.png" alt="" />
      <div class="lanmu">
        <div class="quan">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <p class="wen">好客_194982</p>
        <van-button type="primary" size="mini" class="btn" @click="dian"
          >退出</van-button
        >
        <p class="bianji">
          编辑个人资料
          <van-icon name="play" />
        </p>
      </div>
    </div>
    <!-- 未登录 -->

    <div class="top" v-else>
      <img src="http://liufusong.top:8080/img/profile/bg.png" />
      <div class="kuang">
        <div class="yuan">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <p class="zi">游客</p>
        <van-button type="primary" size="small" @click="$router.push('/login')">去登录</van-button>
      </div>
    </div>
    <!-- 底部组件 -->
    <van-grid :column-num="3" :border="false" :clickable="true">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="credit-pay" text="成为房主" />
      <van-grid-item icon="user-circle-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>

    <div class="foot">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
// import { getName } from '@/api/user'
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    dian () {
      this.$store.commit('setUser', {})
    }
  },
  computed: {
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
.get {
  position: relative;
  height: 750px;
}
.lanmu {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 414px;
  bottom: -200px;
  left: 50%;
  top: 286px;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.quan {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 140px;
  height: 140px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
  text-align: center;
}
.wen {
  position: relative;
  top: -40px;
}
.btn {
  width: 120px;
  border-radius: 50px;
}
.bianji {
  margin-top: 40px;
  color: #999;
  font-size: 12px;
}
.top {
  position: relative;
  height: 600px;
}
.kuang {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 330px;
  bottom: -200px;
  left: 50%;
  top: 210px;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.yuan {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 140px;
  height: 140px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
  text-align: center;
}
.zi {
  position: relative;
  top: -40px;
}
.foot {
  width: 88%;
  margin-left: 40px;
}
</style>
