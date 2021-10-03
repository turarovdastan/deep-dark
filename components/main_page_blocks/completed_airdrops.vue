<template>
  <div id="completed_airdrops">
    <div id="completed_airdrops_cont">
      <h2>Completed Bounty Hunt & Airdrops</h2>
      <div class="completed_airdrop_container">
        <div v-for="i of 12" :key="i">
          <a href="/">
            <div class="airdrop_image">
              <img alt="airdrop" src="@/assets/test.png">
            </div>
            <div class="completed_airdrop_title">
              <h3>Completed Airdrop titile</h3>
            </div>
            <div class="completed_airdrop_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </a>
        </div>
      </div>
      <div id="completed_airdrop_button">
        <div class="button">
        <a>{{ 'EN' === 'EN' ? 'Load more' : 'Загрузить еще'}}</a>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.button {
  margin: 87px 0 141px 0;
  a {
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 11px;
    padding: 1% 5%;
    color: #FFFFFF;
    font-family: Adineue-PRO-Cyr-BoldWeb, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 190%;
    text-align: center;
    cursor: pointer;
  }
}
@media (max-width:1175px) {
  .button {
    border: 1px solid #FFFFFF;
    border-radius: 7px;
    width: 100%;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
      border: none;
    }
  }
  
}
#completed_airdrops {
  margin: 50px 0 20px 0;
  width: 100%;
  #completed_airdrops_cont {
    width: 85%;
    margin: auto;
    h2 {
      font-family: Adineue-PRO-Cyr-BoldWeb, serif;
      font-style: normal;
      font-weight: bold;
      font-size: 41px;
      line-height: 134%;
      color: #FFFFFF;
    }
    .completed_airdrop_container {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      div {
        flex: 30%;
        padding: 1%;
        a {
          text-decoration: none;
          .airdrop_image {
            box-sizing: border-box;
            img {
              width: 100%;
            }
          }
          .completed_airdrop_title {
            h3 {
              font-family: Adineue-PRO-Cyr-BoldWeb, serif;
              font-style: normal;
              font-weight: bold;
              font-size: 24px;
              line-height: 158%;
              color: #FFFFFF;
              margin-block-start: 2px;
              margin-block-end: 2px;
              margin-inline-start: 0;
              margin-inline-end: 0;
            }
          }
        }
        .completed_airdrop_text {
          display: inline-block;
          p {
            width: 80%;
            font-family: LabGrotesque-Regular, serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 134%;
            color: #FFFFFF;
            margin-block-start: 2px;
            margin-block-end: 2px;
            margin-inline-start: 0;
            margin-inline-end: 0;
          }
        }
      }
    }
    #completed_airdrop_button {
      text-align: center;
    }
    @media (max-width:1111px) {
      .completed_airdrop_container{
        flex-direction: column;
        width: 100%;
        gap: 40px;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

</style>