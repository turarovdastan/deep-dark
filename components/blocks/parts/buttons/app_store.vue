<template>
  <div id="app_store_button">
    <a href="/">
      <div>
        <img src="../../../../assets/buttons/apple.png" alt="apple_store">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "app_store"
}
</script>

<style lang="scss" scoped>
#app_store_button {
  width: 150px;
  display: inline-block;
  box-sizing: border-box;
  a {
    img {
      width: 100%;
      border: 1px solid #8a8a8a;
      border-radius: 10px;
    }
  }
}
</style>