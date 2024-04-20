<template >

  <body>
    <navbar/>
    

    <router-view/>
  </body>
  

</template>
<script>
import navbar from './components/navbar'
export default {
  components:{
    navbar
  }
}
</script>
<style >
  
body{
  background-color: black;
}
</style>