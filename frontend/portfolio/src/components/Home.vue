<template>
  <div id="home" class="d-flex w-100 justify-content-center align-items-center">
    <div id="name-area">
      <h1 class="d-flex">GAKU JINYAMA</h1>
      <ul class="d-flex flex-column">
          <li class="d-flex justify-content-end">UI/UX designer</li>
          <li class="d-flex justify-content-end">Full stack engineer</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #name-area{
    margin-top: 15%;
  }
 
</style>
