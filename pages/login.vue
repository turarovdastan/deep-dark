<template>
  <div id="sign-in-cont">
    <menu_main />
    
  </div>
</template>

<script>
import menu_main from "@/components/blocks/menu_main";

export default {
  name: "SignIn",
  components: {
    menu_main
  }
}
</script>

<style lang="scss" scoped>
#sign-in-cont {
  background: url("../assets/backgroungs/signin_back.png") no-repeat top;
  background-size: cover;
  padding-bottom: 10%;
  min-height: 100vh;
}
</style>