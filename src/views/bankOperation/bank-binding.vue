<template>
	<div>
		<div class="header-tip">请添加您本人预留手机号为<span>{{tel | mobileTuoMin}}</span>的银行卡：</div>
		<div class="list-box">
			<ul>
				<li>
					<x-input title="户名" v-model="name" :disabled="disabledName" placeholder="请输入户名" label-width="5em"></x-input>
				</li>
				<li>
					<!-- <router-link to="/choice-bank"> -->
					<x-input title="账户  " v-model="account" placeholder="任意银行储蓄卡或长行存折" :disabled="disabledAccount" @on-change="changeBankNo()" :max="29"></x-input>
					<div class="bank-arrow position" slot="right"></div>
					<!-- </router-link> -->
				</li>
				<li> <!-- @click="queryBankName" -->
					<x-input title="开户银行" v-model="bank" placeholder="请选择开户银行" :disabled="disabledBank"></x-input>
					<div class="bank-arrow position" slot="right"></div>
				</li>
				<li>
					<x-input title="手机号 " v-model="phone" :disabled="true" placeholder="请输入手机号"></x-input>
				</li>
				<li>
					<x-input title="验证码 " class="weui-vcode" v-model="code" placeholder="请输入验证码" :max="6" v-if="show">
			    		<x-button class="code-bt" slot="right" type="primary" :disabled="codeBt" mini plain @click.native="getCode()" >获取验证码</x-button>
		    		</x-input>
		    		<x-input title="验证码 " class="weui-vcode" v-model="code" placeholder="请输入验证码" :max="6" v-if="!show">
		    	  		<x-button class="code-bt" slot="right" type="primary" :disabled="codeBt" mini plain >{{count}} s重新发送</x-button>
		    		</x-input>
				</li>
			</ul>
		</div>
		<x-button type="primary" :disabled="footerBt" class="footer-bt" @click.native="bindingBank">绑定</x-button>
		<div class="footer-tip">
			<p>您可能想添加以下长沙银行账户：</p>
			<div class="flex-item fl">
				<i></i>
				<p>尾号1234的储蓄卡</p>
			</div>
			<div class="flex-item fr">
				<i></i>
				<p>尾号1234的储蓄卡</p>
			</div>
		</div>
		<div class="footer-rule clear">
	  		温馨提示：<br>1、请绑定您本人的Ⅰ类银行账户；<br>２.查看<i @click="turnToList">支持的银行列表。</i>
	  	</div>
	  	<!-- 成功提示 -->
	  	<toast v-model="successModel" text="绑定成功"></toast>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tel:'15116082140',
			name:'', //户名
			disabledName:false,
			account:'', //账号
			disabledAccount:false,
			bank:'', //开户银行
			disabledBank:false,
			phone:'', //手机号
			code:'', //验证码
			show:true, //是否显示倒计时
			codeBt:false, //验证码按钮
			count:'', //计数
			footerBt: true, //绑定按钮
			successModel: true, //是否显示弹窗
		}
	},
	mounted(){

	},
	methods:{
		changeBankNo(){
		    this.account = this.$strUtil.bankCardFour(this.account);
		},
		getCode(){ //获取验证码
			this.codeOperation();
		},
		codeOperation(){ // 倒计时
			this.codeBt = true;
			this.show = false;
			// this.nextBt = false;
			var TIME_COUNT = 60;
			if (!this.timer) {
			    this.count = TIME_COUNT;
			    this.timer = setInterval(() => {
			      if (this.count > 0 && this.count <= TIME_COUNT) {
			        this.count--;
			      } else {
			        this.show = true;
			        this.codeBt = false;
			        // this.nextBt = true;
			        clearInterval(this.timer);
			        this.timer = null;
			      }
			    }, 1000)
			}
		},
		bindingBank(){ //绑定按钮

		},
		turnToList(){ //

		}
	}
}
</script>

<style scoped>
.header-tip{font-size: 0.28rem;color: #666;padding: 0.2rem;}
.header-tip span{color:#2193f8;}
.list-box {width: 100%;height: auto;background: #fff;}
.list-box ul li {border-bottom: 0.02rem solid #dedede;position: relative;}
.list-box ul li a {color: #333;}
.list-box ul li:last-child {border-bottom: none;}
.bank-arrow {width: 10px;height: 10px;border-top: 1px solid #999;border-right: 1px solid #999;transform: rotate(45deg);}
.position {position: absolute;right: 0.4rem;top: 1.2em;}
.footer-bt{width: 90%;margin: 0.4rem auto;}
/* 修改x-button type='primary' */
.weui-btn_disabled.weui-btn_primary, .weui-btn_primary{background-color: #1ca4fc;}
.weui-btn_primary:not(.weui-btn_disabled):active{color: rgba(255, 255, 255, 0.6);background: rgba(28,164,255,0.6);}
.footer-tip{width: 90%;margin:0 auto;}
.footer-tip p{font-size: 0.28rem;color: #666;}
.flex-item{width: 49%; background: #fff;height: 0.76rem;margin-top: 0.2rem;}
.flex-item i{display: inline-block; width: 0.6rem;height: 0.76rem; background: url(../../../static/images/icon01.png) no-repeat left center;background-size: 100%;float: left;margin: 0 0.1rem;}
.flex-item p{line-height: 0.76rem;font-size: 0.28rem;color: #666;}
.footer-rule {width: 90%;margin: 0 auto;font-size: 0.28rem;color: #666;padding-top: 0.4rem;}
.footer-rule i{color: #2193f8;}
</style>