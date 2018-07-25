<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   data () {
    return {

    }
  }
}
</script>
<style>
html,body,p{
    margin: 0;
    padding: 0;
    background: #FFFFFF;
}
img{
  width: 100%;
}
 input[type="text"], input {
	resize: none;
	border: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>


