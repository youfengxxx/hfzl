<template>
  <div>
    <div class="search">
      <van-icon name="arrow-left" class="o" />
      <van-icon name="location-o" class="i" />
    </div>
    <div class="input">
      <span>北京</span><van-icon name="play" class="play" /><i>|</i>
      <van-icon name="search" class="sea" /><span class="shu"
        >请输入小区或地址</span
      >
    </div>
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <template #default>
            <van-picker :columns="columns" />
            <van-button type="default" class="left">取消</van-button>
            <van-button type="primary" class="right">确定</van-button>
          </template>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <template #default>
            <van-picker :columns="fangShi" />
            <van-button type="default" class="left">取消</van-button>
            <van-button type="primary" class="right">确定</van-button>
          </template>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <template #default>
            <van-picker :columns="values" />
            <van-button type="default" class="left">取消</van-button>
            <van-button type="primary" class="right">确定</van-button>
          </template>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="ink" />
      </van-dropdown-menu>
      <van-popup
        v-model="show"
        position="right"
        :style="{ height: '100%', width: '80%' }"
        class="popup"
      >
        <h6>户型</h6>
        <div class="box">
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
        </div>
        <h6>户型</h6>
        <div class="box">
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
        </div>
        <h6>户型</h6>
        <div class="box">
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
        </div>

        <h6>户型</h6>
        <div class="box">
          <van-button plain type="default" class="btn">集中供暖</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
          <van-button plain type="default" class="btn">一室</van-button>
        </div>
        <div class="annt">
          <van-button type="default" class="l">清除</van-button>
          <van-button type="primary" class="r">确定</van-button>
        </div>
      </van-popup>
    </van-sticky>

    <!-- 底部商品栏目 -->
    <van-card
      v-for="(item, index) in houseList"
      :key="index"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080'+ item.houseImg"
    >
      <template #tags>
        <van-tag plain type="danger">近地铁</van-tag>
        <van-tag plain type="danger">有电梯</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import { getHouselImg } from '@/api/bighouse'
export default {
  created () {
    this.getHouselImg()
  },
  data () {
    return {
      show: false,
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],
      fangShi: ['不限', '整租', '合租'],
      values: ['周一', '周二', '周三', '周四', '周五'],
      houseList: []
    }
  },
  methods: {
    ink () {
      this.show = true
    },
    async getHouselImg () {
      try {
        const res = await getHouselImg({ cityId: 'AREA|88cff55c-aaa4-e2e0' })
        console.log(res)
        this.houseList = res.data.body.list
      } catch (err) {
        console.log(err)
      }
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.search {
  position: relative;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #21b97a;
  .o {
    font-size: 50px;
    color: #fff;
  }
  .i {
    position: absolute;
    right: 30px;
    top: 25px;
    font-size: 50px;
    color: #fff;
  }
}
.input {
  position: absolute;
  left: 79px;
  top: 16px;
  width: 550px;
  height: 68px;
  border-radius: 5px;
  background-color: #fff;
  line-height: 58px;
  span {
    font-size: 13px;
    margin-left: 16px;
  }
  .sea {
    font-size: 30px;
    color: #9c9fa1;
  }
  .shu {
    color: #9c9fa1;
  }
  .play {
    font-size: 30px;
    transform: rotate(90deg);
    color: #9c9fa1;
    margin-left: 10px;
  }
  i {
    margin-left: 20px;
    font-size: 16px;
    color: #9c9fa1;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
/deep/.van-dropdown-menu__bar {
  height: 80px;
}
.left {
  width: 30%;
  height: 100px;
  color: #21b97a;
  font-size: 36px;
}
.right {
  width: 70%;
  height: 100px;
  color: #fff;
  font-size: 36px;
}
.popup {
  padding: 30px 28px 0 0;
  h6 {
    font-weight: 400;
    margin-bottom: 20px;
    margin-left: 28px;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    width: 450px;
    margin-left: 95px;
    margin-bottom: 60px;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 30px;
    .btn {
      width: 160px;
      height: 80px;
      margin: 0 36px 30px 0;
      font-size: 12px;
    }
  }
  .annt {
    position: sticky;
    left: 0;
    bottom: 0;
    width: 650px;

    .l {
      width: 30%;
      height: 120px;
      color: #21b97a;
    }
    .r {
      width: 70%;
      height: 120px;
    }
  }
}
</style>
