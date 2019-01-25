<!-- 限额查询 -->
<template>
	<flexbox >
		<flexbox-item class="container">
			<div class="content-tal">
				为保证账户安全，您的电子交通卡将按照以下限额管理:
			</div>

  	 <div class="content-list">
  	 	<div class="content-list-border">
	  		<div class="list-title">
	  			账户余额限额

	  		</div>
	  		<div class="list-text">
	  			任一时点账户余额不能超过2000.00元
	  		</div>
  		</div>
  	</div>

  	<div class="content-list">
  		<div class="content-list-border">
	  		<div class="list-title">当日消费、缴费及非绑定账户转出限额</div>
	  		<div class="list-text">剩余{{dayRemain}}元/总额{{dayTotal}}元</div>
  		</div>
  	</div>
	
	<div class="content-list">
  		<div class="content-list-border-end">
	  		<div class="list-title">今年消费、缴费及非绑定账户转出限额</div>
  			<div class="list-text">剩余{{yearRemain}}元/总额{{yearTotal}}元</div>
  		</div>
  	</div>

 		</flexbox-item>
	</flexbox>
</template>

<script>

export default {
	data(){
		return{
			dayTotal:'2000.00',
			dayRemain:'0.00',
			yearTotal:'50000.00',
			yearRemain:'50000.00',
			btColor:'',
		}
	},
	mounted(){

	},
	methods:{
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {width: 100%;height: auto;background: #fff;}
.content-list {font-size: 15px; letter-spacing: 0.02rem}
.content-list-border{
	border-bottom: 1px solid #dedede;  
    padding: 0.2rem 0.2rem 0.2rem 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.3rem;
}
.content-list-border-end{
	padding: 0.2rem 0.2rem 0.2rem 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.3rem;
}

.list-text{
	font-size:15px;
	color:#2193f8;
}
.content-tal{
	background: #efefef;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0.12px;
    justify-content: center; 
    display: flex;
    align-items: center;
    padding: 0.2rem;
}
</style>
