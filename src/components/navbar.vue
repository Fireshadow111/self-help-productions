<template>
  <body>
    <div>
  
  <nav style = "max-width: 95%; border-radius: 100px;"  class="navbar navbar-expand-lg bg-body-tertiary mx-auto mt-3 ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"> <img id = "logo" src="https://cdn-images.imagevenue.com/b4/b0/b6/ME184P0K_o.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to = "/" class="nav-link active mx-3" aria-current="page" href="#">Home</router-link>
        <router-link  to = "/about" class="nav-link active mx-3" href="#">About</router-link>
        <router-link  to = "/artists" class="nav-link active mx-3" href="#">Artists</router-link>
        <router-link  to = "/clients" class="nav-link active mx-3" href = "#">Clients</router-link>
        <router-link  to = "/contact" class="nav-link active mx-3" href = "#">Contact</router-link>
      </div>
    </div>
  </div>
</nav>
</div>

</body>
</template>
<script>
export default {
  components:{

  }
}
</script>
<style scoped>


   .navbar {
    background-color: black;
    box-shadow: 0px 0px 15px 4px #078930;
              
  }


  #logo{
    height: 80px;
    width: 90px
  }

  .nav-link{
    font-size: 25px;
    font-family: "Raleway";
    color: #d9d9d9;
    font-weight: bold;
    
  }
</style>


