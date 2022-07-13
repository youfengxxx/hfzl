<template>
  <div>
    <van-nav-bar
      title="城市列表"
      left-arrow
      :fixed="true"
      z-index="5"
      @click-left="$router.replace('/home')"
    />
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="this.$store.state.data" />
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in hot"
        :key="index"
        @click="$store.commit('getData', item.label), $router.go(-1)"
      />
      <span v-for="(item, key) in obj" :key="key">
        <van-index-anchor :index="key">{{ key }}</van-index-anchor>
        <van-cell
          :title="item1.label"
          v-for="(item1, index) in item"
          :key="index"
          @click="$store.commit('getData', item.label); $router.go(-1);"
        />
      </span>
    </van-index-bar>
  </div>
</template>

<script>
import { getCity, getHot, getInfo } from '@/api/city'

export default {
  created () {
    this.getCity()
    this.getHot()
    this.getInfo()
  },
  data () {
    return {
      indexList: ['*', '热'],
      arr: [], // 首字母筛选完成
      list: [], // 初步城市数据
      hot: [],
      arr1: [],
      obj: {},
      cent: ''

    }
  },
  methods: {
    async getCity () {
      const res = await getCity()
      console.log(res)
      this.list = res.data.body
      this.list.forEach((item) => {
        this.arr.push(item.short[0].toUpperCase())
      })

      this.arr = [...new Set(this.arr)].sort()
      // console.log(this.arr)
      this.indexList.push(...this.arr)
      console.log(this.indexList)
      this.arr.forEach((item) => {
        this.arr1 = this.list.filter(str => {
          return str.short[0].toUpperCase() === item
        })
        // console.log(this.arr1)
        this.obj[item] = this.arr1
      })
      console.log(this.obj)
    },
    async getHot () {
      const res = await getHot()
      this.hot = res.data.body
      console.log(res)
    },
    async getInfo () {
      const res = await getInfo()
      console.log(res)
      this.cent = res.data.body
    }

  },
  mounted () { },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
.city,
.hot {
  font-size: 14px;
  padding: 10px 15px;
  color: #999;
}
.van-index-bar {
  padding-top: 92px;
}
</style>
