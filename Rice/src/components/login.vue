<template>
  <div class="btnBg">
    <img class="logo" src="../assets/img/logo.png" alt="">
    <div class="login_box">
      <div class="phone">
        <label>手机号码</label>
        <input type="text" class="phone_border" placeholder="" v-model="tel">
        <img @click="claer" class="clear_small" src="@/assets/img/clear_big.png" alt="">
      </div>
      <div class="line"></div>
      <div class="phone phone1">
        <label>短信验证码</label>
        <input type="password" class="phone_border1" placeholder="">
        <span id="code">获取验证码</span>

      </div>
      <div class="line1"></div>
      <img class="login-btn" src="../assets/img/login_btn.png" alt="">
      <input type="button" class="login" value="登录">
    </div>


  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        tel:''
      }
    },
    methods:{
    claer(){
      this.tel='';
    }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  width: 90px;
  height: 90px;
}
.btnBg {
  width: 100%;
  height: 100vh;
  background: url('../assets/img/login_bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  overflow: hidden;
}

.btnBg {
  display: block;
  margin: 0 auto;
  padding-top: 50px;
}
.login_box{
  margin-top: 40px;
  position: relative;
}
.phone_border{
  border:none;
  background: transparent;
  width: 40%;
  font-size: 13px;
  display: inline-block;
  margin-left: 3.3%;
}
.phone_border1{
  border:none;
  background: transparent;
  width: 40%;
  font-size: 13px;
  display: inline-block;
}
.phone{
  width: 75%;
  text-align: left;
  height:50px;
  line-height: 50px;
  margin-left: 12.5%;
}
.phone label{
  font-family: STSongti-SC-Black;
  font-size: 13px;
  color: #747A78;
  letter-spacing: 0;
  text-align: center;
}
.line{
  width: 75%;
  opacity: 0.1;
  border: 1px solid #1D1715;
  margin-left:12.5%;
}
.line1{
  width: 45%;
  opacity: 0.1;
  border: 1px solid #1D1715;
  margin-left:12.5%;
}
#code{
  display: inline-block;
  font-family: STSongti-SC-Black;
  font-size: 13px;
  color: #747A78;
  letter-spacing: 0;
  height:36px;
  line-height: 36px;
  width:33%;
  background: #FFFFFF;
  border-radius: 2px;
  text-align: center;
  margin-top: 15px;
}
.login-btn{
  width: 80% !important;
  margin-top: 8% !important;
}
.login{
  height: 36px;
  width: 80%;
  font-size: 16px;
  color: #FFFFFF;
  background-color: transparent;
  margin-top: -11%;
  border: none;
}
.clear_small{
  width: 17px;
  height: 17px;
  position: absolute;
  top: 18px;
  right: 12.5%;
}
</style>
