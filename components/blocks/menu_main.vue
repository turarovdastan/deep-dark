<template>
  <div id="header-container">
    <div id="head-logo">
      <img @click="$router.push('/')" :src="logo" alt="foil.network">
    </div>
    <div id="main-menu">
        <a class="main-menu-button-link">
        Block Explorer
      </a>
       <a class="main-menu-button-link">
        Block Explorer
      </a>
       <a class="main-menu-button-link">
        Block Explorer
      </a>
       <a class="main-menu-button-link">
        Block Explorer
      </a>
    </div>
    <div id="head-socials">
      <a v-for="social in socials" v-bind:key="social['id']" :href="social['link']">
        <img :src="social['image_link']" alt="socials">
      </a>
    </div>
    <div id="head-lang">
      <select>
        <option selected class="lang_option">EN</option>
        <option class="lang_option">RU</option>
      </select>
    </div>
    <div v-if="auth" @dblclick="$router.push('/home')" id="head-auth">
        <img @click="mini_modal=!mini_modal" src="@/assets/icon.svg" alt="">
        <MiniModal  v-if="mini_modal"/>
    </div>
    <div v-else id="head-auth">
      <router-link to="/login">Sign in</router-link> / <router-link to="/login#signup">Sign up</router-link>
    </div>
    <div @click="modal=true" class="menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line shot"></div>
    </div>
    <transition name="slide-fade">
    <modal v-if="modal" @close="modal=false" :socials="socials"/>
    </transition>
  </div>
</template>

<script>
import logo from '@/assets/logo.svg'
import Modal  from './Modal.vue'
import MiniModal from './mini-modal.vue'
export default {
  name: "menu_main",
  data() {
    return {
      logo,
      socials: [
        {id: 1, link: "/1", image_link: require("@/assets/icons/md.png")},
        {id: 2, link: "/1", image_link: require("@/assets/icons/tg.png")},
        {id: 3, link: "/1", image_link: require("@/assets/icons/tw.png")},
      ],
      modal:false,
      languages: [],
      mini_modal:false,
      auth:false
    }
  },
 
  components:{
    Modal,
    MiniModal
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
#header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.46);
  padding: 1% 2%;
  width: 100%;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid;
  border-bottom-color: rgba(255, 255, 255, 0.19);
  #head-logo {
    flex: 0 0 20%;
    //text-align: center;
  }
  #main-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 0 0 55%;
    .main-menu-button-link {
      //padding: 1% 5%;
      color: #AEAEAE;
      font-family: Axiforma-Regular,serif;
      text-decoration: none;
      font-size: 14px;
    }
  }
  #head-socials {
    flex: 0 0 10%;
    text-align: center;
  }
  #head-lang {
    flex: 0 0 5%;
    text-align: center;
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;       /* Remove default arrow */
      color: #FFFFFF;
      background-color: transparent;
      border: none;
      vertical-align: top;
      .lang_option {
        color: #FFFFFF;
        background-color: #2c3e50;
        border: none;
      }
      &:hover {
        border: none;
      }
      &:focus-visible {
        border: none;
        outline: none;
      }
    }
  }
  #head-auth, #head-account {
    flex: 0 0 10%;
    text-align: right;
    color: #FFFFFF;
    font-weight: 800;
    font-size: 14px;
    a {
      color: #FFFFFF;
      font-family: Axiforma-Regular,serif;
      text-decoration: none;
      font-weight: 400;
      font-size: 14px;
    }
  }
  //#head-account {
  //  flex: 0 0 10%;
  //  text-align: right;
  //}
.menu{
  width: 27px;
  display: none;
  gap: 4px;
  flex-direction: column;
  position: absolute;
  right: 20px;
  top: 21px;
  .line{
    width: 100%;
    height: 3px;
    background: #fff;
  }
  .shot{
    width: 70%;
    align-self: flex-end;
  }
}

  @media (max-width:1012px) {
 #main-menu, #head-auth,#head-socials{
    display: none;
  }
  .menu{
    display: flex;
  }
}
}

@media (max-width:1012px) {
#header-container{
  justify-content: flex-start;
  gap: 70px;
  align-items: center;
  #head-lang{
    position: absolute;
    top: 22px;
    right: 75px;
  }
}
}

</style>