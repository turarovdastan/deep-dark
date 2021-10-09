<template>
    <div class="mini-modal">
        <div @click="modal='settings'" class="none">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0123 10.9545L15.6022 11.1337C15.486 11.4915 15.3427 11.8365 15.1755 12.1642L16.0462 13.2855C16.3988 13.7393 16.3575 14.3797 15.9548 14.7697L14.7735 15.951C14.3798 16.3575 13.7392 16.398 13.2847 16.0462L12.165 15.1755C11.8372 15.3428 11.4923 15.486 11.1337 15.6023L10.9545 17.01C10.887 17.5747 10.4078 18 9.84 18H8.16C7.59225 18 7.113 17.5747 7.0455 17.0122L6.86625 15.6023C6.50775 15.486 6.16275 15.3435 5.835 15.1755L4.7145 16.0462C4.2615 16.398 3.621 16.3575 3.23025 15.9548L2.049 14.7743C1.6425 14.3797 1.60125 13.7392 1.95375 13.2847L2.8245 12.1642C2.6565 11.8365 2.514 11.4915 2.39775 11.1337L0.99 10.9545C0.42525 10.887 0 10.4078 0 9.84V8.16C0 7.59225 0.42525 7.113 0.98775 7.0455L2.39775 6.86625C2.514 6.5085 2.65725 6.1635 2.8245 5.83575L1.95375 4.7145C1.60125 4.26075 1.6425 3.62025 2.04525 3.23025L3.2265 2.049C3.621 1.64325 4.26075 1.60275 4.71525 1.9545L5.83575 2.82525C6.1635 2.65725 6.5085 2.514 6.86625 2.3985L7.0455 0.991501C7.113 0.425251 7.59225 0 8.16 0H9.84C10.4078 0 10.887 0.425249 10.9545 0.987749L11.1337 2.39775C11.4915 2.514 11.8365 2.65725 12.1642 2.8245L13.2855 1.95375C13.7393 1.60125 14.3798 1.6425 14.7698 2.04525L15.951 3.2265C16.3575 3.621 16.3988 4.26075 16.0462 4.71525L15.1755 5.83575C15.3435 6.1635 15.4867 6.5085 15.6022 6.86625L17.0093 7.0455C17.574 7.113 17.9993 7.59225 17.9993 8.16V9.84C18 10.4078 17.5748 10.887 17.0123 10.9545ZM9 5.25C6.93225 5.25 5.25 6.93225 5.25 9C5.25 11.0677 6.93225 12.75 9 12.75C11.0677 12.75 12.75 11.0677 12.75 9C12.75 6.93225 11.0677 5.25 9 5.25Z" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="18" y1="12.5" x2="3" y2="5.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#21D4FD"/>
            <stop offset="1" stop-color="#E40ECF"/>
            </linearGradient>
            </defs>
            </svg>
            <span>Settings</span>
        </div>
           <div class="none" @click="modal='support'">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 9.75C10.8352 9.75 10.5 10.086 10.5 10.5V13.5C10.5 13.9132 10.164 14.25 9.75 14.25H7.5V3C7.5 2.3595 7.092 1.78725 6.4785 1.57425L6.2565 1.5H9.75C10.164 1.5 10.5 1.83675 10.5 2.25V4.5C10.5 4.914 10.8352 5.25 11.25 5.25C11.6648 5.25 12 4.914 12 4.5V2.25C12 1.0095 10.9905 0 9.75 0H1.6875C1.659 0 1.635 0.01275 1.60725 0.0165C1.57125 0.0135 1.53675 0 1.5 0C0.67275 0 0 0.67275 0 1.5V15C0 15.6405 0.408 16.2127 1.0215 16.4257L5.535 17.9303C5.688 17.9775 5.84025 18 6 18C6.82725 18 7.5 17.3272 7.5 16.5V15.75H9.75C10.9905 15.75 12 14.7405 12 13.5V10.5C12 10.086 11.6648 9.75 11.25 9.75Z" fill="white"/>
                <path d="M17.7803 6.96979L14.7803 3.96979C14.5658 3.75529 14.2433 3.69079 13.9628 3.80704C13.683 3.92329 13.5 4.19704 13.5 4.50004V6.75004H10.5C10.086 6.75004 9.75 7.08604 9.75 7.50004C9.75 7.91404 10.086 8.25004 10.5 8.25004H13.5V10.5C13.5 10.803 13.683 11.0768 13.9628 11.193C14.2433 11.3093 14.5658 11.2448 14.7803 11.0303L17.7803 8.03029C18.0735 7.73704 18.0735 7.26304 17.7803 6.96979Z" fill="white"/>
                </svg>

            <span>Relogin</span>
        </div>
        <TMPMOdal  v-if="modal" :height="h" >
            <support v-if="modal==='support'" @height="(h)=>height = h" @success="modal='success'" @close="modal=false"/>
            <setProfile v-if="modal==='settings'" @height="(h)=>height = h" @support="modal='support'" @success="modal='success'" @close="modal=false" />
            <Success v-if="modal==='success'" @close="modal=false" @height="(h)=>height = h"/>
        </TMPMOdal>
    </div>
</template>

<script>
import TMPMOdal from '../settings/modal-tmp.vue'
import support from '../settings/support.vue'
import setProfile from '../settings/setprofile.vue'
import Success from '../settings/seccess.vue'
export default {

    data:()=>({
        modal:false,
        height:null
    }),
    computed:{
        h(){
            return this.height
        }
    },
    
    components:{
        TMPMOdal,
        support,
        setProfile,
        Success
    }
}
</script>


<style lang="scss" scoped>
.mini-modal{
    width: 196px;
    min-height: 122px;
    background: #14131E;
    border: 1px solid #28263A;
    box-sizing: border-box;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    top: 70px;
    right: 10px;
    .none{
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    cursor: pointer;
    
    padding: 23px 27px;
    span{
        font-family: LabGrotesque-Regular;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
        color: #00EDFF;
    }
    span:nth-child(2){
                
        font-family:LabGrotesque-Regular;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */


        color: #FFFFFF;
    }
}
    >div:first-child{
        border-bottom: 0.2px solid #59656F;
    }
}

</style>