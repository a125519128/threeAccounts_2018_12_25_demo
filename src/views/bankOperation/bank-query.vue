<template>
	<div>
		<div class="header-tip">您的电子交通卡已绑定以下银行账户：</div>
		<swipeout>
			<swipeout-item>
		        <div slot="right-menu">
		          <swipeout-button text="取消" @click.native="isDeleteBankCard('cancel')"></swipeout-button>
		          <swipeout-button text="删除" @click.native="isDeleteBankCard('delete')" background-color="#d70e19"></swipeout-button>
		        </div>
		        <div slot="content" class="content">
		        	<div class="content-icon fl"></div>
		        	<div class="content-text fl">
		        		<p>长沙银行 储蓄卡(尾号{{ bankCard | keepLastFour}})</p>
		        		<span>{{ bankCard | cardNoTuoMin}}</span>
		        	</div>
		        	<div class="content-show-hide"></div>
		        </div>
		    </swipeout-item>
		</swipeout>
		<x-button type="primary" class="footer-bt" @click.native="bindOther">绑定其他银行卡</x-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bankCard:'6214123456789005687'
		}
	},
	methods:{
		isDeleteBankCard(ev){ //是否刪除銀行卡
			console.log(ev)
		},
		bindOther(){ //綁定其他銀行卡

		}
	}
}
</script>

<style scoped>
.header-tip{font-size: 0.28rem;color: #666;padding: 0.2rem;}
.content{height: 1.4rem;}
.content-icon{width: 0.6rem;height: 1.4rem;background: url(../../../static/images/icon01.png) no-repeat center center; background-size: 100%;margin: 0 0.2rem 0 0.4rem;}
.content-text{width:55%;}
.content-text p{height: 0.7rem;line-height: 1rem;font-size: 0.3rem;color: #666;}
.content-text span{font-size: 0.24rem;color: #999;}
.content-show-hide{}
.footer-bt{width: 90%;margin-top: 0.4rem;}
/* 修改x-button type='primary' */
.weui-btn_disabled.weui-btn_primary, .weui-btn_primary{background-color: #1ca4fc;}
.weui-btn_primary:not(.weui-btn_disabled):active{color: rgba(255, 255, 255, 0.6);background: rgba(28,164,255,0.6);}
</style>