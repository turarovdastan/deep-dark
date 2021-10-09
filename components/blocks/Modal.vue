<template>
    <div class="modal-container">
            <svg @click="$emit('close')" class="close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
  <div class="modal-content">
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
     <div v-if="false" id="head-account">
      <router-link to="home">Account</router-link>
    </div>
    <div v-else id="head-auth">
      <router-link to="/login">Sign in</router-link> / <router-link to="/login#signup">Sign up</router-link>
    </div>
    <div id="head-socials">
      <a v-for="social in socials" v-bind:key="social['id']" :href="social['link']">
        <img :src="social['image_link']" alt="socials">
      </a>
    </div>
    </div>

    </div>
</template>

<script>
export default {
    props:['socials']
}
</script>

<style lang="scss" scoped>
.modal-container{
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.7);
    position: fixed;
    z-index: 30;
    top: 0;
    left:0;
    backdrop-filter: blur(5px);

    display: flex;
    align-items: center;
    justify-content: center;
    .modal-content{
        width: 90%;
        height: 80%;
    }
    .close{
        position: absolute; 
        top: 20px;
        left: 20px;
    }
}

 #main-menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 0 0 55%;
    gap: 10px;
    .main-menu-button-link {
      //padding: 1% 5%;
      color: #AEAEAE;
      font-family: Axiforma-Regular,serif;
      text-decoration: none;
      font-size: 16px;
    }
  }

   #head-socials {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 30px;
    left: 40%;
   }
     #head-auth, #head-account {
    margin: 30px 0 0 0;
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
</style>