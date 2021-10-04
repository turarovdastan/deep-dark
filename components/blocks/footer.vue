<template>
  <div id="footer-container">
    <div id="footer-links-container">
      <div id="brand-links-container">
        <div id="logo-cont">
          <div class="logo-img">
          </div>
          <div class="logo-title">
            <p>Foil<br>Network</p>
          </div>
        </div>
        <div class="apps-links-container">
          <p>Download App</p>
          <div class="apps">
          <app_store class="app_button" />
          <google_market class="app_button" />
        </div>
        </div>
        <div class="erachain">
          <div id="erachain-logo">
            <img src="../../assets/icons/erachain-logo.png" alt="erachain-logo">
          </div>
          <div id="erachain-text">
              {{ 'EN' === 'EN' ? 'Powered by Erachain technology' : 'На базе технологии Erachain'}}
          </div>
        </div>
      </div>
      <div id="footer-menu-container">
        <div v-for="i in 3" class="footer-menu-column" :key="i">
          <h3>Foil</h3>
          <div class="button-cont">
            <p >
                <a >
                  <img src="@/assets/icons/tg.svg" alt="">
                  <span>Product</span>
                </a>
                 <a >
                     <img src="@/assets/icons/tg.svg" alt="">
                  <span>Product</span>
                </a>
                 <a >
                     <img src="@/assets/icons/tg.svg" alt="">
                  <span>Product</span>
                </a>
                 <a >
                    <img src="@/assets/icons/tg.svg" alt="">
                  <span>Product</span>
                </a>
                 <a >
                     <img src="@/assets/icons/tg.svg" alt="">
                  <span>Product</span>
                </a>
                
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="footer-keywords-container">
      <span v-for="i of 20" :key="i">{{ 'hello' }}</span>
    </div>
    <div id="footer-copyright-container">
      <div id="copyright-container">
        <div>
          <a href="/">{{ 'EN' === 'EN' ? 'Privacy policy' : 'Политика конфиденциальности' }}</a>
          <a href="/">{{'EN' === 'EN' ? 'Terms & Conditions' : 'Правила и Положения' }}</a>
        </div>
        <div class="footer-logo">
          <img src="../../assets/imon_logo.png" alt="imon"><br>
          <span>Made by IMON Design Agency</span>
        </div>
        <div>
          <span>&copy; 2021 FOILnetwork&trade;.
            {{ 'EN' === 'EN' ? 'All rights reserved.' : 'Все права защищены.' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import app_store from "@/components/blocks/parts/buttons/app_store";
import google_market from "@/components/blocks/parts/buttons/google_market";

export default {
  name: "footer_container",
  components: {google_market, app_store},
  // computed: {
  //   footer_menu_buttons() {
  //     if (this.$store.state.footer_menu === undefined) {
  //       this.$store.dispatch('GET_FOOTER_MENU');
  //     }
  //     return this.$store.state.footer_menu
  //   },
  //   keywords() {
  //     if (this.$store.state.keywords.length === 0) {
  //       this.$store.dispatch('GET_KEYWORDS');
  //     }
  //     return this.$store.state.keywords
  //   }
  // },
}
</script>

<style lang="scss" scoped>
#footer-container {
  background-color: #161616;
  padding-top: 5%;
  #footer-links-container {
    display: flex;
    width: 90%;
    margin: auto;
    #brand-links-container {
      display: inline-block;
      width: 40%;
      position: relative;
      #logo-cont {
        font-family: Adineue-PRO-Cyr-BoldWeb, serif;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 71%;
        color: #FFFFFF;
        .logo-img {
          width: 43px;
          height: 43px;
          margin-right: 5px;
          box-sizing: border-box;
          float: left;
          background: url("../../assets/logo_icon.png") no-repeat;
          background-size: contain;

        }
        .logo-title {
          vertical-align: middle;
        }
      }
      .erachain {
        position: absolute;
        left: 0;
        bottom: 0;
        color: #8a8a8a;
        display: flex;
        width:  100%;
        font-family: Axiforma-Regular,serif;
        font-size: 12px;
        div#erachain-logo {
          box-sizing: border-box;
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 1%;
          img {
            width: 100%;
            height: auto;
          }
        }
        div#erachain-text {
          display: inline-block;
          vertical-align: super;
        }
      }
    
      .apps-links-container {
        margin-top: 30px;
        p {
          color: #FFFFFF;
          font-family: Adineue-PRO-Cyr-BoldWeb, serif;
          font-size: 17px;
        }
        .app_button {
          margin-top: 10px;
        }
      }
        @media (max-width:800px) {
        .erachain{
          position: static;
          align-items: center;
          justify-content: center;
          margin: 10px 0 ;
        }
        .apps-links-container{
          text-align: center;
        }
      }
    }
    #footer-menu-container {
      display: inline-block;
      width: 60%;
      vertical-align: top;
      .footer-menu-column {
        display: inline-block;
        width: 30%;
        vertical-align: top;
        .button-cont {
          p {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
            a {
              display: flex;
              align-items: center;
              // justify-content: center;
              gap: 10px;
              text-decoration: none;
              color: #FFFFFF;
              font-family: Axiforma-Regular,serif;
              font-size: 14px;
            }
          }

        }
        h3 {
          color: #FFFFFF;
          font-family: Adineue-PRO-Cyr-BoldWeb, serif;
        }
      }
      .footer-menu-column:nth-child(3) {
        width: 40%;
        .button-cont {
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;
          p {
            flex: 50%;
            a {

            }
          }
        }
      }
    }
     @media (max-width:650px){
      #footer-menu-container {
        width: 86%;
      }
    }
    @media (max-width:450px){
      #footer-menu-container {
        width: 96%;
      }
    }
  
  }

