<template>
  <div class="box">
   <div v-for="(item,index) in imgList" :key='index' class="card" @click="goCardDetails(index)">
     <img :src="item" alt="">
   </div>
   <warp/>
  </div>
</template>

<script>
import Warp from '@/components/warp.vue'
import img1 from '@/assets/img/red_card.png'
import img2 from '@/assets/img/green_card.png'
import img3 from '@/assets/img/gray_card.png'
export default {
  name: 'getCard',
  data () {
    return {
     imgList:[img1,img2,img3]
    }
  },
  methods:{
    goCardDetails(index){
      this.$router.push({
        path:'/cardDetails',
        name:"cardDetails",
        params:{index}
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
.box{
  margin-top: 17px;
}
.card{
  padding: 0 7px 0 8px;
}
</style>
