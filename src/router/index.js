import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const List = () => import('@/views/List')
const Home = () => import('@/views/Home')
const My = () => import('@/views/My')
const News = () => import('@/views/News')
const Login = () => import('@/views/Login')
const City = () => import('@/views/City')
const Addhouse = () => import('@/views/Addhouse')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/list', component: List },
      { path: '/news', component: News },
      { path: '/my', component: My }

    ]
  },
  { path: '/login', component: Login },
  { path: '/city', component: City },
  { path: '/addhouse', component: Addhouse }
]

const router = new VueRouter({
  routes
})

export default router
