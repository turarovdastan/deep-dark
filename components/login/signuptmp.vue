<template>
    <div class="signup">
        <div class="signup-container">
            <slot/>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.signup{
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.76);
    backdrop-filter: blur(16px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    .signup-container{
        width: 660px;
        min-height:420px ;
        background: linear-gradient(180deg, rgba(14, 207, 252, 0.33) 0%, rgba(33, 212, 253, 0.06) 100%);
        border: 1px solid #257B8E;
        box-sizing: border-box;
        border-radius: 11px;
    }
    @media (max-width:654px) {
        .signup-container{
            width: 100%;
        }
    }
}
</style>