@media (max-width:800px) {
  #footer-links-container {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap:50px;
    #logo-cont{
      display: none;
    }
    #footer-menu-container{
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
  }
  
  
}
  #footer-keywords-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    margin-top: 50px;
    span {
      display: inline-block;
      background-color: #242424;
      border: 1px solid #505050;
      border-radius: 30px;
      padding: 1% 2%;
      margin: 10px 3px;
      color: #8a8a8a;
      font-size: 14px;
      //float: left;
    }
  }
  @media (max-width:500px){
     #footer-keywords-container{
       display: none;
     }
  }
  #footer-copyright-container {
    background-color: #1f1f1f;
    font-family: Axiforma-Regular,serif;
    padding:20px 0;
    #copyright-container {
      display: block;
      width: 90%;
      margin: 1% auto 0 auto;
      padding: 1% 0;

      div {
        display: inline-block;
        width: 33%;
        vertical-align: middle;
        font-size: 12px;
      }
      div:first-child {
        text-align: left;
        a {
          color: #fdfdfd;
          text-decoration: none;
        }
        a:first-child {
          padding-right: 12%;
        }
      }
      div:nth-child(2) {
        text-align: center;
        font-size: 6.5px;
        color: #8a8a8a;
      }
      div:nth-child(3) {
        text-align: right;
        color: #fdfdfd;
      }
    }

  }
}

.apps{
  display: flex;
  gap:10px;
  align-items: center;
}

@media (max-width:800px) {
  #footer-container #footer-links-container #brand-links-container{
    width: 100%;
  }
 .apps{
   justify-content: center;
 }  
}

@media (max-width:913px) {
  #footer-container #footer-copyright-container #copyright-container div:nth-child(2){
    display: none;
  }
  #footer-container #footer-copyright-container #copyright-container div:nth-child(1){
    display: flex;
    flex-direction: column;
    gap :10px;
  }
  #footer-container #footer-copyright-container #copyright-container div:nth-child(3){
    display: flex;
    flex-direction: column;
    gap :10px;
    white-space: nowrap;
    text-align: center;
    width: 100%;
    margin-top:   10px;
    opacity: .7;
  }

   #footer-container #footer-copyright-container #copyright-container{
     display: flex;
     flex-direction: column;
     text-align: center;
     justify-content: center;
     align-items: center;
   }
   #footer-container #footer-copyright-container #copyright-container div:first-child a{
     text-align: center;
   }
}
</style>