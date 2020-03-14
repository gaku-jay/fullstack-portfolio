<template>
  <div id="app" v-on:keyup.page-down="onPageDown">

    <header id="header" class="h-10">
      <router-link to="/" class="home-btn d-flex h-100 align-items-center">Gaku Jinyama</router-link>
      <div class="nav-bar"></div>
      <div class="hamburger-menu"></div>
    </header>

    <div class="container-fluid reset-margin bg-1 h-90">
      <div class="row h-100 reset-margin" id="main-area">
          <div class="side-menu col-md-2">
              <ul>
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/work">WORK</router-link></li>
                <li><router-link to="/aboutMe">ABOUT ME</router-link></li>
                <li><router-link to="/contact">CONTACT</router-link></li>
              </ul>
              <div class="scroll-down">
                  <p>SCROLLDOWN</p>
              </div>
          </div>

          <div id="content-area" class="col-md-10 h-100 d-flex">
               <!-- Main content area -->
              <router-view/>
          </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap');


</style>
