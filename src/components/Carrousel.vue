<template lang="html">
  <div id="z-carrousel-wrapper" class="z-carrousel-wrapper"
  :style="{'width': width + 'px', 'height': height + 'px'}"
  @touchstart.stop="startTouch"
  @touchmove.stop.prevent="moveTouch"
  @touchend.stop.prevent="endTouch">
    <ul id="z-carrousel" :style="{'width': images.length * width + 'px', 'height': height + 'px', 'transform': isTouch ? 'translateX(-' + offsetX + 'px)' : 'translateX(-' + (i * width) + 'px)'}" :class="{'is-transition': isTransition}">
      <li v-for="image in images">
        <a :href="image.href">
          <z-imageinput
          :width="width"
          :height="height"
          :src="image.src"
          v-if="isImagesReady">
          </z-imageinput>
        </a>
      </li>
    </ul>
    <ul class="dots">
      <li v-if="isPc" v-for="(li, index) in images.length - 2" class="dot" :class="{'is-current': (index === (i - 1)) || ((index === 0) && (i === images.length - 1)) || ((index === images.length - 3) && (i === 0))}" @click.stop.prevent="chooseImage(index)">{{isShowIndex ? (index + 1) : ''}}</li>
      <li v-if="!isPc" v-for="(li, index) in images.length - 2" class="dot" :class="{'is-current': (index === (i - 1)) || ((index === 0) && (i === images.length - 1)) || ((index === images.length - 3) && (i === 0))}" @touchstart.stop.prevent="chooseImage(index)" @touchmove.stop.prevent="" @touchend.stop.prevent="">{{isShowIndex ? (index + 1) : ''}}</li>
    </ul>
  </div>
</template>

<script>
import zImageinput from './ImageInput.vue'

export default {
  name: 'z-carrousel',

  data() {
    return {
      i: 1,
      isTransition: true,
      timer: null,
      isTouch: false,
      startX: 0,
      pageX: 0,
      offsetX: 0,
      touchTime: 0,
      offsetTime: 0,
      isImagesReady: false
    };
  },

  props: {
    width: {
      type: Number,
      require: true
    },
    height: {
      type: Number,
      require: true
    },
    images: {
      type: Array,
      require: true
    },
    delay: {
      type: Number,
      default: 3000
    },
    isShowIndex: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'next'
    }
  },

  mounted() {
    this.images.unshift(this.images[this.images.length - 1])
    this.images.push(this.images[1])

    this.isImagesReady = true

    this.startCarrousel(this.type)

    let that = this
    //  监听动画，动画结束才把收尾从假的切换为真的
    document.getElementById("z-carrousel").addEventListener("transitionend", function() {
      if (that.i >= that.images.length - 1) {
        that.isTransition = false
        that.i = 1
      } else if (that.i <= 0) {
        that.isTransition = false
        that.i = that.images.length - 2
      }
    });
  },

  components: {
    zImageinput
  },

  watch: {
    //  当手指移动时，轮播图也跟着动
    'pageX': function(newVal, oldVal) {
      if (oldVal !== 0 && this.isTouch === true) {
        this.offsetX = this.offsetX + (oldVal - newVal)
      }
    },

    //  两次touchstart的时间差
    'touchTime': function(newVal, oldVal) {
      if (oldVal !== 0) {
        this.offsetTime = newVal - oldVal
      }
    }
  },

  computed: {
    'isPc': function() {
      const userAgentInfo = navigator.userAgent;
      const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
      let flag = true;
      for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    }
  },

  methods: {
    startTouch(event) {
      //  先停止动画
      this.stopCarrousel()

      const touch = event.targetTouches[0];

      //  记录触摸瞬间的时间
      this.touchTime = new Date().getTime();

      //  记录触摸位置
      this.pageX = touch.pageX;
      this.startX = this.pageX

      // 轮播图的偏移量开始以手指为准
      this.offsetX = this.i * this.width
      this.isTouch = true

      //  防止屏幕纵向滚动
      document.body.addEventListener('touchmove touchstart', function(event) {
        event.preventDefault()
        event.stopPropagation()
      });
    },

    moveTouch(event) {
      const touch = event.targetTouches[0]

      // 继续记录手指的位置
      this.pageX = touch.pageX;

      //  防止屏幕纵向滚动
      document.body.addEventListener('touchmove touchstart', function(event) {
        event.preventDefault()
        event.stopPropagation()
      });
    },

    endTouch() {
      this.isTransition = true

      // 滑动距离超过图片区域一半，就切换对应方向的图片
      if (this.pageX - this.startX > this.width / 2) {
        this.i--
      } else if (this.startX - this.pageX > this.width / 2) {
        this.i++
      }

      // 记录值清零，重新以轮播图宽度为单位进行切换
      this.pageX = 0
      this.offsetX = 0
      this.isTouch = false

      // 继续自动轮播
      this.startCarrousel()
    },

    startCarrousel(type) {
      let that = this
      that.timer = setInterval(function() {
        that.isTransition = true
        if (that.type === 'pre') {
          that.i--
        } else {
          that.i++
        }
      }, that.delay)
    },

    stopCarrousel() {
      clearInterval(this.timer)
      this.timer = null
    },

    chooseImage(index) {
      this.stopCarrousel()

      this.isTransition = true
      this.i = index + 1

      this.startCarrousel()
    }
  }
};
</script>

<style lang="less">
.z-carrousel-wrapper {
  overflow: hidden;

  ul {
    white-space: nowrap;
    font-size: 0;

    li {
      list-style: none;
      display: inline-block;
    }
  }

  ul.is-transition {
    transition: all 300ms ease-out;
  }

  ul.dots {
    position: relative;
    bottom: 25px;
    text-align: center;

    li.dot {
      width: 20px;
      height: 20px;
      line-height: 20px;
      border-radius: 100%;
      margin: 0 5px;
      background-color: #ccc;
      cursor: pointer;
      color: #fff;
      font-size: 12px;
      text-align: center;
    }

    li.is-current {
      background-color: #41b883;
    }
  }
}
</style>
