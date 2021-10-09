<template>
   <div class="main">
       <div class="title-container">
           <h2 class="title">Authorization</h2>
           <div class="level">2/3</div>
       </div>
       <div class="btns">
       <div @click="$emit('next')" class="button">
           <div class="mainly">
               <div class="icon">
                    <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6266 4.31708H13V0.183083C12.5905 0.12675 11.1823 0 9.54229 0C6.12032 0 3.77619 2.15258 3.77619 6.10892V9.75H0V14.3715H3.77619V26H8.40597V14.3726H12.0294L12.6046 9.75108H8.40488V6.56717C8.40597 5.23142 8.7656 4.31708 10.6266 4.31708Z" fill="white"/>
                    </svg>
               </div>
               <div class="btn-title">Facebook Account</div>
           </div>
            <svg class="arrow" width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 6H1M19.6667 1L25 6L19.6667 1ZM25 6L19.6667 11L25 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

       </div>

        <div @click="$emit('next')" class="button">
           <div class="mainly">
               <div class="icon">
                    <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3575 1.08341C27.5521 0.458898 27.3575 0 26.4311 0H23.3679C22.5891 0 22.23 0.39642 22.0352 0.833557C22.0352 0.833557 20.4775 4.48693 18.2707 6.86004C17.5568 7.54698 17.2322 7.76555 16.8428 7.76555C16.6481 7.76555 16.3663 7.54698 16.3663 6.92252V1.08342C16.3663 0.333996 16.1402 0 15.4911 0H10.6775C10.1908 0 9.89804 0.347824 9.89804 0.677468C9.89804 1.3879 11.0014 1.55174 11.1151 3.55019V7.8905C11.1151 8.8421 10.9365 9.01463 10.547 9.01463C9.5086 9.01463 6.98258 5.34493 5.48442 1.14584C5.19082 0.329685 4.89634 0 4.11346 0H1.05025C0.17505 0 0 0.39642 0 0.833557C0 1.61421 1.0385 5.48616 4.83541 10.6071C7.36667 14.1043 10.933 16 14.1783 16C16.1254 16 16.3663 15.5789 16.3663 14.8537V12.2105C16.3663 11.3684 16.5508 11.2004 17.1674 11.2004C17.6217 11.2004 18.4006 11.4189 20.2179 13.1051C22.2949 15.1035 22.6373 16 23.8055 16H26.8687C27.7439 16 28.1816 15.5789 27.9291 14.748C27.6529 13.9199 26.6612 12.7183 25.3454 11.294C24.6314 10.4822 23.5605 9.60791 23.236 9.17067C22.7816 8.60869 22.9115 8.35883 23.236 7.85927C23.236 7.85927 26.9681 2.80077 27.3575 1.08341Z" fill="white"/>
                    </svg>
               </div>
               <div class="btn-title">VKontakte Account</div>
           </div>
            <svg class="arrow" width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 6H1M19.6667 1L25 6L19.6667 1ZM25 6L19.6667 11L25 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

       </div>

       </div>
       <div @click="$router.push('/login')" class="cancel">
           <span>Cancel</span>
       </div>
   </div>
</template>

<style lang="scss" scoped>
.main{
    padding: 29px 42px;
    .cancel{
        width: 185.85px;
        height: 57px;
        left: 867px;
        top: 629px;

        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family:  Adineue-PRO-Cyr-BoldWeb;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 75px;
        /* identical to box height, or 417% */

        text-align: center;
        color: #fff;
        margin: 54px auto 33px auto;
        cursor: pointer;
    }
    .btns{
        margin: 60px 0 0 0 ;
    }
    .button{
        margin-top: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 34px;
        cursor: pointer;
        background: linear-gradient(180deg, rgba(14, 207, 252, 0.33) 0%, rgba(33, 212, 253, 0.06) 100%);
        border: 1px solid #21D4FD;
        box-sizing: border-box;
        border-radius: 9px;
        width: 100%;
        height: 102px;
        .mainly{
            display: flex;
            align-items: center;
            gap: 30px;
            .icon{
                width: 55px;
                height: 55px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(245, 245, 245, 0.3);   
            }
            .btn-title{
                font-family: Adineue-PRO-Cyr-BoldWeb;
                font-weight: bold;
                font-size: 30px;
                // line-height: 55px;
                /* or 183% */
                color: #FFFFFF;
            }
            @media (max-width:580px) {
                .btn-title{
                    font-size: 15px;
                }
            }
        }

    }
    .title-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            font-family: Adineue-PRO-Cyr-BoldWeb;
            font-weight: bold;
            font-size: 32px;
            line-height: 55px;
            /* or 172% */
            color: #FFFFFF;
        }
        .level{
            font-family:  Adineue-PRO-Cyr-BoldWeb;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 55px;
            /* or 172% */


            color: #FFFFFF;

            opacity: 0.6;
        }
    }
}
</style>