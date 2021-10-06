<template>
    <div class="main-container">
         <header>
            <menu_main />
        </header>

        <div class="content-wrapper">
            <h1 class="content-title">User Dashboard</h1>


            <div class="dashboard">
                <div class="flex">
                    <div class="card">
                        <div class="card-header">Balance</div>
                        <div class="card-body-1">
                            <img src="@/assets/icons/logo.svg" alt="">
                            <div class="card-body-title">0.22045</div>
                            <span>FOIL</span>
                        </div>
                        <div class="card-body-2">
                            <h3 class="card-body-2-title">FOIL Wallet:</h3>
                            <div class="input">
                                <input value="x35dgergwet23rerwertwery42345" type="text">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.586 0.610576C10.7705 0.419556 10.9912 0.267191 11.2352 0.162373C11.4792 0.0575555 11.7416 0.00238315 12.0072 7.55134e-05C12.2728 -0.00223212 12.5361 0.0483713 12.7819 0.148933C13.0277 0.249495 13.251 0.398001 13.4388 0.585786C13.6266 0.773572 13.7751 0.996876 13.8756 1.24267C13.9762 1.48846 14.0268 1.75182 14.0245 2.01738C14.0222 2.28294 13.967 2.54538 13.8622 2.78939C13.7574 3.03339 13.605 3.25408 13.414 3.43858L12.621 4.23158L9.793 1.40358L10.586 0.610576ZM8.379 2.81758L0 11.1966V14.0246H2.828L11.208 5.64558L8.378 2.81758H8.379Z" fill="black"/>
                                <path d="M10.586 0.610576C10.7705 0.419556 10.9912 0.267191 11.2352 0.162373C11.4792 0.0575555 11.7416 0.00238315 12.0072 7.55134e-05C12.2728 -0.00223212 12.5361 0.0483713 12.7819 0.148933C13.0277 0.249495 13.251 0.398001 13.4388 0.585786C13.6266 0.773572 13.7751 0.996876 13.8756 1.24267C13.9762 1.48846 14.0268 1.75182 14.0245 2.01738C14.0222 2.28294 13.967 2.54538 13.8622 2.78939C13.7574 3.03339 13.605 3.25408 13.414 3.43858L12.621 4.23158L9.793 1.40358L10.586 0.610576ZM8.379 2.81758L0 11.1966V14.0246H2.828L11.208 5.64558L8.378 2.81758H8.379Z" fill="url(#paint0_linear)"/>
                                <defs>
                                <linearGradient id="paint0_linear" x1="-1.02046e-06" y1="17.5" x2="13.8794" y2="15.2974" gradientUnits="userSpaceOnUse">
                                <stop offset="0.209851" stop-color="#21D4FD"/>
                                <stop offset="1" stop-color="#E40ECF"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>

                            <button class="btn-card">
                                <span>Wthdraw</span>
                            </button>

                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">Information</div>
                        <div class="card-body-3">
                            <div class="card-content-3">
                                <h3 style="font-size: 27px;line-height: 38px;" class="card-body-title">Actuail Airdrop titile </h3>
                                <div style="display:flex;align-items:center;justify-content:space-between;" class="flex">
                                <span style="width:70%">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>    
                                <div class="circle">
                                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.24476 0.205207C8.3854 0.0738132 8.57614 0 8.77501 0C8.97389 0 9.16462 0.0738132 9.30527 0.205207L12.3053 3.00871C12.4459 3.14015 12.5249 3.31838 12.5249 3.50423C12.5249 3.69008 12.4459 3.86832 12.3053 3.99975L9.30527 6.80326C9.16382 6.93093 8.97436 7.00157 8.77771 6.99997C8.58106 6.99838 8.39295 6.92467 8.25389 6.79472C8.11483 6.66477 8.03596 6.48898 8.03425 6.30521C8.03254 6.12145 8.10814 5.9444 8.24476 5.81222L9.96453 4.20511L1.27491 4.20511C1.076 4.20511 0.885229 4.13127 0.744575 3.99983C0.603921 3.86839 0.524902 3.69012 0.524902 3.50423C0.524902 3.31835 0.603921 3.14008 0.744575 3.00864C0.885229 2.8772 1.076 2.80336 1.27491 2.80336L9.96453 2.80336L8.24476 1.19625C8.10415 1.06481 8.02516 0.886574 8.02516 0.700727C8.02516 0.514879 8.10415 0.336641 8.24476 0.205207Z" fill="white"/>
                                    </svg>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">Total tokens received</div>
                         <div style="border:none;" class="card-body-1">
                            <img src="@/assets/icons/logo.svg" alt="">
                            <div class="card-body-title">0.22045</div>
                            <span>FOIL</span>
                        </div>
                        <div class="chart-settings">
                            <span>Chart</span>
                            <div class="btns">
                                <button class="btn"><span>Year</span></button>
                                <button class="btn active"><span>Month</span></button>
                                <button class="btn"><span>Day</span></button>
                            </div>
                        </div>
                        <div  class="img">
                            <img src="@/assets/chart.png" alt="">
                        </div>
                        
                    </div>
                </div>
                <div class="flex">
                    <div class="card">
                        <div class="card-header">Transactions</div>
                        <div class="table">
                            <div class="th">
                                <div class="table-desc">Type</div>
                                <div class="table-desc">Date</div>
                                <div class="table-desc last">Amount</div>
                            </div>
                            <div class="tb">
                                <div class="type">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>
                            <div class="tb">
                                <div class="type">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>
                            <div class="tb">
                                <div class="type">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>
                            <div class="tb">
                                <div class="type">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>
                            <div class="tb">
                                <div class="type">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>    
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">Airdrops history</div>
                        <div class="table">
                            <div class="th">
                                <div class="table-desc">Type</div>
                                <div class="table-desc">Date</div>
                                <div class="table-desc last">Amount</div>
                            </div>
                            <div class="tb">
                                <div class="type-grd">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>
                            <div class="tb">
                                <div class="type-grd">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>
                            <div class="tb">
                                <div class="type-grd">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>
                            <div class="tb">
                                <div class="type-grd">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>
                            <div class="tb">
                                <div class="type-grd">Getting a token</div>
                                <div class="date">10.06.2021</div>
                                <div class="amount">1.04 FOIL</div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>


            <div class="follow">
                <h2 class="follow-title">Follow on social network</h2>
                <div class="cards">
                    <card :active="true"/>
                    <card />
                    <card :active="true"/>
                    <card/>
                    <card :active="true"/>
                    <card :active="true"/>
                    <card/>
                    <card :active="true"/>
                    <card />
                    <card :active="true"/>
                    <card/>
                </div>
            </div>



        </div>

        
    </div>
