import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件

import login from '../page/login.vue';
import regesiter from '../page/regesiter.vue';
import changepwd from '../page/changepwd.vue';
import home from '../page/home.vue';
import notFound from '../page/404.vue';
import index from '../page/index/home.vue';
import sub21 from '../page/menu2/sub1.vue';
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    component: login,
    name: '登录',
    hidden: true
  },
  {
    path: '/regesiter',
    component: regesiter,
    name: '注册',
    hidden: true
  },
  {
    path: '/changepwd',
    component: changepwd,
    name: '修改密码',
    hidden: true
  },
  {
    path: '/404',
    component: notFound,
    name: '',
    hidden: true
  },
  {
    path: '/index',
    component: home,
    name: '首页',
    iconCls: 'el-icon-message', // 图标样式class
    children: [
      {
        path: 'home',
        component: index,
        name: '首页'
      }
    ]
  },
  {
    path: '/menu2',
    component: home,
    name: '菜單二',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'sub1',
        component: sub21,
        name: '配置管理'
      }
    ]
  }
];
var router = new VueRouter({
    routes
});

export default router;

