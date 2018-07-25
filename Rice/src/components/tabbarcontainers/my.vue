<template>
  <div>
   <div class="my_bg">
     <img class="green_bg" src="../../assets/img/my_bg.png" alt="">
     <div class="me_icon"><img src="../../assets/img/logo.png" alt=""></div>
     <div class="personInfo">
       <img src="../../assets/img/my_img.png" alt="">
       <img @click="setInfo" class="setImg" src="../../assets/img/set.png" alt="">
       <p class="username">VIAN微安</p>
       <div class="integral">
         <img class="integral_img" src="../../assets/img/integral.png" alt="">
         <span class="integral_count">128积分</span>
       </div>
     </div>
   </div>

   <div class="my_sort">
     <div class="sort" @click="myOrder">
       <span>我的订单</span>
       <img class="right" src="../../assets/img/right.png" alt="">
     </div>
      <div class="sort" @click="myMember">
       <span>我的会员卡</span>
       <img class="right" src="../../assets/img/right.png" alt="">
     </div>
      <div class="sort" @click="shippingAddress">
       <span>收货地址</span>
       <img class="right" src="../../assets/img/right.png" alt="">
     </div>
      <div class="sort" @click="share">
       <span>分享有礼</span>
       <img class="right" src="../../assets/img/right.png" alt="">
     </div>
   </div>
   <warp/>
  </div>
</template>

<script>
import Warp from '@/components/warp.vue'
export default {
  name: 'my',
  data () {
    return {
     msg:'我的页面'
    }
  },
  methods:{
    setInfo(){
      this.$router.push({
        path:'/setInfo',
        name:"setInfo"
      })
    },
    shippingAddress(){
      this.$router.push({
        path:'/shippingAddress',
        name:"shippingAddress"
      })
    },
    myMember(){
       this.$router.push({
        path:'/member',
        name:"member"
      })
    },
    myOrder(){
       this.$router.push({
        path:'/order',
        name:"order"
      })
    },
    share(){
      this.$router.push({
        path:'/share',
        name:"share"
      })
    }
  },
  components: {
        warp:Warp
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my_bg .green_bg{
  height: 128px;
  position: relative;
}
.me_icon{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translate(-50%,0);
  z-index: 999;
}
.personInfo{
  margin: 0 12px;
  position: absolute;
  top: 50px;
}
.setImg{
  width: 18px;
  height: 18px;
  position: absolute;
  top: 24px;
  right: 24px;
}
.username{
font-size: 16px;
color: #393A3E;
font-weight: bold;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
}
.integral{
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%,0);
}
.integral_img{
  width: 16px;
  height: 16px;
}
.integral .integral_count{
  font-size: 10px;
  color: #848484;
}
.my_sort{
  margin: 60px 22px 0;
}
.sort{
  padding: 22px 0 12px;
  vertical-align: middle;
  border-bottom: 1px solid rgba(224, 224, 225, 0.53);
  font-size: 13px;
  color: #919497;
}
.right{
  width: 24px;
  height: 24px;
  float: right;
}

</style>
