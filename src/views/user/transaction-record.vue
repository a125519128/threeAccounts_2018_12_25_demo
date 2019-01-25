<!--  交易记录 -->
<template>
  <flexbox>
		<flexbox-item >
			<!-- head start -->
 			<div class="header-info">
		  		<i class="head_icon fl"></i>	
		  		
		  		<div class="content-text fl">
			  		<p >{{code}}</p>
					<span >
		  				余额：<i class="head_context_red">{{amt}}</i>元
		  			</span> 
		  		</div>
		  	</div>
		  	<!-- head end -->
		  	<!-- tab start -->
		  	<div class="tab-list">
		  		<div class="tab-list-btn">
					<button :class="tabContent == 'one'? 'btn_three' : 'btn_three_w'" @click="consoleIndex('one')">当日</button>
					<button :class="tabContent == 'two'? 'btn_three' : 'btn_three_w'" @click="consoleIndex('two')">近三天</button>
					<button :class="tabContent == 'three'? 'btn_three' : 'btn_three_w'" @click="consoleIndex('three')">历史明细</button>
				</div>
				<!-- 时间 start -->
     			<div class="lishi-time-change" v-if="lishiShow">
			      <button class="lishi-show-start-time" @click="showPlugin">{{timeDate}}</button>
			      <span class="lishi-show-span">至</span>
			      <button class="lishi-show-start-time" @click="showPlugin">{{timeDate}}</button>
				  <button class="lishi-show-end-time" @click="">查询</button>
			    </div>
	     		<!-- 时间 end -->	
	       	</div>
	       	
	  		<!-- tab end -->
			<!-- 当日 近三天 end -->
			 <div class="tab-list-content clear" v-if="tabContent == 'one' || tabContent == 'two' || tabContent == 'three'">
			  	
			  	 <scroller lock-x  @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
			      <div class="box2">
			      		<group :gutter="0">
						    <div v-if="list2.length > 0"> 
					  		<cell-box v-for="(li,index) in list2" :key="index" @click.native="listInfo(index)">
					  			<!-- 图标 start -->
								<div class="tab-icon fl tab-png-gj" v-if="li.amntcd == '1'">
									
								</div>
						        <div class="tab-icon fl tab-png-cz" v-else-if="li.amntcd == '2'">
						        	
						        </div>
						         <div class="tab-icon fl tab-png-tx" v-else-if="li.amntcd == '3'"></div>
						          <div class="tab-icon fl tab-png-xf" v-else-if="li.amntcd == '4'"></div>
						          <div class="tab-icon fl tab-png-tk" v-else-if="li.amntcd == '5'"></div>
						          <div class="tab-icon fl tab-png-yj" v-else-if="li.amntcd == '6'"></div>
						          <div class="tab-icon fl tab-png-yjtk" v-else-if="li.amntcd == '7'"></div>
							
						        <!-- 图标 end  -->
						        <div class="tab-text fl">
						        	<div class="bank-arrow1"> </div>
						        	<div class="tab-money clear">
						        		<p class="fl">{{li.smrycd}}</p>
						        		<p class="fr">{{li.tranam}}</p>
						        	</div>

						        	<div class="tab-date clear">
						        		<p class="fl">{{li.tranbl}}</p>
						        		<p class="fr">{{li.trandt}}</p>
						        	</div>
						        </div>
						    </cell-box>
					    </div> 	
						</group> 
			      <!--  <p v-for="i in bottomCount">placeholder {{i}}</p> -->
			       
					<noData v-if="list2.length == 0" ></noData>
			        <load-more tip="loading" v-if="onFetching == 3"></load-more>
			        <divider v-if="onFetching == 3">暂无数据</divider>
			        <load-more tip="loading"></load-more>
			      </div>
			    </scroller>
		  	</div> 
		  	<!-- 当日 近三天 start -->
			<!-- 历史记录 start {{timeDate}} -->
			
			<!-- <scroller class="scroller-top" lock-x @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" >
	     			<div class="box2">
	        		<group>
	        			<div v-if="list2.length > 0"> 
					  		<cell-box v-for="(li,index) in list2" :key="index" @click.native="listInfo(index)">
					  			图标 start
								
						    </cell-box>
					    </div> 
					</group>
					<noData v-if="list2.length == 0" ></noData>
			        <load-more tip="loading" v-if="onFetching == 3"></load-more>
			        <divider v-if="onFetching == 3">暂无数据</divider>
			      </div>
	   			</scroller> -->


			<!-- 历史记录 end -->

  		</flexbox-item>	       	                      	     	          
	</flexbox>
</template>

	
<script>
import noData from '_c/no-data.vue'

