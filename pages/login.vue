<template>
  <div id="sign-in-cont">
    <menu_main />
    <div class="content">
      <h1 class="content-title">
        Bounty Hunt & Airdrop
      </h1>

      <div class="content-form">
        <div class="form-title">Enter to account</div>

        <div class="input">
          <label for="name">Enter your E-mail</label>
          <input type="text" id="name">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password">
        </div>

        <div class="btns">
          <button class="btn btn-gradient"><span>Enter</span></button>
          <button class="btn btn-support"><span>Support</span></button>
          <button class="btn btn-off"><span>Remind me of my password</span></button>
        </div>
      </div>

      <div class="or">
        <div class="or-text">or</div>
        <svg width="580" height="1" viewBox="0 0 580 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4.37114e-08" y1="0.5" x2="580" y2="0.500051" stroke="url(#paint0_radial)"/>
        <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(290 0.997032) rotate(-179.51) scale(292.011 169366)">
        <stop stop-color="#64E2FF"/>
        <stop offset="0.953125" stop-color="#64E2FF" stop-opacity="0"/>
        </radialGradient>
        </defs>
        </svg>
        <div class="or-text or-2">Enter from social: </div>
        <div class="icons">
          <div class="icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.07631 9.50808C9.43584 7.71958 11.5852 6.5625 14 6.5625C15.9865 6.5625 17.8543 7.33611 19.2591 8.74087L19.8391 9.32088L24.4795 4.68054L23.8995 4.10052C21.2552 1.45627 17.7395 0 14 0C10.2604 0 6.74473 1.45627 4.10042 4.10047C3.8604 4.34055 3.63044 4.58795 3.41016 4.84187L8.07631 9.50808Z" fill="white"/>
            <path d="M23.1581 24.5898C23.412 24.3696 23.6595 24.1396 23.8995 23.8996C26.5437 21.2553 28 17.7396 28 14C28 13.1483 27.9229 12.2949 27.7708 11.4638L27.6476 10.7912H13.1797V17.3537H20.6419C20.1258 18.3803 19.3876 19.2557 18.4982 19.93L23.1581 24.5898Z" fill="white"/>
            <path d="M17.0407 20.7928C16.106 21.2097 15.0748 21.4376 14 21.4376C11.5852 21.4376 9.43584 20.2806 8.07631 18.4921L3.41016 23.1582C3.63044 23.4121 3.8604 23.6596 4.10042 23.8996C6.74473 26.5439 10.2604 28.0001 14 28.0001C16.8391 28.0001 19.5488 27.16 21.8465 25.5985L17.0407 20.7928Z" fill="white"/>
            <path d="M7.21126 17.0369C6.79459 16.1092 6.5625 15.0812 6.5625 14.0001C6.5625 12.9189 6.79459 11.891 7.21126 10.9632L2.4016 6.15356C0.840164 8.45126 0 11.1609 0 14.0001C0 16.8392 0.840164 19.5489 2.4016 21.8466L7.21126 17.0369Z" fill="white"/>
            </svg>
          </div>
          <div class="icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M11.9862 17.7112L11.523 24.2259C12.1857 24.2259 12.4727 23.9412 12.8169 23.5994L15.9237 20.6302L22.3614 25.3447C23.542 26.0027 24.3739 25.6562 24.6924 24.2585L28.918 4.45786L28.9192 4.45669C29.2937 2.71136 28.288 2.02886 27.1377 2.45703L2.29939 11.9665C0.604219 12.6245 0.629886 13.5695 2.01122 13.9977L8.36138 15.9729L23.1115 6.74336C23.8057 6.28369 24.4369 6.53803 23.9177 6.99769L11.9862 17.7112Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="28" height="28" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </div>
          <div class="icon">
            <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6266 4.31708H13V0.183083C12.5905 0.12675 11.1823 0 9.54229 0C6.12032 0 3.77619 2.15258 3.77619 6.10892V9.75H0V14.3715H3.77619V26H8.40597V14.3726H12.0294L12.6046 9.75108H8.40488V6.56717C8.40597 5.23142 8.7656 4.31708 10.6266 4.31708Z" fill="white"/>
            </svg>

          </div>
            <div class="icon">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.9934 26V25.9989H25.9999V16.4634C25.9999 11.7986 24.9956 8.20514 19.5421 8.20514C16.9205 8.20514 15.1611 9.64381 14.4429 11.0077H14.367V8.64064H9.19629V25.9989H14.5805V17.4037C14.5805 15.1406 15.0095 12.9523 17.812 12.9523C20.5735 12.9523 20.6146 15.535 20.6146 17.5489V26H25.9934Z" fill="white"/>
                <path d="M0.429199 8.64172H5.81987V26H0.429199V8.64172Z" fill="white"/>
                <path d="M3.12217 0C1.39858 0 0 1.39858 0 3.12217C0 4.84575 1.39858 6.27358 3.12217 6.27358C4.84575 6.27358 6.24433 4.84575 6.24433 3.12217C6.24325 1.39858 4.84467 0 3.12217 0V0Z" fill="white"/>
                </svg>

          </div>
        </div>
      </div>
    </div>
    <!-- modal sign up -->
      <signuptmp v-if="check">
        <signup1 v-if="current===0" @next="current+=1"/>
        <signup2 v-if="current===1" @next="current+=1" />
        <signup3 v-if="current===2" @next="current+=1" />
        <success v-if="current===3" />
      </signuptmp>
    <!-- end modal -->
  </div>
</template>

