<template>
<div class="tmp">
    <div :style="{'min-height':h+'px'}" class="tmp-container">
        <slot/>
    </div>
</div>
</template>

<script>
export default {
    props:['height'],
    computed:{
        h(){
             return this.height
        }
    }
}
</script>


<style lang="scss" scoped>
.tmp{
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.76);
    backdrop-filter: blur(16px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    overflow-y: scroll;
}

.tmp-container{
    position: fixed;
    width: 70%;
    left: 17.5%;
    padding: 50px 42px;
    bottom: 30px;
    background: linear-gradient(180deg, rgba(14, 207, 252, 0.33) 0%, rgba(33, 212, 253, 0.06) 100%);
    border: 1px solid #257B8E;
    box-sizing: border-box;
    border-radius: 11px;
    top: 100px;
    bottom: 100px;
}
@media (max-width:600px) {
    .tmp-container{
        width: 93%;
        left:3.5%;
    }
}
// ::-webkit-scrollbar {
//   display: none;
// }

// /* Track */
// ::-webkit-scrollbar-track {
//     display: none;

// }

// /* Handle */
// ::-webkit-scrollbar-thumb {
//   display: none;

// }

// /* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//     display: none;

// }
</style>