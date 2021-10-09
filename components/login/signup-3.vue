<template>
   <div class="main">
       <div class="title-container">
           <h2 class="title">Authorization</h2>
           <div class="level">3/3</div>
       </div>

        <form>
            <div class="inp">
                <label for="number">Enter your Phone number</label>
                <input type="text" id="number">
            </div>
            <div class="inp" :class="{'disable':!isdisable}">
                <label for="code">Enter code</label>
                <input :disabled="!isdisable" type="text" id="code">
            </div>
        </form>

    <div  class="btns">
        <div v-if="!isdisable" @click="isdisable=true" class="get">
            <span >Get the code</span>
        </div>
          <div  v-else @click="$emit('next')" class="get">
             <span>Enter</span>
        </div>
       <div @click="$router.push('/login')" class="cancel">
           <span>Cancel</span>
       </div>
       </div>
   </div>
</template>


<script>
export default {
    data:()=>({
        isdisable:false
    }),
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.main{
    padding: 29px 42px;
    form{
        display: grid;
        grid-template-columns: 70% 30%;
        grid-gap: 25px;
    }
    @media (max-width:625px) {
        form{
            grid-template-columns: 1fr;
        }
    }
    .inp{
        display: flex;
        flex-direction: column;
        label{
            font-family: LabGrotesque-Regular;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 55px;
            /* identical to box height, or 367% */


            color: #FFFFFF;
        }
        input{
            border: 1px solid #21D4FD;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 7px 25px;
            outline: none;
            background: transparent;
            height: 57px;
            font-family:  LabGrotesque-Regular;
            font-size: 16px;
            line-height: 35;
            color: #fff;
        }
    }
    .disable{
        input{
            border: 1px solid #ABABAB;
        }
        label{
            opacity: .4;
        }
    }
    .btns{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:22px;
        margin: 67px 0 69px 0;
    }
    .get{
        width: 185.85px;
        height: 57px;
        background: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
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
        cursor: pointer;
    }
    .cancel{
        width: 185.85px;
        height: 57px;

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
        cursor: pointer;
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