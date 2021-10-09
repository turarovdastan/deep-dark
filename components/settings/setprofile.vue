<template>
    <div class="modal-cnt">
        <div class="modal-tit">Settings profile</div>
        <div class="input">
            <div class="label">Your Name</div>
            <input type="text">
        </div>
        <div class="input">
            <div class="label">City</div>
            <input type="text">
        </div>
        <div class="input">
            <div class="label">Phone number</div>
            <input type="text">
        </div>
         <div class="input">
            <div class="label">Email</div>
            <input type="text">
        </div>
         <div class="input">
            <div class="label">Wallet Foil</div>
            <div class="inp">
                <input type="text" value="x35dgergwet23rerwertwery42345">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1156 1.04487C18.4313 0.717978 18.809 0.45724 19.2266 0.277867C19.6441 0.0984936 20.0933 0.00407823 20.5477 0.000129225C21.0021 -0.00381978 21.4528 0.082777 21.8734 0.254867C22.2941 0.426956 22.6762 0.681092 22.9976 1.00245C23.3189 1.3238 23.573 1.70593 23.7451 2.12656C23.9172 2.54718 24.0038 2.99786 23.9999 3.4523C23.9959 3.90675 23.9015 4.35586 23.7221 4.77342C23.5428 5.19099 23.282 5.56865 22.9551 5.88437L21.5981 7.24142L16.7586 2.40191L18.1156 1.04487ZM14.3388 4.82167L0 19.1605V24H4.8395L19.18 9.66117L14.3371 4.82167H14.3388Z" fill="black"/>
                <path d="M18.1156 1.04487C18.4313 0.717978 18.809 0.45724 19.2266 0.277867C19.6441 0.0984936 20.0933 0.00407823 20.5477 0.000129225C21.0021 -0.00381978 21.4528 0.082777 21.8734 0.254867C22.2941 0.426956 22.6762 0.681092 22.9976 1.00245C23.3189 1.3238 23.573 1.70593 23.7451 2.12656C23.9172 2.54718 24.0038 2.99786 23.9999 3.4523C23.9959 3.90675 23.9015 4.35586 23.7221 4.77342C23.5428 5.19099 23.282 5.56865 22.9551 5.88437L21.5981 7.24142L16.7586 2.40191L18.1156 1.04487ZM14.3388 4.82167L0 19.1605V24H4.8395L19.18 9.66117L14.3371 4.82167H14.3388Z" fill="url(#paint0_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="-1.74629e-06" y1="29.9474" x2="23.7515" y2="26.1781" gradientUnits="userSpaceOnUse">
                <stop offset="0.209851" stop-color="#21D4FD"/>
                <stop offset="1" stop-color="#21D4FD"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
        </div>

        <div class="groups">
            <div class="item">
                <div class="label">Google</div>
                <div class="value">
                    <span>Nickname</span>
                </div>
            </div>
            <div class="item">
                <div class="label">VKontakte</div>
                <div class="value">
                    <span>@nickname</span>
                </div>
            </div>
             <div class="item">
                <div class="label">Facebook</div>
                <div class="value">
                    <span>Nickname</span>
                </div>
            </div>
            <div class="item ">
                <div class="label">Linkedin</div>
                <div class="value active">
                    <span>Joined</span>
                </div>
            </div>
        </div>
          

        <div class="btns">
            <div  @click="$store.dispatch('modal/setModal','success')" class="btn-send">
                <span>Send</span>
            </div>
            <div @click="$store.dispatch('modal/setModal','support')" class="btn-support">
                <span>Support</span>
            </div>
            <div @click="$store.dispatch('modal/setModal',false)" class="btn-canel">
                <span>Cancel</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        
        // this.$emit('height',900)
        let w = window.matchMedia("(max-width: 600px)").matches
        if(w){
            this.$emit('height',1100)
        }
        else{
          
          this.$emit('height',900)
        }

        let w1 = window.matchMedia("(max-width: 585px)").matches
        if(w1){
            this.$emit('height',1190)
        }

        
    }
}
</script>

<style lang="scss" scoped>
.modal-cnt{
    width: 100%;
    min-height: 140%;
    text-align: left;
    .modal-tit{
        font-family:Adineue-PRO-Cyr-BoldWeb;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 55px;
        /* or 172% */
        color: #FFFFFF;
    }
    .groups{
        display: flex;
        gap: 7px;
        margin: 20px 0 30px 0;
        padding: 0 0 30px 0;
        border-bottom: 1px solid rgba(33, 212, 253, 1);
        .item{
            .value{
                width: 140px;
                height: 57px;
                display: flex;
                align-items: center;
                justify-content: center;

                background: #01333F;
                border-radius: 8px;
                font-family:  Adineue-PRO-Cyr-BoldWeb;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 32px;
                /* identical to box height, or 200% */


                color: #FFFFFF;
            }
            @media (max-width:585px) {
                .value{
                    width: 100%;
                }
            }
            .label{
                font-family: LabGrotesque-Regular;
                font-size: 15px;
                line-height: 55px;
                /* identical to box height, or 367% */


                color: #FFFFFF;
            }

            .active{
            border: 1px solid #21D4FD;
            color: rgba(33, 212, 253, 1);
        }
        }

        
    }

    @media (max-width:924px) {
        .groups{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px;
        }
    }
    
    .input{
        width: 100%;
        .label{
            font-family:LabGrotesque-Regular;
            font-size: 15px;
            line-height: 55px;
            /* identical to box height, or 367% */
            color: #FFFFFF;
            font-weight: normal;
        }
        input{
            border: 1px solid #21D4FD;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 11px 28px;
            outline: none;
            background: transparent;
            width: 100%;
            color: #fff;
            font-weight: bold;
            font-family:LabGrotesque-Regular;
            font-size: 16px;
        }
        textarea{
            border: 1px solid #21D4FD;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 11px 28px;
            outline: none;
            height: 208px;
            background: transparent;
            width: 100%;
            color: #fff;
            font-weight: bold;
            font-family:LabGrotesque-Regular;
            font-size: 16px;
        }
    }
    .inp{
        border: 1px solid #21D4FD;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 11px 28px;
        outline: none;
        background: transparent;
        width: 100%;
        color: #fff;
        font-weight: bold;
        font-family:LabGrotesque-Regular;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >input{
            border: none;
            padding: 0;
        }
    }
    .btns{
        display: flex;
        gap: 12px;
        margin-top: 29px;
        .btn-support{
            cursor: pointer;
            height: 57px;
            border-radius: 10px;
            // border-image-slice: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 10px solid;
            border-width: 5px;
            border-image: linear-gradient(to left, rgba(228, 14, 208, 1), rgba(33, 212, 253, 1)) 1;
             span{
                font-family: Adineue-PRO-Cyr-BoldWeb;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 75px;
                /* identical to box height, or 417% */

                text-align: center;

                color: #FFFFFF;

            }
        }
        .btn-send{
            cursor: pointer;
            height: 57px;
            background: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                font-family: Adineue-PRO-Cyr-BoldWeb;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 75px;
                /* identical to box height, or 417% */

                text-align: center;

                color: #FFFFFF;

            }
        }
        .btn-canel{
            cursor: pointer;
            height: 57px;
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            span{
                font-family: Adineue-PRO-Cyr-BoldWeb;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 75px;
                /* identical to box height, or 417% */

                text-align: center;

                color: #FFFFFF;

            }
        }
        >div{
            width: 185.85px;
        }
    }
    @media (max-width:585px) {
        .btns {
            flex-direction: column;
           
        }
        .btns>div{
            width: 100%;
        }
    }
}

</style>