import Vue from 'vue'
import Router from 'vue-router'
import idTest from '@/views/openBankAcount/identification-card-verification'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '身份验证',
      meta:{
        title:'身份验证'
      },
      component: idTest
    },
    {
      path: '/personal-account',
      name: '长沙银行电子账户',
      meta:{
        title:'长沙银行电子账户'
      },
      // lazy-loaded 懒加载，只有当你访问的时候才会加载页面组件
      component: () => import('@/views/user/personal-account')
    },
    {
      path:'/transaction-record',
      name:'交易记录',
      meta:{
        title:'交易记录'
      },
      component: () => import('@/views/user/transaction-record')
    },
    {
        path:'/change-password',
        name:'修改交易密码',
        meta:{
            title:'修改交易密码'
        },
        component: () => import('@/views/user/change-password')
    },{
        path:'/transaction-record-info',
        name:'交易记录详情',
        meta:{
            title:'交易记录详情'
        },
        component: () => import('@/views/user/transaction-record-info')
    },
    {
        path:'/quota-query',
        name:'限额查询',
        meta:{
            title:'限额查询'
        },
        component: () => import('@/views/quota/quota-query')
    },
    {
      path: '/bank-card-certification',
      name: '银行卡验证',
      meta:{
        title:'银行卡验证'
      },
      component: () => import('@/views/openBankAcount/bank-card-certification')
    },
    {
      path:'/bank-card-list',
      name:'银行卡列表',
      meta:{
        title:'银行卡列表'
      },
      component: () => import('@/views/openBankAcount/bank-card-list')
    },
    {
      path:'/open-success',
      name:'开户成功',
      meta:{
        title:'开户成功'
      },
      component: () => import('@/views/openBankAcount/open-success.vue')
    },
    {
      path:'/open-failed',
      name:'开户失败',
      meta:{
        title:'开户失败'
      },
      component: () => import('@/views/openBankAcount/open-failed.vue')
    },
    {
      path:'/error',
      name:'报错页面',
      meta:{
        title:'报错页面'
      },
      component: () => import('@/views/openBankAcount/error.vue')
    },
    {
      path: '/set-password',
      name: '设置交易密码',
      meta: {
        title: '设置交易密码'
      },
      component: () => import('@/views/user/set-password.vue')
    },
    {
      path: '/bank-binding',
      name: '银行卡绑定',
      meta: {
        title: '银行卡绑定'
      },
      component: () => import('@/views/bankOperation/bank-binding.vue')
    },
    {
      path: '/choice-bank',
      name: '选择银行卡',
      meta: {
        title: '选择银行卡'
      },
      component: () => import('@/views/bankOperation/choice-bank.vue')
    },
    {
      path: '/bank-query',
      name: '绑定银行卡查询',
      meta: {
        title: '绑定银行卡查询'
      },
      component: () => import('@/views/bankOperation/bank-query.vue')
    }
  ]
})

/* 路由发生变化修改页面title */
router.beforeEach((to,form,next)=>{
    if(to.meta.title){
      document.title = to.meta.title
    }
    next();
})
export default router
