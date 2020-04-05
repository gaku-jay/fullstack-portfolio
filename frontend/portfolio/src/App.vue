<template>

  <div id="app" v-on:keyup.page-down="onPageDown">
    <header id="header" class="h-10">
      <div class="h-100 d-flex h-100 align-items-center">
        <router-link to="/" id="name" exact>
          <span v-bind:class="{activeHome: isHomeViewed}" class="home-btn">Gaku Jinyama</span>
          <transition name="fade">
            <ul v-if="isHomeViewed" class="d-flex flex-column">
              <li class="d-flex justify-content-end">UI/UX designer</li>
              <li class="d-flex justify-content-end">Full stack engineer</li>
            </ul>
          </transition>
        </router-link>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" v-model="isMenuOpen"/>
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu" >
              <router-link v-for="(item, index) in pageList" @click.native="menuClickEvent()" :data-index="index" :key="item.name" :ref="item.name" tag="li" :to="item.url" exact>
                    {{ item.name }}
              </router-link>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <div class="container-fluid reset-margin bg-1 h-90">
      <div class="row h-100 reset-margin" id="main-area">
          <div class="side-menu col-md-2 d-none d-md-flex d-lg-flex">
              <ul>
                <router-link v-for="(item, index) in pageList" :data-index="index" :key="item.name" :ref="item.name" tag="li" :to="item.url" class="menu" exact>
                  {{ item.name }}
                </router-link>
              </ul>
          </div>

          <div id="content-area" class="col-md-10 h-100 d-flex">
               <!-- Main content area -->
               <transition name="view" :duration="300" appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
                  <router-view  @home-created="homeCreated" @home-destroyed="homeDestroyed"></router-view>
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
      pageList: [{name: 'HOME', url: '/'},
                     {name: 'WORK', url: '/work'},
                     {name: 'ABOUT ME', url: '/aboutMe'},
                     {name: 'GALLERY', url: '/gallery'},
                     {name: 'CONTACT', url: '/contact'} 
      ],
      isHomeViewed: false,
      isMenuOpen: false,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    menuClickEvent: function () {
      this.isMenuOpen = false
    },
    homeCreated: function () {
      this.isHomeViewed = true;
    },
    homeDestroyed: function () {
      this.isHomeViewed = false;
    },
    onScroll: function () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      console.log(currentScrollPosition)
      if (currentScrollPosition < 0) {
        return
      }

      if (currentScrollPosition < this.lastScrollPosition) {
        //scrolling up
        this.moveToNextPage('up')
      } else {
        //scrolling down
        this.moveToNextPage('down')
      }

      this.lastScrollPosition = currentScrollPosition;
    },
    moveToNextPage: function (direction) {
      console.log("this1: " + this)
      let router = this.$router
      let pageList = this.pageList
      this.pageList.forEach( function (element, index) {
        let indexOfCurrentPage = -1;
        if (location.pathname === element.url) {
          indexOfCurrentPage = index
          console.log('index: ' + indexOfCurrentPage)
        }

        if (indexOfCurrentPage != -1) {
          
          if (direction == 'up') {
            console.log("this2: " + this)
            router.push(pageList[indexOfCurrentPage - 1].url)
          } else if (direction == 'down') {
            console.log("this3: " + this)
            router.push(pageList[indexOfCurrentPage + 1].url)
          }
        }
      });
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap');

.side-menu .router-link-active, .side-menu .router-link-active:hover {
  font-size: 2rem !important;
  transition-property: font-size;
  transition-duration: .65s;
  color: white;
}

.side-menu ul {
  margin-top: 2rem;
}

.side-menu ul li {
  margin-top: 0.5rem;
}

.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.menu {
  font-size: 1rem;
  transition-property: font-size;
  transition-duration: .45s;
 
}

#name {
  animation: moveBack .3s ease-out;
  /* animation-fill-mode: forwards; */
}

#name.router-link-active {
  pointer-events: none;
  filter: drop-shadow(5px 5px 5px #000000);
  animation: moveToCenter .3s ease-out;
  animation-fill-mode: forwards;
}

.activeHome {
  animation: sizeScale .1s linear;
  animation-fill-mode: forwards;
}

@keyframes sizeScale {
    0%   { font-size:2rem;}
    50%  { font-size:3rem;}
    100% { font-size:4rem;}
}

.display-none {
  display: none !important;
}

@keyframes moveBack {
   0%   { transform: translate(55vw, 55vh);}  
  100%  { transform: translate(0px, 0px);} 
}

@keyframes moveToCenter {
   0%   { transform:  translate(0px, 0px);}  
  100%  { transform: translate(55vw, 55vh);} 
}

/* Hamburger menu */
nav {
  position: absolute;
  right: 2rem;
  z-index: 10;
}

#menuToggle
{
  display: block;
  top: 50px;
  left: 50px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #ffffff;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  /* background: #232323; */
}

#menuToggle input:checked ~ ul
{
  transform: none;
}

#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  right: -2rem;
  opacity: 0.5;
  background-color: #0B0B0B;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
}
/* Hamburger menu */



</style>
