<template>
  <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
    <div class="rules-dialog" v-if="isRulesDialog">
      <header>
        <p>活动规则</p>
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
      <main>
        <p>1. 同一信用卡，只有当月的首笔还款可获得1次抽奖机会，不同信用卡可累加；同一用户，每月最多有3次抽奖机会；</p>
        <p>2. 同一手机号码、手机设备、身份证号视为同一用户；</p>
        <p>3. 获得抽奖机会后需马上抽奖，每月月底自动清零当月剩余未抽奖的机会；</p>
        <p>4. 中奖奖品可在【卡牛】-【我的】-【我的卡券】查看；</p>
        <p>5. 所中奖的还款金，均在次日生效；</p>
        <p>6. 如有其它疑问，可拨打客服电话400-88-8888。</p>
        <p>7. 如有其它疑问，可拨打客服电话400-88-8888。</p>
        <p>8. 如有其它疑问，可拨打客服电话400-88-8888。</p>
        <p>9. 如有其它疑问，可拨打客服电话400-88-8888。</p>
        <p>10. 如有其它疑问，可拨打客服电话400-88-8888。</p>
      </main>
      <img class="close-btn" src="../assets/img/close-btn.png" @click="$emit('closeRulesDialog')" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'RulesDialog',
  props: ['isRulesDialog'],
  data () {
    return {
      dotOptions: [],
      startY: 0,
      endY: 0
    }
  },
  created () {
    this.dotOptions.length = 5
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
}
.rules-dialog {
  width: 609px;
  height: 688px;
  position: fixed;
  top: 306px;
  left: 70px;
  // left: 50%;
  // transform: translateX(-50%);
  background: #fff;
  z-index: 999;
  border-radius: 18px;
  header {
    line-height: 98px;
    text-align: center;
    font-size: 42px;
    background: -webkit-linear-gradient(left, #f846e5, #496bf3);
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    color: #fff;
    position: relative;
    .leftDot {
      position: absolute;
      height: 29px;
      width: 97px;
      top: 36px;
      right: 405px;
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
          margin-bottom: 6px;
        }
      }
    }
    .rightDot {
      position: absolute;
      height: 29px;
      width: 97px;
      top: 36px;
      left: 405px;
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
          margin-bottom: 6px;
        }
      }
    }
  }
  main {
    margin-top: 29px;
    font-size: 24px;
    color: #6a6a6a;
    padding-bottom: 0;
    margin-left: 35px;
    padding-right: 15px;
    box-sizing: border-box;
    width: 562px;
    height: 532px;
    overflow: auto;
    p {
      line-height: 42px;
      margin-bottom: 11px;
    }
  }
  .close-btn {
    width: 59px;
    height: 60px;
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 738px;
    left: 50%;
    transform: translateX(-50%);
  }
}
main::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0);
}
main::-webkit-scrollbar {
  width: 6px;
  height: 13px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
main::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  min-height: 28px;
}
main::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
</style>
