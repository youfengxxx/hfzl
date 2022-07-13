<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.go(-1)" />
    <van-cell title="房源信息" style="color: #1cb676" border class="message" />
    <div class="xin">
      <van-cell title="小区名称" is-link value="请输入小区内容" />
      <van-field
        v-model="sms"
        center
        clearable
        label="租金"
        placeholder="请输入租金/月"
      >
        <template #extra>
          <span style="color: #888">￥/月</span>
        </template>
      </van-field>
      <van-field
        v-model="sms"
        center
        clearable
        label="建筑面积"
        placeholder="请输入建筑面积"
      >
        <template #extra>
          <span style="color: #888">㎡</span>
        </template>
      </van-field>
      <van-cell title="户型" is-link value="请选择" />
      <van-cell title="所在楼层" is-link value="请选择" />
      <van-cell title="朝向" is-link value="请选择" style="border: none" />
      <van-cell title="房屋标题" />
    </div>
    <div class="imgHome">
      <van-field
        v-model="value"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元)"
        input-align="left"
        style="border: none"
      />
      <van-cell title="房屋图像" />
    </div>
    <div class="peizhi">
      <van-uploader v-model="fileList" multiple :max-count="2">
        <template #preview-cover>
          <van-icon name="plus" />
        </template>
      </van-uploader>
      <van-cell title="房屋配置" />
    </div>
    <div class="icons">
      <van-grid :column-num="5">
        <van-grid-item icon="hotel-o" text="衣柜" />
        <van-grid-item icon="shop-o" text="洗衣机" />
        <van-grid-item icon="credit-pay" text="空调" />
        <van-grid-item icon="fire-o" text="天然气" />
        <van-grid-item icon="desktop-o" text="冰箱" />
        <van-grid-item icon="bulb-o" text="暖气" />
        <van-grid-item icon="cashier-o" text="电视" />
        <van-grid-item icon="closed-eye" text="热水器" />
        <van-grid-item icon="bar-chart-o" text="宽带" />
        <van-grid-item icon="coupon-o" text="沙发" />
      </van-grid>
      <van-cell title="房屋描述" />
    </div>
    <van-field
      v-model="xin"
      placeholder="请输入房屋描述信息"
      input-align="left"
      class="text1"
      autosize:true
    />
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  created () {

  },
  data () {
    return {
      text: '',
      fileList: [],
      sms: '',
      value: '',
      xin: ''
    }
  },
  methods: {

  },
  computed: {
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.message {
  font-size: 30px;
  border-bottom: 1px solid rgba(114, 111, 111, 0.3);
}
.xin {
  padding: 0 0 0 30px;
  border-bottom: 1px solid rgba(114, 111, 111, 0.3);
}
.van-cell,
.van-field {
  border-bottom: 1px solid rgba(114, 111, 111, 0.1);
}
.van-uploader {
  margin: 15px 0 0 15px;
}
.van-grid {
  padding-bottom: 40px;
  background-color: #ddd;
}
/deep/.text1 {
  height: 100px;
}
</style>
