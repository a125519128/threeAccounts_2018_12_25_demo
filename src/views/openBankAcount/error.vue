<!-- 异常 -->
<template>
  <div class="container">
	<div class="error-img"></div>
	<p>{{msg}}</p>
	<span>如有疑问请拨打长沙银行客服<a href="tel:0731-96511">0731-96511</a></span>
	<!-- 上拉刷新 -->
	<!-- <scroller lock-x height='200px' @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="400">
	      <div class="box2">
	        <p v-for="i in bottomCount">数据 {{i}}</p>
	        <load-more tip="loading" v-if="onFetching"></load-more>
	        <divider v-if="!onFetching">暂无数据</divider>
	      </div>
	    </scroller> -->
  </div>
</template>

<script>

export default {
	data(){
		return{
			msg:'',
			onFetching: false,
			bottomCount: 5,
		}
	},
	mounted(){
		this.msg = this.$route.query.msg;
	},
	methods:{
		/*onScrollBottom () {
	      if (this.onFetching) {
	        // do nothing
	        console.log('nothing')
	      } else {
	        this.onFetching = true
	        setTimeout(() => {
	          this.bottomCount += 10
	          this.$nextTick(() => {
	            this.$refs.scrollerBottom.reset()
	          })
	          this.onFetching = false
	        }, 2000)
	      }
	    }*/
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {width: 100%;min-height: 100vh;background: #fff;padding-top: 2rem;text-align: center;}
.error-img {width: 2.96rem;height: 1.48rem;background: url(../../../static/images/error.png) no-repeat;background-size: cover;margin: 0 auto 1rem;}
.container p {font-size: 0.26rem;color:#fd4747;}
.container span {font-size: 0.26rem;color: #666;}
.container a {color: #1ca4fc;padding-left: 0.1rem;}
</style>