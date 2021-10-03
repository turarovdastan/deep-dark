<template>
  <div id="actual_airdrops">
    <div id="actual_airdrops_cont_main">
      <div class="actual_airdrop_container">
        <div v-for="i of 2" :key="i">
          <a href="/">
            <div class="airdrop_image">
              <img class="airdrop" src="@/assets/test.png" >
            </div>
            <div class="actual_airdrop_title">
              <h3>Actuail Airdrop titile</h3>
            </div>
            <div class="actual_airdrop_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "actual_airdrops",
  data() {
    return {
      attempt: 1
    }
  }
}
</script>

<style lang="scss" scoped>
#actual_airdrops {
  border-bottom: 1px solid;
  border-bottom-color: rgba(255, 255, 255, 0.19);
  width: 100%;
  margin-top: 100px;
  padding: 0 0 62px 0;
  #actual_airdrops_cont_main {
    width: 85%;
    margin: auto;
    .actual_airdrop_container {
      display: flex;
      flex-flow: row;
      div {
        flex: 50%;
        a {
          text-decoration: none;
          .airdrop_image {
            width: 50%;
          }
          .actual_airdrop_title {
            h3 {
              font-family: Adineue-PRO-Cyr-BoldWeb, serif;
              font-style: normal;
              font-weight: bold;
              font-size: 53px;
              line-height: 72%;
              background: -webkit-linear-gradient(0deg, #E40ECF, #21D4FD 50%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin: 0;
              padding: 3% 1%;
              text-align: left;
            }
            @media (max-width:523px) {
              h3{
                font-size: 30px;
              }
              
            }
          }
          .actual_airdrop_text {
            display: inline-block;

            p {
              width: 80%;
              font-family: LabGrotesque-Regular, serif;
              font-style: normal;
              font-weight: normal;
              font-size: 19px;
              line-height: 139%;
              color: #FFFFFF;
            }
            @media (max-width:523px) {
              p{
                font-size: 13px;
              }
              
            }
          }
        }
      }
    }

    @media (max-width:1300px) {
      .actual_airdrop_container{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 49px;
      }
    }
  }

}

   @media (max-width:752px) {
      #actual_airdrops #actual_airdrops_cont_main .actual_airdrop_container div a .airdrop_image .airdrop{
        width: 200%;
    }
    #actual_airdrops #actual_airdrops_cont_main .actual_airdrop_container div{
      width: 100%;
    }
  }
</style>