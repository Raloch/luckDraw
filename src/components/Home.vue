<template>
  <div class="home" ref="home">
    <p class="avtivity-rules" @click="isRulesDialog = true">活动规则</p>
    <p class="check-prizes">查看奖品</p>
    <img class="icon-title" src="../assets/img/title.png" alt="">
    <img class="icon-leftman" src="../assets/img/leftMan.png" alt="">
    <img class="icon-rightman" src="../assets/img/RightMan.png" alt="">
    <img class="icon-standman" src="../assets/img/standMan.png" alt="">
    <!-- 抽奖转盘 -->
    <div class="turntable">
      <div class="table">
        <img class="icon-outside-ellipse" src="../assets/img/turntable-outside-ellipse.png" alt="">
        <img ref="lamp" class="icon-horse-lamp" src="../assets/img/horse-lamp.png" alt="">
        <img class="icon-inside-ellipse" src="../assets/img/turntable-inside-ellipse.png" alt="">
        <img ref="table" class="icon-table-prizes" src="../assets/img/turntable-prizes.png" alt="">
        <div class="pointer" v-if="isRestTimes" @click="luckDraw">
          <img class="icon-pointer" src="../assets/img/pointer.png" alt="">
          <p class="text1">抽奖</p>
          <p class="text2">剩余{{restTimes}}次</p>
        </div>
        <div class="pointer" v-else>
          <img class="icon-pointer" src="../assets/img/pointer-notimes.png" alt="">
        </div>
      </div>
      <div class="chassis">
        <img class="icon-chassis" src="../assets/img/chassis.png" alt="">
        <img class="icon-chassis-shape" src="../assets/img/chassis-shape.png" alt="">
        <img class="icon-chassis-shadow" src="../assets/img/chassis-shadow.png" alt="">
      </div>
    </div>
    <!-- 中奖名单轮播 -->
    <div class="winner-list-display swiper-container swiper-no-swiping" id="swiper2">
      <div class="swiper-wrapper">
        <p v-for="(item, index) in displayList" :key="index" class="swiper-slide">用户{{userPhone(item)}}抽中了{{item.prize}}</p>
      </div>
    </div>
    <!-- 中奖项目展示 -->
    <div class="wheel-planting">
      <img class="planting-rectangle" src="../assets/img/wheel-planting-rectangle.png" alt="">
      <img class="planting-boundary1" src="../assets/img/wheel-planting-boundary1.png" alt="">
      <img class="planting-boundary2" src="../assets/img/wheel-planting-boundary2.png" alt="">
      <div class="contain">
        <div class="left-arrow swiper-button-prev1">
          <div class="arrow"></div>
        </div>
        <div class="right-arrow swiper-button-next1">
          <div class="arrow"></div>
        </div>
        <div class="box swiper-container" id="swiper1">
          <div class="swiper-wrapper">
            <div class="prizes swiper-slide">
              <div class="prize" v-for="(item, index) in prizes" :key="index">
                <div class="image">
                  <img class="imgSize" :src="item.url" alt="">
                </div>
                <p>{{item.name}}</p>
              </div>
            </div>
            <div class="prizes swiper-slide">
              <div class="prize" v-for="(item, index) in prizes1" :key="index">
                <div class="image">
                  <img class="imgSize" :src="item.url" alt="">
                </div>
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 蒙层 -->
    <div class="coverLayer" v-if="isCover"></div>
    <!-- 规则弹窗 -->
    <rules-dialog :isRulesDialog="isRulesDialog" @closeRulesDialog="closeRulesDialog"></rules-dialog>
    <!-- 领取奖品弹窗	 -->
    <receive-dialog :url="url" :isReceiveDialog="isReceiveDialog" @closeReceiveDialog="closeReceiveDialog"></receive-dialog>
    <!-- 感谢参与弹窗 -->
    <no-prize :isNoPrize="isNoPrize" @closeNoPrizeDialog="closeNoPrizeDialog"></no-prize>
  </div>
</template>

