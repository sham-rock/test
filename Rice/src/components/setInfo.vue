<template>
  <div>
    <div class="my_sort">
      <div class="sort">
        <span>头像</span>
        <img class="photo" src="@/assets/img/my_icon_green.png" alt="">
      </div>
      <div class="sort" @click="checkName">
        <span>昵称</span>
        <img class="right" src="@/assets/img/right.png" alt="">
        <span class="fr txt">VIAN微安</span>
      </div>
      <div class="sort" @click="checkTel">
        <span>手机号</span>
        <img class="right" src="@/assets/img/right.png" alt="">
        <span class="fr txt">13789347534</span>
      </div>
    </div>

    <div class="outBtn"><span>退出登陆</span></div>
  </div>
</template>
<script>
export default {
  name:'setInfo',
  data () {
    return {
     msg:'设置'
    }
  },
  methods:{
    checkName(){
      this.$router.push({
        path:'/checkName',
        name:"checkName"
      })
    },
    checkTel(){
       this.$router.push({
        path:'/checkTel',
        name:"checkTel"
      })
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
.photo{
  width: 46px;
  height: 46px;
  border-radius: 50%;
  float: right;
  position: relative;
  top: -15px;
}
.txt{
  font-size: 16px;
  color: #393A3E;
  font-weight: bold;
}
.outBtn{
 margin: 30px 34px 0 38px;
}
.outBtn span{
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background: #EDEEEE;
  overflow: hidden;
  font-size: 16px;
  color: #393A3E;
  font-weight: bold;
}
</style>