const list = () => [
{amntcd:'1',smrycd:'159路-车号[402019]',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'2',smrycd:'充值',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'3',smrycd:'提现',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'4',smrycd:'消费',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'5',smrycd:'退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'6',smrycd:'押金',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'7',smrycd:'押金退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},{amntcd:'1',smrycd:'159路-车号[402019]',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'2',smrycd:'充值',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'3',smrycd:'提现',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'4',smrycd:'消费',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'5',smrycd:'退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'6',smrycd:'押金',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'7',smrycd:'押金退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},{amntcd:'1',smrycd:'159路-车号[402019]',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'2',smrycd:'充值',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'3',smrycd:'提现',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'4',smrycd:'消费',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'5',smrycd:'退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'6',smrycd:'押金',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'7',smrycd:'押金退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},{amntcd:'1',smrycd:'159路-车号[402019]',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'2',smrycd:'充值',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'3',smrycd:'提现',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'4',smrycd:'消费',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'5',smrycd:'退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'6',smrycd:'押金',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'7',smrycd:'押金退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},{amntcd:'1',smrycd:'159路-车号[402019]',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'2',smrycd:'充值',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'3',smrycd:'提现',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'4',smrycd:'消费',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'5',smrycd:'退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'6',smrycd:'押金',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'},
{amntcd:'7',smrycd:'押金退款',tranam:'-2700.00',tranbl:'乘车:2016-11-11 01:12:34',trandt:'2017-07-15'}
]
export default {
	components:{
		noData
	},
	data(){
		return {
			show: false,
			amt:'55555.00',
			code:'6214461111000000339',
			index01:0,
			index:0,
			list2: list(),
			demo2: '美食',
			tabContent:'one',
			onFetching:2,
			startTime:'',
			endTime:'',
			showendTime:'',
			timeDate:'2017-02-19',
			lishiShow:false,
			bottomCount:2000,
		}
	},
	mounted(){
	},
	methods:{
		tijiao(){
			
			this.show = true;
		},
		consoleIndex(index){
			if(index){
				this.tabContent = index;
			}
			if(index == 'three'){
				this.lishiShow = true;
			}else{
				this.lishiShow = false;
			}
		},
		onScrollBottom () {
			//分页
	      console.log('on-before-index-change', this.index)
	      this.$vux.loading.show({
	        text: 'loading'
      	   })
      	
      	},
      	startConfirm (val) {
	    	console.log(this.startTime)
	    },
	    endConfirm(val) {
	    	console.log(this.endTime)
	    },
	     //查询历史明细
	    toQuery(){

	    },
	    showPlugin () {
	      var self = this;
	      this.$vux.datetime.show({
	        cancelText: '取消',
	        confirmText: '确定',
	        format: 'YYYY-MM-DD',
	        value: '2017-05-20',
	        onConfirm (val) {
	          console.log('plugin confirm', val)
	          self.timeDate = val;
	          console.log('确定' +self.timeDate)
	        },
	        onShow () {
	          console.log('plugin show')
	          this.timeDate = 111222;
	        },
	        onHide () {
	          console.log('plugin   hide')
	          // this.timeDate = 111222;
	          // console.log(this.timeDate);
	           // document.getElementById('sh1').value = '恢复 发 布 信 息';
	        }
	      })
	    },
	    listInfo(index){
	    	console.log(index);
	    	
	    	this.$router.push({path:'/transaction-record-info'});
	    }
	}
}
</script>

<!-- scoped只在当前页面生效 font-size: 0.24rem; -->
<style scoped>

