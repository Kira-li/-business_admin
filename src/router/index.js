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
import charge from '../page/sales/charge.vue';
import taskLead from '../page/sales/taskLead.vue';
import orderLead from '../page/sales/orderLead.vue';
import taskList from '../page/sales/taskList.vue';
import collection from '../page/traffic/collection.vue';
import trafficLead from '../page/traffic/lead.vue';
import trafficList from '../page/traffic/list.vue';
import buyShow from '../page/evaluation/buyShow.vue';
import evaluationOrder from '../page/evaluation/order.vue';
import orderList from '../page/order/list.vue';
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
    path: '/traffic',
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
      },
      {
        path: 'charge',
        component: charge,
        name: '收费标准'
      }
    ]
  },
  {
    path: '/traffic',
    component: home,
    name: '流量任务',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'trafficLead',
        component: trafficLead,
        name: '流量任务导入'
      },
      {
        path: 'collection',
        component: collection,
        name: '收藏加购任务'
      },
      {
        path: 'trafficList',
        component: trafficList,
        name: '流量任务列表'
      }
    ]
  },
  {
    path: '/evaluation',
    component: home,
    name: '评价任务',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'buyShow',
        component: buyShow,
        name: '买家秀评价'
      },
      {
        path: 'evaluationList',
        component: evaluationOrder,
        name: '评价工单'
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
      }
    ]
  }
];
var router = new VueRouter({
    routes
});

export default router;

