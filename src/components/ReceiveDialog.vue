<template>
  <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
    <div class="receiveDialog" v-if="isReceiveDialog">
      <img class="gift-box" src="../assets/img/gift-box.png" alt="">
      <header>
        <p>恭喜你获得</p>
        <div class="leftDot">
          <div class="dots" v-for="(item, index) in dotOptions" :key="index">
            <div class="dot" :style="`opacity: ${0.5 - index * 0.12}`"></div>
            <div class="dot" :style="`opacity: ${0.5 - index * 0.12}`"></div>
            <div class="dot" :style="`opacity: ${0.5 - index * 0.12}`"></div>
          </div>
        </div>
        <div class="rightDot">
          <div class="dots" v-for="(item, index) in dotOptions" :key="index">
            <div class="dot" :style="`opacity: ${0.5 - index * 0.12}`"></div>
            <div class="dot" :style="`opacity: ${0.5 - index * 0.12}`"></div>
            <div class="dot" :style="`opacity: ${0.5 - index * 0.12}`"></div>
          </div>
        </div>
      </header>
      <img class="card" :src="url" alt="">
      <a href="https://www.baidu.com/"><div class="receive-btn">立即领取</div></a>
      <img class="close-btn" src="../assets/img/close-btn.png" @click="$emit('closeReceiveDialog')" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  props: ['isReceiveDialog', 'url'],
  data () {
    return {
      dotOptions: []
    }
  },
  created () {
    this.dotOptions.length = 5
  }
}
</script>

<style lang="scss" scoped>
.receiveDialog {
  width: 589px;
  height: 511px;
  position: fixed;
  top: 322px;
  left: 81px;
  background: url('../assets/img/receive-bg.png');
  background-size: 589px 511px;
  z-index: 999;
  .gift-box {
    width: 303px;
    height: 227px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -128px);
  }
  header {
    height: 48px;
    line-height: 48px;
    text-align: center;
    margin-top: 91px;
    color: #fff;
    font-size: 37px;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    position: relative;
    .leftDot {
      position: absolute;
      height: 29px;
      width: 97px;
      top: 12px;
      right: 406px;
      .dots {
        width: 6px;
        height: 29px;
        float: right;
        margin-left: 8px;
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          margin-bottom: 4px;
        }
      }
    }
    .rightDot {
      position: absolute;
      height: 29px;
      width: 97px;
      top: 12px;
      left: 406px;
      .dots {
        width: 6px;
        height: 29px;
        float: left;
        margin-right: 8px;
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          margin-bottom: 4px;
        }
      }
    }
  }
  .card {
    position: absolute;
    width: 505px;
    height: 180px;
    top: 152px;
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