/* head start  */
.header-info {
	background: #fff;
	width: 100%;
	height: 1.2rem;
	border-bottom: 0.02rem solid #d8d8d8;
}
.content-text{width:55%;}
.content-text p{height: 0.7rem;line-height: 1rem;font-size: 0.3rem;}
.content-text span{font-size: 0.24rem;color: #999;}
.head_icon{
	width: 0.6rem;
	height: 100%;
	background: url(../../../static/images/icon01.png) no-repeat center center;	
	background-size: 100%;
    display: inline-block;
    margin-left: 0.3rem;
    margin-right:0.4rem;
   /*border:1px solid red;*/
    float: left;
  
}
.head_info_context{
	    float: left;
  /* border: 1px solid;*/
    height: 100%;
    margin-left: 0.3rem;
    width: 82%;
}
.head_context{
	
  /*  border: 1px solid;*/
    line-height: 0.4rem;
    font-size: 14px;
    float: left;
    margin-top: 0.2rem;
    width: 100%;
	
}
.head_context_yue{

}
.head_context_red{
	color:red;
	margin-left:0.1rem;

}
/* head end */
/* 交易记录  tab start */
/*当日 近三天 start*/
.tab-list{

  width: 100%;
  background: #fff;
  padding: 0.2rem 0rem 0.2rem 0.3rem;
  border-bottom: 1px solid #d8d8d8;
}
.tab-list-btn{
	justify-content: space-between;
    display: flex;
   /* border:1px solid red;*/
}
.btn_three{
	color: #ffffff !important;
    background: #1ca4fc !important;
    border:1px solid #1ca4fc;
    font-size: 14px !important;
    border-radius: 4px;
    width: 27%;
    height:0.6rem;
    margin-right: 0.34rem;
   /* margin-left: 0.1rem;
   */
}
.btn_three_w{
	color: #666666 !important;
    background: #ffffff !important;
    border:1px solid #efefef;
    font-size: 14px !important;
    border-radius: 4px;
    width: 27%;
    height:0.6rem;
    margin-right: 0.34rem;
}
/*  列表  */
.tab-list-content{width: 100%; position: absolute;/*border:1px solid red ;*/}

.tab-png-gj{
	background: url(../../../static/images/gj.png)no-repeat center center;	
	background-size: 100%;
	width: 0.8rem;
	height: 0.8rem;
	/*border:1px solid ;*/
}
.tab-png-tk{
	background: url(../../../static/images/tk.png)no-repeat center center;	
	background-size: 100%;
	width: 0.8rem;
	height: 0.8rem;
	/*border:1px solid ;*/
}
.tab-png-cz{
	background: url(../../../static/images/cz.png)no-repeat center center;	
	background-size: 100%;
	width: 0.8rem;
	height: 0.8rem;
	/*border:1px solid ;*/
}
.tab-png-xf{
	background: url(../../../static/images/xf.png)no-repeat center center;	
	background-size: 100%;
	width: 0.8rem;
	height: 0.8rem;
	/*border:1px solid ;*/
}
.tab-png-yj{
	background: url(../../../static/images/yj.png)no-repeat center center;	
	background-size: 100%;
	width: 0.8rem;
	height: 0.8rem;
	/*border:1px solid ;*/
}
.tab-png-yjtk{
	background: url(../../../static/images/yjtk.png)no-repeat center center;	
	background-size: 100%;
	width: 0.8rem;
	height: 0.8rem;
	/*border:1px solid ;*/
}
.tab-png-tx{
	background: url(../../../static/images/tx.png)no-repeat center center;	
	background-size: 100%;
	width: 0.8rem;
	height: 0.8rem;
	/*border:1px solid ;*/
}
.bank-arrow1{
  width: 10px;
  height: 10px;
  border-top: 1px solid #999;
  border-right: 1px solid #999;
  transform: rotate(45deg);
  position: absolute;
  right: 0.3rem;
    top: 0.56rem;
  /*border:1px solid;*/
}

/*.tab-icon:after {content: '';width: 1px;height: 0.9rem;background: #9b9b9b;display: block;position: absolute;left: 1.4rem;top: 0.25rem;}*/

.tab-text {    width: 79%;
    padding-left: 0.2rem;
    border-left: 1px solid #9b9b9b;
    /* border: 1px solid; */
    margin-left: 14px;}

.tab-money {font-size: 0.32rem;height: 0.55rem;/*border:1px solid;*/}
.tab-date {font-size: 0.24rem;color: #999;}
/*.scroller-top{margin-top:-0.34rem !important;}*/
/*当日 近三天 end*/

/*  历史记录  start*/

.paddingTop {
	width: 100%; position: absolute;border:1px solid red ;
height: auto;background: #fff; padding: 0.47rem 0.3rem;}
/* 时间 start */

.lishi-show-start-time {
	/*color: #666666 !important;
    background: #ffffff !important;
    border:1px solid #efefef;
    font-size: 14px !important;
    border-radius: 4px;
    width: 27%;
    height:0.6rem;
    margin-right: 0.34rem;*/
	color: #666666 !important;
    background: #ffffff !important;   
    font-size: 14px !important;   
   /* margin-right: 0.34rem;*/
    border:1px solid #eaeaea;
	border-radius:0.08rem;
	width:30%;
	height:0.6rem;

}
.lishi-show-span {
	/*border:1px solid red;*/
	text-align: center;
	padding:0.1rem 0.1rem 0rem 0.1rem;
	/*margin-right: 0.1rem;
	margin-left: 0.1rem;*/
}
.lishi-show-end-time{
	color: #ffffff !important;
    background:#1ca4fc !important;   
    font-size: 14px !important;   
   /* margin-right: 0.34rem;*/
    border:1px solid #1ca4fc;
	border-radius:0.08rem;
	width:20%;
	height:0.6rem;
	margin-right: 0.34rem;
}
.lishi-time-change{
	justify-content: space-between;
    display: flex;
	/*border:1px solid red;*/
	padding-top: 0.2rem;

}
/* 时间 end */
</style>