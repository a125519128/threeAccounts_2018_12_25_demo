<!-- 选择银行卡 （抄二类户） -->
<template>
  <div class="container">
	<search v-model="value" :auto-fixed='false' placeholder='快速搜索银行' class="search"
      @on-result-click="resultClick"
      @on-change="getResult"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit">
  	</search>
  	<div class="title" id='HOT'>热门银行</div>
  	<div class="bank-list" v-for="(item,index) in listHot" v-if="item.orderKey != null" @click="selectBank(index,1)">
		<cell-box >
	    	<div class="bank-icon bank-icon-box " v-if="item.bankNo == undefined || item.bankNo == null ||item.bankNo == ''"></div>
	    	<div :class="'bankIcon'+item.bankNo" class="bank-icon-box" v-else></div>
	    	<span class="bank-title">{{item.bankName}}</span>
	  	</cell-box>
  	</div>
  	<div class="index-list">
  		<div class="index-list-label">
  			<p @click="toIndex('HOT')">热门</p>
  			<li v-for="li in indexList" @click="toIndex(li)">{{li}}</li>
  		</div>
  		<div class="list-all" v-for="div in mapList">
	  		<div class="index-list-title" :id='div.title'>{{div.title}}</div>
	  		<div class="index-list-content" v-for="(box,index) in div.items" @click="selectBank(box,2)">
		  		<cell-box >
					<p>{{box.bankName}}</p>
			  	</cell-box>
	  		</div>
  		</div>
  	</div>
  </div>
</template>
<script>
import http from 'axios'
export default {
	data(){
		return{
			value:'',
			listHot:[],
			indexList:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
			mapList:[],
		}
	},
	mounted(){
		var self = this;
		sessionStorage.setItem('backBankName','0');
		self.showLoading();
		var list = sessionStorage.getItem('bank-list');
		if (this.$strUtil.isNotEmpty(list)) {
			self.listHot = JSON.parse(list);
		    let map = {
		        hot: {  //热门分类
		          title: '',
		          items: []
		        }
		    };
		    self.listHot.forEach((item, index) => {
		        const key = item.bankKey;
		        if(!map[key]){  // 按key来进行分类
		          map[key] = {
		            title: key,
		            items: []
		          }
		        }
		        map[key].items.push(item);
		    });
			self.mapList = map;
			self.hideLoading();
			return;
		}
	    let param = new FormData();
		param.append('currentVer','1');
		http.post(ebankip+'/public/transfer/v0/bankinfo.do',param)
			.then(function(response){
				console.log(response);
				self.listHot = response.data.list;
				sessionStorage.setItem('bank-list',JSON.stringify(response.data.list));
			    let map = {
			        hot: {  //热门分类
			          title: '',
			          items: []
			        }
			    };
			    self.listHot.forEach((item, index) => {
			        const key = item.bankKey;
			        if(!map[key]){  // 按key来进行分类
			          map[key] = {
			            title: key,
			            items: []
			          }
			        }
			        map[key].items.push(item);
			    });
				self.mapList = map;
				self.hideLoading();
			})
	},
	methods:{
		selectBank(index,n){
			if (n == 1) {
				sessionStorage.setItem('backBankName',this.listHot[index].bankName);
				sessionStorage.setItem('backBankNo',this.listHot[index].bankNo);
			}else{
				sessionStorage.setItem('backBankName',index.bankName);
				sessionStorage.setItem('backBankNo',index.bankNo);
			}
			this.$router.go(-1);
		},
		toIndex(index){
			this.showToast(index)
			var anchor = this.$el.querySelector('#'+index);
			document.body.scrollTop = anchor.offsetTop; // chrome
			document.documentElement.scrollTop = anchor.offsetTop; // firefox
		},
		resultClick(){
			console.log('点击结果条目时触发')
		},
		getResult(){
			console.log('输入文字变化时触发')
		},
		onFocus(){
			console.log('输入框获取到焦点时触发')
		},
		onCancel(){
			console.log('点击取消按钮时触发')
		},
		onSubmit(){
			console.log('表单提交时触发')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.search {position: fixed ! important;top: 0;z-index: 9999;}*/
.title {width: 100%;padding: 0.1rem 0.2rem;background: #e0e0e0;}
.bank-list, .index-list-content {width: 100%;height: auto;background: #fff; border-bottom: 0.02rem solid #d8d8d8;}
.bank-icon-box {width: 0.8rem;height: 0.8rem;}
.bank-title {font-size: 0.3rem;color: #333;margin-left: 0.2rem;}
.index-list-label {width: 0.8rem;height: auto;text-align: center; position: fixed;right: 0;top: 2rem;z-index: 9999;font-size: 0.24rem;color: #999;}
.index-list-label li {height: 0.35rem;line-height: 0.35rem; display: block;}
.index-list-title {width: 100%;height: 0.7rem;line-height: 0.7rem;padding-left: 0.2rem;font-size: 0.28rem;color: #333;}
</style>