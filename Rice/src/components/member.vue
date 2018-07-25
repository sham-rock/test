<template>
<div class="box">
  <div v-for="(item,index) in imgList" :key='index' class="card">
    <img :src="item" alt="">
    <div class="use">激活</div>
  </div>
  <div class="space"></div>
  <div class="btn">
    <img src="../assets/img/login_btn.png" alt="">
    <span class="tt">邀请好友</span>
  </div>
</div>
</template>
<script>
import img1 from '@/assets/img/red_card.png'
import img2 from '@/assets/img/green_card.png'
import img3 from '@/assets/img/gray_card.png'
export default {
  name:'member',
  data(){
    return{
      imgList:[img1,img2]
    }
  },
  methods:{

  }
}
</script>
<style scoped>
.box{
  margin-top: 17px;
}
.card{
  padding: 0 7px 0 8px;
  position: relative;
}
.use{
  width: 67px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background-image: linear-gradient(-164deg, #48A466 0%,#96CE32  100%);
  border-radius:12px;
  position: absolute;
  right: 64px;
  bottom: 40px;
  font-size: 14px;
  color: #FFFFFF;
}
.space{
  width: 100%;
  height: 6px;
  background: #F5F5F5;
  margin-top: 16px;
}
.btn{
  height: 41px;
  width: 100%;
  padding: 0 38px 0 34px;
  position: relative;
  margin-top: 28px;
  color: #FFFFFF;
  font-size: 16px;
}
.tt{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>

