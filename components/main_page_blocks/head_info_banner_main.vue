<template>
  <div id="info-banner">

    <div id="main-banner-title">
      <h1>
        <span >Foil.Network<br> </span>
        <span>  Bounty Hunt <br></span>
        <span>  & Airdrop</span>
       
      </h1>
    </div>
    <div id="main-banner-button">
        <div class="button">
        <a href="#actual_airdrops">
        Actual Airdrops
        </a>
        </div>
    </div>
    <div id="main-text-block">
      <p>Earn FOIL by participating in the bounty campaign. The Blockchain Interactions crypto rewards event brings the important mission
 of scalability and sustainability 
of the FOIL elastic blockchain.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "head_info_banner_main",


}
</script>

<style lang="scss" scoped>

.button {
  margin: 56px 0 153px 0;
  
  a {
    background: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
    padding: 1.5% 4%;
    color: #FFFFFF;
    font-family: Adineue-PRO-Cyr-BoldWeb, serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 357%;
    letter-spacing: 0;
    text-align: left;
    border-radius: 7px;
    text-decoration: none;
  }
}
@media (max-width:1140px) {
  .button {
    background: linear-gradient(262.17deg, #21D4FD -9.98%, #E40ECF 62.2%);
    border-radius: 7px;
    height: 70px;
    margin: 177px 0 60px 0;
    a{
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background:none;
    }
  }
}
#info-banner {
  width: 90%;
  margin: auto;
  #main-banner-title {
    margin-top: 149px;
    h1 {
      span{
        
        font-size: 79px;
      }
      span:first-child {
        font-family: Adineue-PRO-Cyr-BoldWeb, serif;
        font-style: normal;
        font-weight: bold;
        line-height: 95%;
        color: #FFFFFF;
      }
      span:nth-child(2) {
        font-family: Adineue-PRO-Cyr-BoldWeb, serif;
        font-style: normal;
        font-weight: bold;
        line-height: 98%;
        background: -webkit-linear-gradient(#E40ECF 90%, #21D4FD);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      span:nth-child(3) {
        font-family: Adineue-PRO-Cyr-BoldWeb, serif;
        font-style: normal;
        font-weight: bold;
        line-height: 98%;
        background: -webkit-linear-gradient(#E40ECF, #21D4FD 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @media (max-width:523px) {
        span{
          font-size: 49px;
        }
      }
    }

 
    
  }
  #main-banner-button {
    
  }
  #main-text-block {
    width: 55%;
    font-family: Adineue-PRO-Cyr-BoldWeb, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 41px;
    line-height: 134%;
    color: #FFFFFF;
  }
   @media (max-width:523px) {
      #main-text-block{
        font-size: 20px;
      }
   }
  @media (max-width:1140px) {
    #main-text-block{
      width: 100%;
    }
  }
}

   @media (max-width:830px) {
     #info-banner #main-banner-title{
            margin-top: 31px;
      }
    }

</style>