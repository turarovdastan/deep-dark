<template>
  <div id="main-button">
    <a>
      {{ button_title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "button_main",
  props: {
    button_title: String
  }
}
</script>

<style lang="scss" scoped>
#main-button {

  a{
    text-align: center;
    font-family: Adineue-PRO-Cyr-BoldWeb, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    //line-height: 500%;
    color: #FFFFFF;
    padding: 1% 1%;
    background: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
    cursor: pointer;
    display: block;
    border-radius: 6px;
    width: 141px;
  }

}
</style>