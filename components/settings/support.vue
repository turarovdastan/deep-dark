<template>
    <div class="modal-cnt">
        <div class="modal-tit">Support</div>
        <div class="input">
            <div class="label">Your Name</div>
            <input type="text">
        </div>
        <div class="input">
            <div class="label">Email</div>
            <input type="email">
        </div>
          <div class="input">
            <div class="label">Your message</div>
            <textarea></textarea>
        </div>

        <div class="btns">
            <div @click="$emit('success')" class="btn-send">
                <span>Send</span>
            </div>
            <div @click="$emit('close')" class="btn-canel">
                <span>Cancel</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$emit('height',700)
    }
}
</script>

<style lang="scss" scoped>
.modal-cnt{
    width: 100%;
    height: 140%;
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

    .btns{
        display: flex;
        gap: 12px;
        margin-top: 29px;
        .btn-send{
            cursor: pointer;
            width: 185.85px;
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
            width: 185.85px;
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
    }
}

</style>