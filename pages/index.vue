<template>
  <div id="main-page">
        <header>
            <menu_main />
        </header>
    <div class="main-container">
      <main_banner />
       <main_info_block />
      
      <actual_airdrops />
       
      <completed_airdrops />
      <subscribe /> 
    </div>
  </div>
</template>

<script>

import main_banner from "@/components/main_page_blocks/head_info_banner_main";
import main_info_block from "@/components/main_page_blocks/info_block_main"
import actual_airdrops from "@/components/main_page_blocks/actual_airdrops";
import completed_airdrops from "@/components/main_page_blocks/completed_airdrops";
import subscribe from "@/components/main_page_blocks/subscribe";
import menu_main from "@/components/blocks/menu_main";



export default {
  name: "MainPage",
  components: {
    main_banner,
    main_info_block,
    actual_airdrops,
    completed_airdrops,
    subscribe,
    menu_main
  },
  mounted(){
  
  }
}
</script>



<style lang="scss">
@mixin font-face($font-face-family, $font-face-filename, $font-face-weight : normal, $font-face-style :normal) {
  @font-face {
    font-family: '#{$font-face-family}';
    src: url(('#{$font-face-filename}.eot'));
    src: url(('#{$font-face-filename}.eot?#iefix')) format('embedded-opentype'),
    url(('#{$font-face-filename}.woff')) format('woff'),
    url(('#{$font-face-filename}.ttf')) format('truetype');
    font-weight: $font-face-weight;
    font-style: $font-face-style;
  }
}
@include font-face(Axiforma-Regular, "assets/fonts/Axiforma-Regular/Axiforma-Regular");
@include font-face(Adineue-PRO-Cyr-BoldWeb, "assets/fonts/adineuePROCyr/adineuePROCyr-BoldWeb");
@include font-face(LabGrotesque-Regular, "assets/fonts/LabGrotesque-Regular/LabGrotesque-Regular");

body {
  margin: 0;
  height: 100%;
}
a:hover {
  color: #21D4FD;
}
html{
  scroll-behavior: smooth;
}
#main-page {
  background: #0A0914 url("../assets/backgroungs/background_main_head.png") no-repeat top;
  background-size: contain;
  background-size: 120% 1117px;
  width: 100%;
}

@media (max-width:1140px) {
  #main-page{
    background-size: 100% 100vh;
  }
}
@media (max-width:709px) {
  #main-page{
    background-size: 921px 90vh;
  }
}
</style>


