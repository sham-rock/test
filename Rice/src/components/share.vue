<template>
  <div class="share">
    <img src="../assets/img/share.png" alt="">
    <div class="invite"></div>


  </div>
</template>

<script>
  export default {
    name: 'share',
    data() {
      return {
        msg: '我的页面'
      }
    },
    methods:{

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .share {
    width: 100%;
  }

  img {
    display: block;
  }

  .invite {
    height: 40px;
    width: 80%;
    margin-top: -172%;
    margin-left: 10%;
  }
</style>
