<template>
<div>
  <div class="my_sort">
    <div class="sort">
       <input class="ipt" type="text" placeholder="" v-model="name">
       <img @click="claer" class="clear_small" src="@/assets/img/clear_small.png" alt="">
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
  name:"checkName",
  data(){
    return{
      name:'VIAN微安'
    }
  },
  methods:{
    claer(){
      this.name='';
    }
  }
}
</script>
<style scoped>
.my_sort{
  margin: 0 22px;
}
.sort{
  padding: 22px 0 7px;
  vertical-align: middle;
  border-bottom: 1px solid rgba(224, 224, 225, 0.53);
  font-size: 13px;
  color: #919497;
  position: relative;
}
.right{
  width: 24px;
  height: 24px;
  float: right;
}
.ipt{
  margin-bottom: 0;
  font-size: 16px;
  color: #393A3E;
  font-weight: bold;
}
.clear_small{
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%,0)
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


