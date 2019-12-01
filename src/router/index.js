import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件

import login from '../page/login.vue';
import regesiter from '../page/regesiter.vue';
import changepwd from '../page/changepwd.vue';
import home from '../page/home.vue';
import notFound from '../page/404.vue';
import index from '../page/index/home.vue';
import account from '../page/account/detail.vue';
import addShop from '../page/shop/add.vue';
import taskLead from '../page/task/lead.vue';
import taskList from '../page/task/taskList.vue';
import orderLead from '../page/task/orderLead.vue';
import orderList from '../page/order/orderList.vue';
import evaluationList from '../page/order/evaluationList.vue';
import evaluationWork from '../page/order/evaluationWork.vue';
import workList from '../page/order/workList.vue';
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
    path: '/account',
    component: home,
    name: '账户',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'detail',
        component: account,
        name: '账户详情'
      }
    ]
  },
  {
    path: '/shop',
    component: home,
    name: '店铺',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'add',
        component: addShop,
        name: '添加店铺'
      }
    ]
  },
  {
    path: '/task',
    component: home,
    name: '任务',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'taskLead',
        component: taskLead,
        name: '任务导入'
      },
      {
        path: 'taskList',
        component: taskList,
        name: '任务列表'
      },
      {
        path: 'orderLead',
        component: orderLead,
        name: '订单导入'
      }
    ]
  },
  {
    path: '/order',
    component: home,
    name: '订单',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'orderList',
        component: orderList,
        name: '订单列表'
      },
      {
        path: 'workList',
        component: workList,
        name: '工单列表'
      },
      {
        path: 'evaluationList',
        component: evaluationList,
        name: '评价列表'
      },
      {
        path: 'evaluationWork',
        component: evaluationWork,
        name: '评价工单'
      }
    ]
  }
];
var router = new VueRouter({
    routes
});

export default router;

