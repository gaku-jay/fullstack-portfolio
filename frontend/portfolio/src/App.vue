<template>

  <div id="app" v-on:keyup.page-down="onPageDown">

    <header id="header" class="h-10">
      <div class="h-100 d-flex h-100 align-items-center">
        <router-link to="/" id="name" exact>
          <h1 class="home-btn">Gaku Jinyama</h1>
          <transition name="fade">
            <ul v-if="isHomeViewed" class="d-flex flex-column">
              <li class="d-flex justify-content-end">UI/UX designer</li>
              <li class="d-flex justify-content-end">Full stack engineer</li>
            </ul>
          </transition>
        </router-link>
      </div>
      <div class="nav-bar"></div>
      <div class="hamburger-menu"></div>
    </header>

    <div class="container-fluid reset-margin bg-1 h-90">
      <div class="row h-100 reset-margin" id="main-area">
          <div class="side-menu col-md-2">

              <ul>
                <router-link v-for="(item, index) in pageList" :data-index="index" :key="item.name" :ref="item.name" tag="li" :to="item.url" class="menu" exact>
                  {{ item.name }}
                </router-link>
              </ul>

              <div class="scroll-down">
                  <p>SCROLLDOWN</p>
              </div>
          </div>

          <div id="content-area" class="col-md-10 h-100 d-flex">
               <!-- Main content area -->
               <transition name="view" :duration="300" appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
                  <router-view/>
               </transition>
          </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      pageList: [{name: "HOME", url: "/"},
                     {name: "WORK", url: "/work"},
                     {name: "ABOUT ME", url: "/aboutMe"},
                     {name: "GALLERY", url: "/gallery"},
                     {name: "CONTACT", url: "/contact"} 
      ],
      isHomeViewed: false
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap');

.router-link-active, .router-link-active:hover {
  font-size: 2rem !important;
  transition-property: font-size;
  transition-duration: .65s;
  color: white;
}

.menu {
  font-size: 1rem;
  transition-property: font-size;
  transition-duration: .65s;
}

#name {
  font-size: 1.5rem !important;
  animation: moveBack .6s ease-out;
  /* animation-fill-mode: forwards; */
}

#name.router-link-active {
  pointer-events: none;
  position: absolute;
  filter: drop-shadow(5px 5px 5px #000000);
  animation: moveToCenter .6s ease-out;
  animation-fill-mode: forwards;
}

.ul {
  font-size: 1.5rem;
}

.display-none {
  display: none !important;
}

.fade-enter, .fade-leave-to {
  transition-delay: all 12s;;
}


@keyframes moveBack {
   0%   { transform: translate(55vw, 55vh);}  
  100%  { transform: translate(0px, 0px);} 
}

@keyframes moveToCenter {
   0%   { transform:  translate(0px, 0px);}  
  100%  { transform: translate(55vw, 55vh);} 
}



</style>
