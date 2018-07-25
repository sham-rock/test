<template>
  <div>
    <div class="box"><div class="imgBg"><img :src="img" alt=""></div></div>
    <div class="info">
      <div class="title">年卡使用说明</div>
      <div class="txt">
        <p><span class="dot"></span><span>可享上海范围内，送货上门特权</span></p>
      </div>
      <div class="txt">
        <p><span class="dot"></span><span>可享受限时购提前抢</span></p>
      </div>
      <div class="txt">
        <p><span class="dot"></span><span>七天报价自动退</span></p>
      </div>
      <div class="txt date">
        <p><span class="dot"></span><span>有限期至2019-09-12</span></p>
      </div>
    </div>
    <div class="space"></div>
    <div class="btn">
      <img src="../assets/img/login_btn.png" alt="">
      <span class="tt">立即抢购</span>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/img/red_card.png'
import img2 from '@/assets/img/green_card.png'
import img3 from '@/assets/img/gray_card.png'
export default {
  name: 'cardDetails',
  data () {
    return {
     msg:'办卡详情',
     sort:'',
     img:''
    }
  },
  created(){
    this.sort = this.$route.params.index;
    if(this.sort==0){
      this.img =img1;
    }else if(this.sort==1){
      this.img =img2;
    }else if(this.sort==2){
      this.img =img3;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width: 100%;
  height: 164px;
  background: #F3F6EE;
  position: relative;
}
.imgBg{
  margin: 0 7px 0 8px;
  position: absolute;
  top: 17px;
  left: 0;
  overflow: hidden;
}
.info{
  margin-top:82px ;
  margin-left: 30px;
  clear: both;
}
.title{
  font-size: 16px;
  color: #616165;
  margin-bottom: 10px;
  font-weight: bold;
}
.dot{
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background: #C39F64;
  vertical-align: middle;
  margin-right: 6px;
}
.txt{
  font-size: 14px;
  color: #8D8E91;
  line-height: 20px;
}
.date{
  margin: 20px 0;
}
.space{
  width: 100%;
  height: 6px;
  background: #F5F5F5;
  margin-bottom: 30px;
}
.btn{
  height: 41px;
  width: 100%;
  padding: 0 38px 0 34px;
  position: relative;
}
.tt{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
