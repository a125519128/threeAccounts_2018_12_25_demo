// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import http from '@/api/http'
import utils from '@/lib/utils.js'
import '../static/js/font-rem'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false
// axios
Vue.prototype.$axios = axios
// 全局注册api请求
Vue.prototype.$post = http.post
Vue.prototype.$get = http.post
// 全局使用utils工具
Vue.prototype.$strUtil = utils

// 全局vux组件
import {
  Divider,
  LoadMore,
  Scroller,
  Search,
  AlertPlugin,
  Alert,
  LoadingPlugin,
  ToastPlugin,
  XInput,
  CheckIcon,
  XDialog,
  Icon,
  XButton,
  TransferDomDirective as TransferDom,
  CellBox,
  Group,
  ButtonTab,
  ButtonTabItem,
  Datetime,
  Confirm,
  Toast,
  ConfirmPlugin,
  Flexbox,
  DatetimePlugin,
  FlexboxItem,
  Swipeout,
  SwipeoutItem,
  SwipeoutButton,
  Cell 


} from 'vux'
Vue.component('x-input', XInput)
Vue.component('check-icon', CheckIcon)
Vue.component('x-dialog', XDialog)
Vue.component('icon', Icon)
Vue.component('x-button', XButton)
Vue.directive('TransferDom', TransferDom)
Vue.component('group', Group)
Vue.component('cell-box', CellBox)
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)
Vue.component('datetime', Datetime)
Vue.component('confirm', Confirm)
Vue.component('toast', Toast)
Vue.component('alert', Alert)
Vue.component('search', Search)
Vue.component('scroller', Scroller)
Vue.component('load-more', LoadMore)
Vue.component('divider', Divider)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('swipeout', Swipeout)
Vue.component('swipeout-item', SwipeoutItem)
Vue.component('swipeout-button', SwipeoutButton)
Vue.component('cell', Cell)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(DatetimePlugin)

/**
 * 弹出弱提示
 * @param  {String} val 提示信息
 * @param  {String} position 显示位置，可选值 default, top, middle, bottom
 */
Vue.prototype.showToast = function(val, position) {
  this.$vux.toast.text(val, position)
}
/**
 * 显示菊花
 * @param  {String} val 提示信息
 */
Vue.prototype.showLoading = function(val, position) {
  this.$vux.loading.show({
    text: val
  })
}
/**
 * 关闭菊花
 * @param  {String} val 提示信息
 */
Vue.prototype.hideLoading = function(val, position) {
  this.$vux.loading.hide()
}
/**
 * alert提示
 * @param  {String} val 弹窗标题
 * @param  {String} content 提示内容，作为 slot:default 的默认内容，如果使用 slot:default, 将会失效
 * @param  {String} btText 按钮文字
 */
Vue.prototype.showAlert = function(val, content, btText, fun) {
  this.$vux.alert.show({
    title: val,
    content: content,
    buttonText: btText,
    onShow() {
      
    },
    onHide() {
      if (fun != undefined && typeof fun == 'function') {
        fun();
      }
    }
  })
}
/**
 * showConfirm
 * @param  {String} val 弹窗标题
 * @param  {String} content 提示内容，作为 slot:default 的默认内容，如果使用 slot:default, 将会失效
 * @param  {String} confirmBt 确定按钮文字
 * @param  {String} cancelBt 取消按钮文字
 */
Vue.prototype.showConfirm = function(val, content, confirmBt, cancelBt, fun){
  this.$vux.confirm.show({
    title: val,
    content: content,
    confirmText:confirmBt,
    cancelText:cancelBt,
    onCancel(){
      
    },
    onConfirm(){
      if (fun != undefined && typeof fun == 'function') {
        fun();
      }
    }
  });
}
/** 
 * 关闭confirm
 */
Vue.prototype.hideConfirm = function(){
  this.$vux.confirm.hide();
}

// 姓名脱敏
Vue.filter('nameTuoMin', function(value) {
  if (value != undefined) {
    var length = value.length;
    if (length == 2) {
      return value.substring(0, 1) + '*';
    } else if (length == 3) {
      return value.substring(0, 1) + '*' + value.substring(2, 3);
    } else if (length == 4) {
      return value.substring(0, 1) + '**' + value.substring(3, 4);
    } else if (length == 5) {
      return value.substring(0, 1) + '***' + value.substring(4, 5);
    }
  }
  return value;
});
// 手机号号脱敏
Vue.filter('mobileTuoMin', function(value) {
  if (value == '' || value == null || value == undefined || value.length == 0) {
    return "";
  }
  var length = value.length;
  if (length == 11) {
    return value.substring(0, 3) + "****" + value.substring(7, 11);
  }
  return value;
});
//银行卡保存最后4位
Vue.filter('keepLastFour', function(value) {
  if (value == '' || value == null || value == undefined || value.length == 0) {
    return "";
  }
  var length = value.length;
  return value.substring(length - 4, length);
});
// 卡号脱敏
Vue.filter('cardNoTuoMin', function(value) {
  var length = value.length;
  if (length > 8) {
    var prefixCardNo = value.substring(0, 4);
    var suffixCardNo = value.substring(length - 4, length);
    var star = "";
    for (var i = 0; i < length - 8; i++) {
      star += "*";
    }
    value = prefixCardNo + star + suffixCardNo;
  }
  return value;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
