<template>
	<div class="container">
		<i class="list-context-null-i"></i>
		<p>{{showContent}}</p>
	</div>
</template>

<script>
export default {
	props:{bankQueryText:String},
	data(){
		return {
			showContent:'暂无交易记录'
		}
	},
	mounted(){
		if(this.bankQueryText){
			this.showContent = this.bankQueryText
		}
	}
}
</script>
<style scoped>
.container{width: 100%;height: 50vh; display: flex;justify-content: center;align-items: center;flex-direction:column;}
.container p{font-size: 0.3rem;color:#666;}
.list-context-null-i{width: 1.9rem;height: 1.5rem;background: url(../../static/images/wkk.png)no-repeat center center;background-size: 100%;}
</style>