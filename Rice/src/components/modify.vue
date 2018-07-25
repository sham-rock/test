<template>
  <div>
    <div class="my_sort">
      <div class="sort">
        <span>收货人</span>
        <span class="fr txt">王安安</span>
      </div>
      <div class="sort">
        <span>手机号</span>
        <span class="fr txt">13789347534</span>
      </div>
      <div class="sort">
        <span>地址</span>
        <img class="right" src="@/assets/img/right.png" alt="">
        <span class="fr txt">上海</span>
      </div>
      <div class="sort">
        <span>详细地址</span>
        <div class="fr details txt"><input placeholder="如道路、门牌号、小区、楼栋号等" type="text"></div>
      </div>
    </div>
    <div class="btn">
      <img src="../assets/img/login_btn.png" alt="">
      <span class="tt">确认</span>
    </div>
  </div>
</template>


<script>
export default {
  name:'modify',
  data(){
    return{
      msg:'修改地址'
    }
  }
}
</script>
<style scoped>
.fr{
  float: right;
}
.my_sort{
  margin: 0 22px 0;
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
.txt{
  font-size: 16px;
  color: #393A3E;
  font-weight: bold;
}
.details{
  margin-top: -10px;
}
.details input{
  text-align: right;
}
.details input::-webkit-input-placeholder{
  font-size: 14px;
  color: #C4C6C8;
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


