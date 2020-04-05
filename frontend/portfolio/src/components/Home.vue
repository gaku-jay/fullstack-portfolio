<template>

  <div id="home" class="d-flex w-100 justify-content-center align-items-center">
    <div id="name-area">
      <!-- <h1 class="d-flex">GAKU JINYAMA</h1> -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['isHomeViewed'],
  date: function () {
    return {
    }
  },
  mounted: function () {
    console.log("Home Created");
    this.$emit("home-created");
  },
  destroyed: function () {
    console.log("Home Destroyed");
    this.$emit("home-destroyed");
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
