<template>
  <div id="google_market_button">
    <a href="/">
      <div>
        <img src="../../../../assets/buttons/google.png" alt="logo-google-market">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "google_market"
}
</script>

<style lang="scss" scoped>
#google_market_button {
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