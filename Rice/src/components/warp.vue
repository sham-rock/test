<template>
  <div>
    <div class="tabH"></div>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
        <img v-if="homeIcon" class="mui-icon mui-icon-home" src="../assets/img/home_green.png" alt="">
        <img v-else class="mui-icon mui-icon-home" src="../assets/img/home_gray.png" alt="">
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/getCard">
      <img v-if="getCardIcon" class="mui-icon mui-icon-home" src="../assets/img/account_green.png" alt="">
      <img v-else class="mui-icon mui-icon-home" src="../assets/img/account_gray.png" alt="">
				<span class="mui-tab-label">办卡</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/my">
      <img v-if="myIcon" class="mui-icon mui-icon-home" src="../assets/img/my_icon_green.png" alt="">
      <img v-else class="mui-icon mui-icon-home" src="../assets/img/my_icon_gray.png" alt="">
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'warp',
   data () {
    return {
    homeIcon:false,
    myIcon:false,
    getCardIcon:false
    }
  },
  created(){
    console.log(this.$route.path)
    let path = this.$route.path
    if(path=='/home'){
      this.homeIcon = true;
    }else if(path=='/getCard'){
      this.getCardIcon = true;
    }else if(path=='/my'){
      this.myIcon = true;
    }
  },
  watch:{
'$route'(to,from){
  console.log(to)
  if(to.path=='/home'){
    this.homeIcon = true;
    this.myIcon = false;
    this.getCardIcon = false;
  }else if(to.path=='/getCard'){
    this.homeIcon = false;
    this.myIcon = false;
    this.getCardIcon = true;
  }else if(to.path=='/my'){
    this.homeIcon = false;
    this.myIcon = true;
    this.getCardIcon = false;
  }
}
  },
  methods:{

  }
}
</script>
<style>
.router-link-active{
  color: #4EA762 !important;
}
.tabH{
  width: 100%;
  height: 46px;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #75767E;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>



