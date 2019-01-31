<template>
    <div class="user-agreement">
    	<check-icon :value.sync="checkIcon" @click.native="checkIconClick" class="fl" data-attr="red"></check-icon>
    	<div class="user-agreement-text fr">
    		我已阅读并同意<span class="span-color" @click="agreementModel = true">《长沙银行电子账户服务协议》</span>，和<span class="span-color" @click="policyModel = true">《长沙银行股份有限公司隐私政策》</span>，并声明为中国纳税人。
    	</div>
    	<!-- 协议内容 -->
    	<div v-transfer-dom>
	      <x-dialog v-model="agreementModel">
	      	<div class="vux-content" v-html="agreementContent"></div>
	        <span class="vux-close" @click="agreementModel = false"><icon type="cancel"></icon></span>
	      </x-dialog>
	    </div>
	    <!-- 政策内容 -->
	    <div v-transfer-dom>
	      <x-dialog v-model="policyModel">
	      	<div class="vux-content" v-html="policyContent"></div>
	        <span class="vux-close" @click="policyModel = false"><icon type="cancel"></icon></span>
	      </x-dialog>
	    </div>
	</div>
</template>

<script>
import agreementContent from '@/assets/agreement-content'
import policyContent from '@/assets/policy-content'

export default {
	components:{
		agreementContent,
		policyContent
	},
	data() {
		return {
			checkIcon: false, 
			agreementModel: false, //协议
			policyModel: false, //政策
			agreementContent:'', //协议内容
			policyContent:'', //政策内容
		}
	},
	mounted(){
		// 协议
		this.agreementContent = agreementContent
		this.policyContent = policyContent
	},
	methods:{
		checkIconClick(){
			this.$bus.$emit('contractClick',this.checkIcon)
		}
	}
}
</script>

<style scoped>
.user-agreement{width: 93%;height: 1.6rem; margin: 0.3rem auto;}
.user-agreement-text{width: 89%;}
.span-color {color:#7390ff;}
.vux-content {padding: 0.4rem;max-height: 8rem;line-height: 0.4rem; overflow: scroll;text-align: left;font-size: 0.3rem;}
.vux-close {position: absolute;top: 0;right: 0;}
</style>