<script>
import menu_main from "@/components/blocks/menu_main";
import signuptmp from '@/components/login/signuptmp'
import signup1 from '@/components/login/signup-1'
import signup2 from '@/components/login/signup-2'
import signup3 from '@/components/login/signup-3'
import success from '@/components/login/success'

export default {
  name: "SignIn",
  layout:'empty',
  data:()=>({
    current:0
  }),
  computed:{
    check(){
      return this.$route.hash
    }
  },
  components: {
    menu_main,
    signuptmp,
    signup1,
    signup2,
    signup3,
    success
  }
}
</script>

<style lang="scss" scoped>
@mixin font-face($font-face-family, $font-face-filename, $font-face-weight : normal, $font-face-style :normal) {
  @font-face {
    font-family: '#{$font-face-family}';
    src: url(('#{$font-face-filename}.eot'));
    src: url(('#{$font-face-filename}.eot?#iefix')) format('embedded-opentype'),
    url(('#{$font-face-filename}.woff')) format('woff'),
    url(('#{$font-face-filename}.ttf')) format('truetype');
    font-weight: $font-face-weight;
    font-style: $font-face-style;
  }
}
@include font-face(Axiforma-Regular, "assets/fonts/Axiforma-Regular/Axiforma-Regular");
@include font-face(Adineue-PRO-Cyr-BoldWeb, "assets/fonts/adineuePROCyr/adineuePROCyr-BoldWeb");
@include font-face(LabGrotesque-Regular, "assets/fonts/LabGrotesque-Regular/LabGrotesque-Regular");

#sign-in-cont {
  background: url("../assets/backgroungs/signin_back.png") no-repeat top;
  background-size: 100% 100%;
  padding-bottom: 10%;
  min-height: 120vh;
  background-attachment: fixed;
}

.content{
  width: 100%;
  padding: 68px 0 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 70px;
  .or{
    &-text{
        font-size: 18px;
        line-height: 26px;
        /* identical to box height */
        color: #FFFFFF;
        font-family:Axiforma-Regular ;
        text-align: center;
    }
    .or-2{
      margin-top: 10px;
    }

    .icons{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 26px;
      margin-top: 21px;
      .icon{
        cursor: pointer;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon:nth-child(1){
        background:#BA0E61 ;
      }
      .icon:nth-child(2){
        background:#0BB2D9 ;
      }
      .icon:nth-child(3){
        background:#1F60C1 ;
      }
      .icon:nth-child(4){
        background:#2085BE ;
      }
    }
  }
  &-title{
    font-size: 72px;
    background: -webkit-linear-gradient(#21D4FD, #E40ECF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Adineue-PRO-Cyr-BoldWeb;
    text-align: center;
  }
  @media (max-width:550px) {
    &-title{
    font-size: 49px;
    }
  }


  &-form{
    width: 660px;
    min-height: 438px;
    background: linear-gradient(180deg, rgba(14, 207, 252, 0.33) 0%, rgba(33, 212, 253, 0.06) 100%);
    border: 1px solid #257B8E;
    box-sizing: border-box;
    padding: 29px 42px;
    .btns{
      margin-top: 37px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 12px;
      .btn{
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 57px;
        outline: none;
        cursor: pointer;
      }
      .btn-gradient{
        background: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
        border: none;
        font-weight: bold;
        font-size: 18px;
        font-family: Adineue-PRO-Cyr-BoldWeb;
        color: #fff;

      }
      .btn-support{
         border: 1px solid #E40ECF;
         background: transparent;
        font-weight: bold;
        font-size: 18px;
        line-height: 75px;
        font-family: Adineue-PRO-Cyr-BoldWeb;
        background: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
            
        // border-image-slice: 1;
        // border-width: 2px;
        // border-radius: 8px;
        // border-image-source: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
        
      }
      .btn-off{
        opacity: 0.3;
        border: 1px solid #FFFFFF;
        font-size: 14px;
        line-height: 15px;
        color: #fff;
        font-family: LabGrotesque-Regular;
        background: transparent;
      }

     
    }
       @media (max-width:530px) {
        .btns{
          grid-template-columns: 1fr;
          .btn-off{
        border:none;
      }
        }
        }
   
    .form-title{
      font-weight: bold;
      font-size: 32px;
      line-height: 55px;
      font-family: Adineue-PRO-Cyr-BoldWeb;
      color: #fff;
    }
    .input{
      display: flex;
      flex-direction: column;
      label{
        font-size: 15px;
        line-height: 55px;
        font-family: LabGrotesque-Regular;
        color: #fff;
      }
      input{
        border: 1px solid #21D4FD;
        height: 57px;
        width: 100%;
        border-radius: 8px;
        background: transparent;
        padding: 11px 28px;
        outline: none;
        color: #fff;
        font-size: 16px;
        line-height: 32px;
        /* identical to box height, or 200% */
        font-family: Adineue-PRO-Cyr-BoldWeb;
      }
      ::placeholder{
        font-size: 16px;
        line-height: 32px;
        /* identical to box height, or 200% */
        font-family: Adineue-PRO-Cyr-BoldWeb;
        color: #FFFFFF;
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        font-size: 16px;
        line-height: 32px;
        /* identical to box height, or 200% */
        font-family: Adineue-PRO-Cyr-BoldWeb;
        color: #FFFFFF;
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        font-size: 16px;
        line-height: 32px;
        /* identical to box height, or 200% */
        font-family: Adineue-PRO-Cyr-BoldWeb;
        color: #FFFFFF;
      }
      &:nth-child(1){
        margin-top: 30px;
      }
    }

  }

   @media (max-width:760px) {
      &-form{
        width: 90%;
      }
    }
}
</style>