<script>
import Swiper from 'swiper'
import prize1 from '../assets/img/prize1.png'
import prize2 from '../assets/img/prize2.png'
import prize3 from '../assets/img/prize3.png'
import prize4 from '../assets/img/prize4.png'
import repayment99 from '../assets/img/99-repayment.png'
import discountCard from '../assets/img/discount-card.png'
import repayment199 from '../assets/img/1.99-repayment.png'
import repayment099 from '../assets/img/0.99-repayment.png'
import repayment399 from '../assets/img/3.99-repayment.png'
import cardRepayment from '../assets/img/card-repayment.png'

import RulesDialog from './RulesDialog'
import ReceiveDialog from './ReceiveDialog'
import NoPrize from './NoPrize'

import Mock from 'mockjs'

export default {
  name: 'HelloWorld',
  data () {
    return {
      isRulesDialog: false,
      isReceiveDialog: false,
      isNoPrize: false,
      mockData: [],
      beforeOne: 0,
      beforeDeg: 0,
      restTimes: 0,
      ifClick: true,
      url: '',
      top: 0,
      prizes: [
        {
          url: prize1,
          name: '999元现金红包'
        },
        {
          url: prize2,
          name: '99元还款金'
        },
        {
          url: prize3,
          name: '还款金套餐'
        },
        {
          url: prize4,
          name: '贷款还款金'
        }
      ],
      prizes1: [
        {
          url: prize3,
          name: '999元现金红包'
        },
        {
          url: prize1,
          name: '99元还款金'
        },
        {
          url: prize2,
          name: '还款金套餐'
        },
        {
          url: prize4,
          name: '贷款还款金'
        }
      ],
      displayList: [
        {
          user: '18556356214',
          prize: '999元现金红包'
        },
        {
          user: '18556356214',
          prize: '999元现金红包'
        },
        {
          user: '18556356214',
          prize: '999元现金红包'
        }
      ]
    }
  },
  components: {
    RulesDialog,
    ReceiveDialog,
    NoPrize
  },
  computed: {
    isCover () {
      return this.isRulesDialog || this.isReceiveDialog || this.isNoPrize
    },
    // 是否剩余抽奖次数
    isRestTimes () {
      return this.restTimes > 0
    }
  },
  created () {
    this.$http.get('/posts').then(res => {
      this.mockData = res.data.posts
      // console.log(res.data.restTimes.num)
      this.restTimes = res.data.restTimes.num
    })
  },
  mounted () {
    let lamp = this.$refs.lamp
    let deg = 30
    let num = 0
    setInterval(() => {
      num++
      deg = 30 * num
      lamp.style.transform = `rotate(${deg}deg)`
    }, 500)
    new Swiper('#swiper1', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1'
      },
      speed: 500
    })
    new Swiper('#swiper2', {
      loop: true,
      autoplay: {
        delay: 3000
      },
      speed: 500,
      direction: 'vertical'
    })
  },
  methods: {
    // 关闭规则弹窗
    closeRulesDialog () {
      this.isRulesDialog = false
    },
    // 关闭领取奖品弹窗
    closeReceiveDialog () {
      this.isReceiveDialog = false
    },
    // 关闭谢谢参与弹窗
    closeNoPrizeDialog () {
      this.isNoPrize = false
    },
    // 打开规则弹窗
    openRulesDialog () {
      this.isRulesDialog = true
    },
    // 隐藏手机号中间四位
    userPhone (item) {
      let phone = item.user
      return phone.slice(0, 3) + '****' + phone.slice(7, 12)
    },
    // 开始抽奖
    luckDraw () {
      if (this.ifClick && this.isRestTimes) {
        this.ifClick = false
        this.restTimes--
        this.$http.get('/posts').then(res => {
          // console.log(res.data.restTimes.num)
          let prizeIndex = this.mockData.indexOf(res.data.array.prize)
          console.log(res.data.array.prize)
          let deg = prizeIndex - this.beforeOne
          deg = (deg < 0 ? deg + 9 : deg)
          this.$refs.table.style.transform = `rotate(${1080 + Number(deg * 40) + this.beforeDeg}deg)`
          this.beforeDeg = 1080 + Number(deg * 40) + this.beforeDeg
          this.beforeOne = prizeIndex
          setTimeout(() => {
            this.ifClick = true
            switch (prizeIndex) {
              case 0:
                this.url = repayment99
                this.isReceiveDialog = true
                break
              case 1:
                this.url = discountCard
                this.isReceiveDialog = true
                break
              case 2:
                this.url = ''
                this.isReceiveDialog = true
                break
              case 3:
                this.url = repayment199
                this.isReceiveDialog = true
                break
              case 4:
                this.url = repayment099
                this.isReceiveDialog = true
                break
              case 5:
                this.url = repayment399
                this.isReceiveDialog = true
                break
              case 6:
                this.url = cardRepayment
                this.isReceiveDialog = true
                break
              case 7:
                this.url = ''
                this.isReceiveDialog = true
                break
              case 8:
                this.isNoPrize = true
                break
            }
          }, 5200)
        })
        // this.$refs.table.style.transform = 'rotate(1000deg)'
      }
    },
    getData () {

    }
  },
  watch: {
    isCover (newValue) {
      if (newValue) {
        this.top = $(window).scrollTop()
        $('body').css({
          'position': 'fixed',
          'left': '50%',
          'transform': 'translateX(-50%)',
          'top': -this.top
        })
        $('.coverLayer').css({
          'top': -this.top
        })
        // body.style.position = 'fixed'
        // body.style.left = '50%' // 不加，PC端body会贴左边显示
        // body.style.transform = 'translateX(-50%)'
        // body.style.top = -this.top + 'px'
      } else {
        // body.style.position = 'static'
        // body.style.transform = 'translateX(0)'
        $('body').css({
          position: 'static',
          transform: 'translateX(0)'
        })
        $(window).scrollTop(this.top)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  width: 750px;
  height: 1347px;
  background: url('../assets/img/background.png') no-repeat;
  background-size: 750px 1347px;
  position: relative;
  overflow: hidden;
  .coverLayer {
    position: absolute;
    width: 750px;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    z-index: 99;
  }
  img {
    position: absolute;
  }
  .avtivity-rules {
    position: absolute;
    height: 23px;
    line-height: 23px;
    top: 30px;
    left: 28px;
    font-size: 20px;
    color: rgba(255, 254, 254, 0.8); // #fffefe
    font-family: 'FZY3JW';
    border-bottom: 1px solid rgba(255, 254, 254, 0.8);
    z-index: 2;
  }
  .check-prizes {
    position: absolute;
    width: 139px;
    height: 38px;
    // line-height: 38px !important; // 移动端有偏差
    display: flex;
    align-items: center;
    background: rgba(149, 27, 82, 0.8); // #951B52
    font-family: 'FZY3JW';
    font-size: 20px;
    color: rgba(255, 254, 254, 0.8);
    border-radius: 19px;
    padding-left: 20px;
    box-sizing: border-box;
    border: 1px solid #fff;
    right: -26px;
    top: 20px;
    z-index: 2;
  }
  // 标题
  .icon-title {
    width: 618px;
    height: 245px;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .icon-leftman {
    width: 113px;
    height: 167px;
    top: 850px;
    left: 52px;
  }
  .icon-rightman {
    width: 135px;
    height: 158x;
    top: 855px;
    right: 25px;
  }
  .icon-standman {
    height: 100px;
    top: 801px;
    right: 37px;
  }
  // 转盘+底盘
  .turntable {
    width: 658px;
    height: 753px;
    position: absolute;
    top: 273px;
    left: 47px;
    // 转盘
    .table {
      position: absolute;
      width: 647px;
      left: 5px;
      top: 6px;
      z-index: 2;
      .icon-outside-ellipse {
        width: 647px;
      }
      .icon-horse-lamp {
        width: 634px;
        left: 10px;
        top: 8px;
        // transform: rotate(30deg);
      }
      .icon-inside-ellipse {
        width: 595px;
        height: 595px;
        top: 27px;
        left: 27px;
      }
      .icon-table-prizes {
        width: 560px;
        height: 560px;
        top: 44px;
        left: 44px;
        transition: 5s all ease;
      }
      .pointer {
        width: 198px;
        height: 238px;
        position: absolute;
        top: 185px;
        left: 226px;
        -webkit-tab-highlight-color: rgba(0, 0, 0, 0);
        .icon-pointer {
          width: 198px;
          height: 238px;
        }
        p {
          position: absolute;
          width: 198px;
        }
        .text1 {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 100px;
          font-size: 40px;
          color: #fff;
          font-family: 'FZY3Jw';
          text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
          letter-spacing: 2px;
        }
        .text2 {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 20px;
          font-family: 'FZY3Jw';
          text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
          color: #fff;
          top: 150px;
          font-size: 20px;
          letter-spacing: 3px;
        }
      }
    }
    // 底盘
    .chassis {
      width: 352px;
      position: absolute;
      top: 597px;
      left: 152px;
      z-index: 1;
      .icon-chassis {
        height: 131px;
        z-index: 3;
      }
      .icon-chassis-shape {
        width: 362px;
        height: 25px;
        top: 116px;
        left: -5px;
        z-index: 2;
      }
      .icon-chassis-shadow {
        width: 431px;
        height: 50px;
        top: 106px;
        left: -39px;
        z-index: 1;
      }
    }
  }
  // 中奖名单轮播
  .winner-list-display {
    width: 445px;
    height: 44px;
    position: absolute;
    top: 1058px;
    left: 50%;
    transform: translateX(-50%);
    background: #4f15c5;
    border-radius: 22px;
    line-height: 44px;
    text-align: center;
    color: #a580db;
    font-size: 20px;
  }
  // 轮播
  .wheel-planting {
    width: 750px;
    height: 241px;
    position: absolute;
    top: 1115px;
    padding-top: 50px;
    box-sizing: border-box;
    .planting-rectangle {
      width: 750px;
      height: 211px;
      position: absolute;
      top: 21px;
    }
    .planting-boundary1 {
      position: absolute;
      width: 800px;
      top: 1px;
      left: -30px;
      z-index: 3;
    }
    .planting-boundary2 {
      position: absolute;
      top: 0px;
      height: 48px;
      left: 0;
      z-index: 2;
    }
    .contain {
      width: 693px;
      height: 151px;
      margin-left: 50%;
      transform: translateX(-50%);
      background: #3b0593;
      opacity: 1;
      border-radius: 8px;
      position: relative;
      .left-arrow, .right-arrow {
        width: 32px;
        height: 124px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #350483;
        border-radius: 3px;
        margin-top: 0;
      }
      .left-arrow {
        left: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        .arrow {
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-right: 8px solid #987fc0;
          border-bottom: 8px solid transparent;
          border-left: 8px solid transparent;
          position: relative;
          transform: translateX(-25%);
          &:after {
            content: '';
            position: absolute;
            border-top: 8px solid transparent;
            border-right: 8px solid #350483;
            border-bottom: 8px solid transparent;
            border-left: 8px solid transparent;
            top: -8px;
            left: -6px;
          }
        }
      }
      .right-arrow {
        right: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        .arrow {
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 8px solid #987fc0;
          position: relative;
          transform: translateX(25%);
          &:after {
            content: '';
            position: absolute;
            border-top: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid #350483;
            top: -8px;
            left: -10px;
          }
        }
      }
      .box {
        width: 544px;
        height: 110px;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        .prizes {
          width: 544px;
          height: 110px;
          .prize {
            width: 136px;
            height: 110px;
            float: left;
            text-align: center;
            color: #d0baf1;
            font-size: 16px;
            .image {
              width: 100%;
              height: 80px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 11px;
              .imgSize {
                height: 80px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
