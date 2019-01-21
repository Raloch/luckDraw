<template>
  <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
    <div class="noPrize" v-if="isNoPrize">
      <p class="title">差一点点就中大奖了</p>
      <p class="tip">去还其他信用卡，再试试手气吧~</p>
      <img src="../assets/img/card-niu.png" alt="" class="card-niu">
      <div class="receive-btn" @click="$emit('closeNoPrizeDialog')">我知道了</div>
    <img class="close-btn" src="../assets/img/close-btn.png" @click="$emit('closeNoPrizeDialog')" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  props: ['isNoPrize']
}
</script>

<style lang="scss" scoped>
.noPrize {
  width: 589px;
  height: 511px;
  position: fixed;
  top: 322px;
  left: 81px;
  background: url('../assets/img/receive-bg.png');
  background-size: 589px 511px;
  z-index: 999;
  .title {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38px;
    color: #fff;
    margin-top: 66px;
    margin-bottom: 2px;
    letter-spacing: 1px;
  }
  .tip {
    height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
  }
  .card-niu {
    width: 171px;
    height: 150px;
    position: absolute;
    top: 186px;
    left: 50%;
    transform: translateX(-50%);
  }
  .receive-btn {
    width: 431px;
    height: 85px;
    border-radius: 42px;
    position: absolute;
    bottom: 59px;
    left: 50%;
    transform: translateX(-50%);
    background: -webkit-linear-gradient(top, #ff73c9, #ff0b95);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 33px;
    letter-spacing: 4px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }
  .close-btn {
    width: 59px;
    height: 60px;
    display: block;
    position: absolute;
    top: 561px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
