<template>
  <div>
    <div class="ad_1">
      <img class="" src="../../assets/img/ad_1.png" alt="">
    </div>
    <div class="ad_2">
      <img class="" src="../../assets/img/ad_2.png" alt="">
    </div>
    <warp/>
  </div>
</template>

<script>
import Warp from '@/components/warp.vue'
import * as utils from '@/utils/utils'
export default {
  name: 'home',
  data () {
    return {
     msg:'大米'
    }
  },
  components: {
        warp:Warp
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ad_1{
  margin: 13px 10px 10px;
}
.ad_1 img,.ad_2 img{
  width: 100%;
}
</style>
