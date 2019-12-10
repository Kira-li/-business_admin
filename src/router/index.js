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
import rates from '../page/account/rates.vue';
import recharge from '../page/account/recharge.vue';
import addShop from '../page/shop/add.vue';
import newFlow from '../page/plan/newFlow.vue';
import flowPlan from '../page/plan/flowPlan.vue';
import newSell from '../page/plan/newSell.vue';
import sellPlan from '../page/plan/sellPlan.vue';
import checkOrder from '../page/sales/checkOrder.vue';
import collectionOrder from '../page/sales/collectionOrder.vue';
import complaintOrder from '../page/sales/complaintOrder.vue';
import completeOrder from '../page/sales/completeOrder.vue';
import evaluationOrder from '../page/sales/evaluateOrder.vue';
import failOrder from '../page/sales/failOrder.vue';
import checkTask from '../page/browse/checkTask.vue';
import complaintTask from '../page/browse/complaintTask.vue';
import completeTask from '../page/browse/completeTask.vue';
import failTask from '../page/browse/failTask.vue';
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
    iconCls: 'el-icon-s-home', // 图标样式class
    children: [
      {
        path: 'home',
        component: index,
        name: '首页'
      }
    ]
  },
  {
    path: '/plan',
    component: home,
    name: '计划管理',
    iconCls: 'el-icon-tickets',
    children: [
      {
        path: 'newSell',
        component: newSell,
        name: '新建销量计划'
      },
      {
        path: 'newFlow',
        component: newFlow,
        name: '新建流量计划'
      },
      {
        path: 'sellPlan',
        component: sellPlan,
        name: '销量计划列表'
      },
      {
        path: 'flowPlan',
        component: flowPlan,
        name: '流量计划列表'
      }
    ]
  },
  {
    path: '/sales',
    component: home,
    name: '销量任务管理',
    iconCls: 'el-icon-notebook-1',
    children: [
      {
        path: 'checkOrder',
        component: checkOrder,
        name: '待审核订单'
      },
      {
        path: 'completeOrder',
        component: completeOrder,
        name: '已完成订单'
      },
      {
        path: 'evaluationOrder',
        component: evaluationOrder,
        name: '评价订单'
      },
      {
        path: 'complaintOrder',
        component: complaintOrder,
        name: '投诉订单'
      },
      {
        path: 'collectionOrder',
        component: collectionOrder,
        name: '强制催收订单'
      },
      {
        path: 'failOrder',
        component: failOrder,
        name: '审核失败订单'
      }
    ]
  },
  {
    path: '/browse',
    component: home,
    name: '浏览任务管理',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'checkTask',
        component: checkTask,
        name: '待审核任务'
      },
      {
        path: 'completeTask',
        component: completeTask,
        name: '已完成任务'
      },
      {
        path: 'complaintTask',
        component: complaintTask,
        name: '投诉任务'
      },
      {
        path: 'failTask',
        component: failTask,
        name: '审核失败任务'
      }
    ]
  },
  {
    path: '/account',
    component: home,
    name: '财务管理',
    iconCls: 'el-icon-bank-card',
    children: [
      {
        path: 'recharge',
        component: recharge,
        name: '充值中心'
      },
      {
        path: 'rates',
        component: rates,
        name: '收费标准'
      },
      {
        path: 'detail',
        component: account,
        name: '资金明细'
      }
    ]
  },
  {
    path: '/shop',
    component: home,
    name: '店铺管理',
    iconCls: 'el-icon-office-building',
    children: [
      {
        path: 'manage',
        component: addShop,
        name: '店铺管理'
      }
    ]
  }
];
var router = new VueRouter({
    routes
});

export default router;

