<template>
    <div class="modal-cnt">
    <svg @click="$store.dispatch('modal/setModal',false)" class="close" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.3263 15.8046L18.5654 18.5655L21.3263 15.8046ZM18.5654 18.5655L15.8045 21.3264L18.5654 18.5655ZM18.5654 18.5655L21.3263 21.3264L18.5654 18.5655ZM18.5654 18.5655L15.8045 15.8046L18.5654 18.5655ZM26.8482 26.8483C25.7605 27.936 24.4692 28.7988 23.048 29.3875C21.6269 29.9761 20.1037 30.2791 18.5654 30.2791C17.0272 30.2791 15.504 29.9761 14.0828 29.3875C12.6617 28.7988 11.3704 27.936 10.2827 26.8483C9.19496 25.7606 8.33215 24.4693 7.74348 23.0481C7.15482 21.627 6.85184 20.1038 6.85184 18.5655C6.85184 17.0273 7.15482 15.5041 7.74348 14.0829C8.33215 12.6618 9.19496 11.3705 10.2827 10.2828C12.4794 8.08603 15.4588 6.85193 18.5654 6.85193C21.6721 6.85193 24.6515 8.08603 26.8482 10.2828C29.0449 12.4795 30.279 15.4589 30.279 18.5655C30.279 21.6722 29.0449 24.6515 26.8482 26.8483Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
        <div class="border">
            <svg width="62" height="44" viewBox="0 0 62 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 26.2L18.1429 43L61 1" stroke="#21FDA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="modal-tit">Succes</div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$emit('height',490)
    }
}
</script>

<style lang="scss" scoped>
.modal-cnt{
    width: 100%;
    height: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    .border{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 1px solid #21FDA1;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

    }
    .close{
        position: absolute;
        top: 10px;
        right: 11px;
        cursor: pointer;
    }
    .modal-tit{
        font-family:Adineue-PRO-Cyr-BoldWeb;
        font-style: normal;
        font-weight: bold;
        font-size: 52px;
        line-height: 55px;
        /* or 172% */
        color: #FFFFFF;
    }
}

</style>