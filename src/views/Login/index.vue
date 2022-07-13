<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow />
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名不符合规范' },
        ]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^[a-zA-Z0-9_-]{4,12}$/, message: '密码不符合规范' },
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
        <p>还没有账号,<span @click="jump">去注册~</span></p>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: 'youfeng',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (val) {
      try {
        const data = await login(val)
        console.log(data)
        this.$store.commit('setUser', data.data.body)
        this.$router.push('/my')
      } catch (err) {
        return console.log(err)
      }
    },
    jump () {
      this.$router.replace('/registe')
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
.van-button {
  background-color: rgb(28, 182, 118);
  border-radius: 3px;
}
p{
  font-size:20px;
  margin-top:40px;
}
</style>
