<template>
  <div id="info-block-main">
    <div id="info-block-main-back">
      <div id="second-logo" class="horizontal_blocks">
        <img src="../../assets/sub-logo.png" alt="sub_logo">
      </div>
      <div id="info-text" class="horizontal_blocks">
        <div id="info-text-up">
          <p>Test the FOIL NFT storage, send and receive encrypted messages,
            transactions and save NFT content over blockchain and
            bring the crypto benchmark tests of FOIL Network live! 1,250,000 FOIL
            are reserved for the crypto airdrop and bounty participants.</p>
        </div>
        <div class="flex">
        <div id="info-text-head" class="horizontal_blocks">
          <p>Join FOIL Blockchain Interactions and earn FOIL crypto.</p>
        </div>
        <div id="info-text-button" class="horizontal_blocks">
          <img src="../../assets/icons/icon_down.png" alt="button_down">
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "info_block_main",
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#info-block-main {
  margin-top: 58px;
  width: 100%;
  padding: 54px 0 0 20px;
  background-image: url("../../assets/backgroungs/sub-logo-back1.png"),
  url("../../assets/backgroungs/sub-logo-back2.png");
  background-repeat: no-repeat, no-repeat;
  background-position: left center, left center;
  .flex{
    display: flex;
    gap: 32px;
    margin-top: 29px;
  }
  #info-block-main-back {
    height:auto;
    display: flex;
    flex-flow: row;
    .horizontal_blocks {
      width: 50%;
    }
    #second-logo {
      text-align: center;
      justify-content: center;
      align-items: center;
      height:auto;
      display: flex;
      flex-flow: row;
    }
    #info-text {
      float: left;
      #info-text-up {
        display: block;
        width: 85%;
        p {
          font-family: LabGrotesque-Regular, serif;
          font-style: normal;
          font-weight: normal;
          font-size: 19px;
          line-height: 171%;
          color: #FFFFFF;
        }
        @media (max-width:523px) {
          p{
            font-size: 13px;
          }
        }
      }
      
      #info-text-head {
        display: inline-block;
        width: 60%;
        p {
          background: -webkit-linear-gradient(0deg, #E40ECF, #21D4FD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: Adineue-PRO-Cyr-BoldWeb, serif;
          font-style: normal;
          font-weight: bold;
          font-size: 42px;
          line-height: 106%;
        }
        @media (max-width:523px) {
          p{
            font-size: 21px;
          }
      }
      }
      #info-text-button {
        display: inline-block;
        width: 40%;
      }
    }
  }

  @media (max-width:1280px) {
     #info-block-main-back{
       flex-direction: column;
       align-items: center;
       justify-content: center;
       .horizontal_blocks{
         width: 60%;
         margin-top: 100px;
       }
       #second-logo{
         width: 90%;
         margin: 0 auto;
         height: 50vh;
       }
     }
  }
  @media (max-width:713px) {
    #info-block-main-back .horizontal_blocks{
      width: 97%;
    }
  }

}

@media (max-width:1280px) {
  #info-block-main{
    background-position: top center;
  }
}
</style>