</template>


<script>

import menu_main from "@/components/blocks/menu_main";
import card from '@/components/card'


export default {
  name: "Dasboard",
  components: {
    menu_main,
    card
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


.follow{
    width: 100%;
    margin-top: 137px;
    &-title{
        font-family: Adineue-PRO-Cyr-BoldWeb;
        font-weight: bold;
        font-size: 37px;
        line-height: 78px;
        /* identical to box height, or 211% */


        color: #FFFFFF;
    }
    .cards{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 57px;
        grid-row-gap: 11px;
        margin-top:30px;
        }

    @media (max-width:1250px) {
        .cards{
            grid-template-columns: 1fr 1fr;
        }
    }
      @media (max-width:820px) {
        .cards{
            grid-template-columns: 1fr;
        }
    }
}
@media (max-width:820px) {
        .follow{
            margin-top: 25px;
        }
    }
.main-container{
  background:  url("../assets/backgroungs/lk.png") no-repeat top,url("../assets/backgroungs/lk-left.png") no-repeat left top,url("../assets/backgroungs/lk-right.png") no-repeat right top,#0A0914;
  background-size: 100% 100%;
  padding-bottom: 10%;
  min-height: 120vh;
  background-size: 100% 100%,10%,10%;
  .content-wrapper{
      width: 80%;
      margin: 0 auto;
      padding: 50px 0;
        .content-title{
            font-family: Adineue-PRO-Cyr-BoldWeb;
            font-weight: bold;
            font-size: 49px;
            line-height: 78px;
            font-size: 72px;
            background: linear-gradient(to right,#E40ECF , #21D4FD );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        @media (max-width:550px) {
           .content-title{
            font-size: 49px;
            }
        }
  }
  @media (max-width:1440px) {
      .content-wrapper{
          width: 90%;
      }
  }

  .dashboard{
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
      margin-top: 54px;
      .flex{
          display: flex;
          gap: 24px;
          width: 100%;
          justify-content: space-between;
      }
       @media (max-width:1250px) {
           >.flex{
           flex-direction: column;
            }
        }
      .card{
          width: 100%;
          min-height: 346px;
          background: #141927;
          border-radius: 5px;
          .table{
              width: 100%;
              >div{
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr;
                  padding: 14px 0;
              }
              >div:nth-child(1){
                  border-bottom: 1px solid #2C3243;
                  padding: 20px 0;
              }
              .table-desc{
                  padding: 0 20px;
                  font-family: LabGrotesque-Regular;
                font-size: 18px;
                line-height: 22px;
                /* identical to box height */
                color: #3F465C;
              }
              .last{
                  text-align: right;
              }
              .th{
                  width: 100%;
              }
              .tb{
                  width: 100%;
                  >div{
                  padding: 0 20px;
                  }
                  
                  .type {
                    font-family:  LabGrotesque-Regular;
                    font-size: 15px;
                    line-height: 18px;
                    /* identical to box height */
                    color: #21D4FD;
                  }
                  .type:nth-child(2n){
                    color: #E40ECF;
                  }
                  .type-grd{
                     background: linear-gradient(to left,#E40ECF , #21D4FD );
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-family:  LabGrotesque-Regular;
                    font-size: 15px;
                    line-height: 18px;
                  }
                  
                  .date{
                      font-family: LabGrotesque-Regular;
                        font-size: 15px;
                        line-height: 18px;
                        /* identical to box height */
                        color: #FFFFFF;
                  }
                  .amount{
                      background: linear-gradient(to left,#E40ECF , #21D4FD );
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-family: Adineue-PRO-Cyr-BoldWeb;
                        font-weight: bold;
                        font-size: 15px;
                        line-height: 18px;
                        /* identical to box height */

                        text-align: right;
                  }
              }
          }
          .img{
              margin-left: 25px;
              img{
                  width: 95%;
                  margin: 0 auto;
              }
          }
          .chart-settings{
              width: 90%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 0 auto;
              >span{
                    font-family:LabGrotesque-Regular;
                    font-size: 16px;
                    color: #FFFFFF;
                    line-height: 55px;
              }
              .btns{
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr;
                  grid-gap: 8px;
                  .btn{
                      height: 29px;
                      min-width:62px;
                      background: #0C111D;
                        border: 1px solid #2C3243;
                        box-sizing: border-box;
                        border-radius: 6px;
                        span{
                            font-family:LabGrotesque-Regular;
                            font-size: 12px;
                            /* or 458% */


                            color: #FFFFFF;
                        }
                  }
                  .active{
                      background: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
                  }
              }
          }
          .card-header{
              border-radius: 8px 8px 0 0 ;
              background: #1B202F;
              width: 100%;
              height: 55px;
              padding: 4px 24px;
              font-family: Adineue-PRO-Cyr-BoldWeb;
                font-weight: bold;
                font-size: 18px;
                line-height: 55px;
                /* or 306% */
                color: #FFFFFF;
          }
          .card-body-title{
            font-family: Adineue-PRO-Cyr-BoldWeb;
            font-weight: bold;
            font-size: 49px;
            line-height: 78px;
            font-size: 72px;
            background: linear-gradient(to left,#E40ECF , #21D4FD );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
          @media (max-width:1250px) {
            .card-body-title{
            font-size: 49px;
            }
        }
     
        .card-body-1{
            width: 100%;
            display: flex;
            margin: 0 auto;
            gap: 10px;
            border-bottom:  1px solid #2C3243;
            padding: 0 5%;
                span{
                font-family:Adineue-PRO-Cyr-BoldWeb;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 78px;
                /* identical to box height, or 709% */

                margin-top: 20px;
                color: #fff;
                }
        }
        .card-body-2{
            padding: 24px;
            .input{
                width: 100%;
                background: #0C111D;
                border: 1px solid #2C3243;
                box-sizing: border-box;
                border-radius: 6px;
                height: 41px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                padding: 2px 13px;
                input{
                    width: 90%;
                    height: 100%;
                    background: transparent;
                    border: none;
                    outline: none;
                    font-family: LabGrotesque-Regular;
                    font-size: 15px;
                    line-height: 55px;
                    /* or 367% */


                    color: #FFFFFF;
                    opacity: 0.3;
                }
                ::placeholder{
                    font-family: LabGrotesque-Regular;
                    font-size: 15px;
                    line-height: 55px;
                    /* or 367% */


                    color: #FFFFFF;
                    opacity: 0.3;
                }
            }
            .btn-card{
                width: 141px;
                height: 45px;
                margin-top: 20px;
                background: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
                border-radius: 6px;
                font-family: Adineue-PRO-Cyr-BoldWeb;
                font-style: normal;
                font-weight: bold;
                font-size: 15px;
                /* identical to box height, or 500% */
                color: #FFFFFF;
            }
            .card-body-2-title{
            font-family:LabGrotesque-Regular;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 55px;
            /* or 344% */


            color: #FFFFFF;
        }
        }
        .card-body-3{
            background: url("@/assets/card-bg.png") no-repeat top;
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 85%;
            border-radius: 0 0 8px 8px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            .card-content-3{
                width: 100%;
                min-height: 129px;
                background: rgba(27, 32, 47, 0.72);
                backdrop-filter: blur(10px);
                /* Note: backdrop-filter has minimal browser support */

                border-radius: 5px ;
                padding: 14px 26px;

            }
            .flex{
                span{
                    font-family:Adineue-PRO-Cyr-BoldWeb;
                    color: #fff;
                    font-size: 13px;
                    line-height: 17px;
                }
                .circle{
                    width: 47px;
                    height: 47px;
                    opacity: 0.22;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        @media (max-width:1250px) {
           .card-body-3{
               min-height: 291px;
            }
        }
        @media (max-width:550px) {
           .content-title{
            font-size: 40px;
            line-height: 40px;
            }
        }
      }
  }
}
</style>