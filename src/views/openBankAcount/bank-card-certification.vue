<!-- 银行卡验证 -->
<template>
	<flexbox>
		<flexbox-item class="content">
			<!-- hint head start  -->
			<flexbox class="item_success" v-if="firstStep">
				<flexbox-item>
					<div class="item_success_efefef">
						你在长沙银行预留的手机号码为130****8567,
						<span class="item_success_red">请添加与预留手机号码一致的银行卡信息</span>
					</div>
				</flexbox-item>
			</flexbox>
			<!-- hint head end  -->
			<div class="item_group">
			  <group  label-width="4em" label-margin-right="1.5em" label-align="justify" 
						 gutter="0em" class="group_border">

				 	<x-input title="银行卡号"   v-model="id" placeholder="请输入银行卡号" placeholder-align="left" ></x-input>


					<x-input title="开户行 " v-model="bank" placeholder="请选择开户行" >
			          <div slot="right" class="bank-arrow" @click="querycardName()"></div>
			        </x-input>

				
			  </group> 
			</div>
			<!-- 下一步 start -->
			<flexbox>
				<flexbox-item>
					<div class="div_primary">
				 	<x-button type="primary" class="btn_primary" >下一步</x-button>
				 </div>
				</flexbox-item>
			</flexbox>
			<!-- 下一步 end -->

			<!-- 银行账户显示 start -->
			<!-- <flexbox>
				<flexbox-item>
				<div class="user_bank_list">
				 	您可能想添加以下长沙银行账户：
				 </div>
				</flexbox-item>
			</flexbox> -->
			<div class="bank-content" v-if="cardList != null && cardList.length > 0">
		        <p>您可能想添加以下长沙银行账户：</p>
		        
		        <!-- <div class="bank-list fr"><i class="bank-logo"></i>尾号1234的储蓄卡</div> -->
		        <div v-for="(item,index) in cardList">
		          <div v-if="index%2 == 0" class="bank-list fl" @click="selectCard(item)">
		          	<i class="bank-logo fl"></i>尾号{{item.cardno | keepLastFour}}的
		          		<span v-if="item.dcmttp == '738'">储蓄卡</span><span v-else>存折</span>
		          </div>
		          <div v-else class="bank-list fr" @click="selectCard(item)">
		          	<i class="bank-logo fl"></i>尾号{{item.cardno | keepLastFour}}的
		          	<span v-if="item.dcmttp == '738'">储蓄卡</span><span v-else>存折</span>
		          </div>
		        </div>
		     </div>

			<!-- 银行账户显示 end -->
	<!-- 弹窗  start-->
			<div v-transfer-dom>	  
				 <x-dialog v-model="showToast" >

				 	<div style="width:100%;">
				        <div class="hint_div">
				          <i class="hint_i"></i>
				          <span class="hint_span">温馨提示</span>
				        </div>
						
				        <div class="hint_border"></div>	
							
						 <div class="text_align_center">
							<span class="text_align_span" >银行卡验证失败，请重新输入!</span>							
						</div> 
						
						 <div class="hint_border"></div>	

				        <div  class="hint_div_div">
				          <a class="hint_a" href="javascript:void(0)" @click="showToast=false">确定</a>		
				        </div>
			        </div>
			      </x-dialog>   
		     </div>

<!-- 弹窗  end-->
		</flexbox-item>	       	                      	     	          
	</flexbox>
</template>
	
<script>


export default {
	data(){
		return {
		id:'',
		bank:'',
		mobile:'',
		bankCard:'',
		cardInfo:'',
		selectedCard:'',
		showToast:false,
		firstStep:true,
		 cardList:[],
		}
	},
	mounted(){

	
	},
	methods:{
		 //选择一类户的某张卡
	    selectCard(item){
	      console.log(JSON.stringify(item));
	      console.log(item.cardno.replaceAll(" ","")+";;"+item.mobile);
	      this.deBankCard = item.cardno.replaceAll(" ","");
	      this.selectedCard = item.cardno.replaceAll(" ","");
	      this.bankCard = item.mobile;
	      this.cardInfo = 2;
	      this.bank = "长沙银行";
	      this.isNext = false;
	    },
		querycardName(){
	      sessionStorage.setItem('backPhone',this.mobile);
	      sessionStorage.setItem('backbankCard',this.bankCard);
	      sessionStorage.setItem('backdeBankCard',this.deBankCard);
	      sessionStorage.setItem('backcardInfo',this.cardInfo);
	      sessionStorage.setItem('backselectedCard',this.selectedCard);
	      this.$router.push({path:'/bank-card-list'});
	    }
	}

}
</script>

<!-- scoped只在当前页面生效 font-size: 0.24rem; -->
<style scoped>
.item_success_efefef{
	width: 95%;
    margin: 13px 0px 11px 12px;
    font-size: 12px;
    color: #666666;
    letter-spacing: 0.1px;
    text-align: left;
}
.item_success_red{
	color:red;
}
.user_bank_list{
	font-family:PingFangSC-Regular;
	font-size:14px;
	color:#666666;
	text-align:left;
	width: 90%;
	margin: 13px;

}
.bank-content {padding: 0 0.4rem;font-size: 0.28rem;color: #666;}
.bank-list {width: 48%;height: 0.72rem;line-height: 0.72rem;text-align: center; background:#fcfcfc;border-radius: 0.1rem;margin-top: 0.3rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.bank-logo {background: url(../../../static/images/bankIcon/313551088886.png) no-repeat center center;background-size: 100%;width: 0.72rem;height: 0.72rem;display: block;}
</style>