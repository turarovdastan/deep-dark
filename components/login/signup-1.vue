<template>
   <div class="main">
       <div class="title-container">
           <h2 class="title">Authorization</h2>
           <div class="level">1/3</div>
       </div>
       <div class="btns">
       <div @click="$emit('next')" class="button">
           <div class="mainly">
               <div class="icon">
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.07631 9.54323C9.43584 7.75473 11.5852 6.59766 14 6.59766C15.9865 6.59766 17.8543 7.37127 19.2591 8.77602L19.8391 9.35604L24.4795 4.7157L23.8995 4.13568C21.2552 1.49143 17.7395 0.0351562 14 0.0351562C10.2604 0.0351562 6.74473 1.49143 4.10042 4.13563C3.8604 4.3757 3.63044 4.62311 3.41016 4.87702L8.07631 9.54323Z" fill="white"/>
                    <path d="M23.1581 24.6251C23.412 24.4048 23.6595 24.1748 23.8995 23.9348C26.5437 21.2905 28 17.7748 28 14.0353C28 13.1835 27.9229 12.3302 27.7708 11.499L27.6476 10.8264H13.1797V17.3889H20.6419C20.1258 18.4156 19.3876 19.2909 18.4982 19.9652L23.1581 24.6251Z" fill="white"/>
                    <path d="M17.0407 20.8279C16.106 21.2448 15.0748 21.4728 14 21.4728C11.5852 21.4728 9.43584 20.3157 8.07631 18.5272L3.41016 23.1934C3.63044 23.4473 3.8604 23.6948 4.10042 23.9348C6.74473 26.579 10.2604 28.0353 14 28.0353C16.8391 28.0353 19.5488 27.1951 21.8465 25.6337L17.0407 20.8279Z" fill="white"/>
                    <path d="M7.21126 17.0721C6.79459 16.1443 6.5625 15.1164 6.5625 14.0352C6.5625 12.9541 6.79459 11.9261 7.21126 10.9984L2.4016 6.18872C0.840164 8.48642 0 11.1961 0 14.0352C0 16.8744 0.840164 19.584 2.4016 21.8817L7.21126 17.0721Z" fill="white"/>
                    </svg>
               </div>
               <div class="btn-title">Google Account</div>
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