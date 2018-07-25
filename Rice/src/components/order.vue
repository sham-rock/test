<template>
  <div class="menu">
    <div class="menu_bg">
      <ul>
        <li class="first">
          <span class="menuName">订单号:</span>
          <span class="menuSpe">201807259923</span>
        </li>
        <li>
          <span class="menuName">会员卡:</span>
          <span class="menuSpe">SAFHSDFSK10983</span>
        </li>
        <li>
          <span class="menuName">类型:</span>
          <span class="menuSpe">年卡</span>
        </li>
        <li>
          <span class="menuName">金额:</span>
          <span class="menuSpe">3000元</span>
        </li>
        <li>
          <span class="menuName">下单时间:</span>
          <span class="menuSpe">2018.07.25</span>
        </li>
      </ul>
    </div>
    <div class="menu_bg">
      <ul>
        <li class="first">
          <span class="menuName">订单号:</span>
          <span class="menuSpe">201807259923</span>
        </li>
        <li>
          <span class="menuName">会员卡:</span>
          <span class="menuSpe">SAFHSDFSK10983</span>
        </li>
        <li>
          <span class="menuName">类型:</span>
          <span class="menuSpe">年卡</span>
        </li>
        <li>
          <span class="menuName">金额:</span>
          <span class="menuSpe">3000元</span>
        </li>
        <li>
          <span class="menuName">下单时间:</span>
          <span class="menuSpe">2018.07.25</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'order',
    data () {
      return {
        msg:'我的页面'
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu_bg{
  width: 98%;
  height: 219px;
  margin-left: 1%;
  background: url('../assets/img/order_details.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
ul{
  overflow: hidden;
}
li{
  width: 70%;
  height:24px;
  line-height: 24px;
  list-style-type: none;
  margin-top: 5px;
  margin-left: 4%;

}
.first{
  margin-top: 30px;
}
li .menuName{
  display: inline-block;
  font-family: STSongti-SC-Black;
  font-size: 13px;
  color: #919497;
  letter-spacing: 0;
  line-height: 24px;
}
.menuSpe{
  font-family: STSongti-SC-Black;
  font-size: 13px;
  color: #0F0F0F;
  letter-spacing: 0;
  line-height: 24px;
  padding-left: 1%;
}
</style>
