<template>
  <div id="subscription-container">
    <div id="subscription-container_main">
      <div id="subscription-header">
        <h2>Subscribe to us and stay tuned!</h2>
      </div>
      <div id="subscription-form-container">
        <div id="subscribe-form">
          <div><input type="email" :placeholder="'EN' === 'EN' ? 'Enter your e-mail' : 'Введите свой e-mail'">
          <div id="subscription-button" >
            <a><span>{{ 'EN' === 'EN' ? 'Send information' : 'Отправить'}}</span> <img src="@/assets/icons/arrow.png"> </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
#subscription-container {
  width: 100%;
 #subscription-container_main {
   width: 85%;
   margin: auto;
   padding-bottom: 5%;
   #subscription-header {
     h2 {
       font-family: Adineue-PRO-Cyr-BoldWeb, serif;
       font-style: normal;
       font-weight: bold;
       font-size: 142px;
       line-height: 87%;
       background: -webkit-linear-gradient(0deg, #E40ECF, #21D4FD);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       margin-bottom: 0;
       padding-bottom: 15px;
           word-break: break-all;
     }
      @media (max-width:523px) {
        h2{
          font-size: 49px;
        }
      }
   }
   #subscription-form-container {
     padding-top: 5%;
     display: flex;
     flex-flow: row;
     justify-content: center;
     #subscribe-form {
       background: linear-gradient(180deg, rgba(7, 196, 239, 0.61) 0%, rgba(7, 196, 239, 0.25) 100%);
       opacity: 0.59;
       z-index: 0;
       border-radius: 8px;
       height: 182px;
       flex: 0 100%;
       display: flex;
       flex-flow: row;
       justify-content: center;

       >div {
         display: grid;
         grid-template-columns: .7fr .3fr;
         justify-content: center;
         align-items: center;
         padding: 0 24px;
         width: 100%;
         grid-gap: 15px;
         
         input {
           border: 1px solid #21D4FD;
           box-sizing: border-box;
           border-radius: 8px;
           flex: 0 75%;
           height: 63px;
           background: transparent;
           font-family: Adineue-PRO-Cyr-BoldWeb, serif;
           font-style: normal;
           font-weight: bold;
           font-size: 16px;
           line-height: 200%;
           color: #FFFFFF;
           padding-left: 3%;
         }
         ::placeholder {
           font-family: Adineue-PRO-Cyr-BoldWeb, serif;
           font-style: normal;
           font-weight: bold;
           font-size: 16px;
           line-height: 200%;
           color: #FFFFFF;
         }
       }
        @media (max-width:1200px) {
         >  div{
            grid-template-columns: 1fr;
            min-height: 150px;
            padding:29px 16px;
            gap: 16px;
            input{
              width: 100%;
              height: 63px;
            }
          } 
      }
     }
     
     }
     
 }
}
#subscription-button {
    background: #21D4FD;
    border-radius: 8px;
    opacity: 1;
    cursor: pointer;
    width: 100%;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-family: Adineue-PRO-Cyr-BoldWeb, serif;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 200%;
      color: #FFFFFF;
      span {
        display: inline-block;
        //float: left;
        //width: 90%;
      }
      img {
        display: inline-block;
        padding-left: 1%;
        //float: right;
        width: 10%;
      }
    }
  }


</style>