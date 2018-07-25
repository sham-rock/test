<template>
  <div class="bg">

    <div class="sort">
      <div class="item">
        <div>
          <p><span class="name">王安安</span><span class="tel">13724569906</span></p>
          <p class="address">上海 上海市浦东新区惠南镇听朝五村89号801室</p>
        </div>
        <div class="modify" @click="modify"><img src="@/assets/img/modify.png" alt=""></div>
      </div>
      <div class="space"></div>
    </div>

    <div class="sort">
      <div class="item">
        <div>
          <p><span class="name">王安安</span><span class="tel">13724569906</span></p>
          <p class="address">上海 上海市浦东新区惠南镇听朝五村89号801室</p>
        </div>
        <div class="modify" @click="modify"><img src="@/assets/img/modify.png" alt=""></div>
      </div>
      <div class="space"></div>
    </div>

    <div class="btn">
      <img src="../assets/img/login_btn.png" alt="">
      <span class="tt">新增地址</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'shippingAddress',
  data(){
    return {
    }
  },
  methods:{
    modify(){
      this.$router.push({
        path:'/modify',
        name:"modify"
      })
    }
  }

}
</script>
<style scoped>
.item{
  margin: 24px 28px 24px 21px;
  position: relative;
}
.name{
  font-size: 16px;
  font-weight: bold;
  color: #393A3E;
  margin: 0 4px;
}
.tel{
  font-size: 12px;
  color: #93959F;
}
.address{
  font-size: 14px;
  color: #393A3E;
  margin-top: 5px;
}
.modify{
  position: absolute;
  right: 0;
  top: 14px;
}
.modify img{
  width: 20px;
  height: 20px;
}
.space{
  width: 100%;
  height: 6px;
  background: #F5F5F5;
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


