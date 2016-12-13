<template lang="html">
  <div class="z-backtop-wrapper" @click="goTop" :class="{'show-top': isShowTop}">
    <slot>
      <i class="iconfont icon-top"></i>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'z-top',

  data() {
    return {
      isShowTop: false
    }
  },

  props: {
    // 滚动速度
    acceleration: {
      type: Number,
      default: 0.5
    },

    // 每次滚动的时间间隔
    stime: {
      type: Number,
      default: 10
    },

    scrollTop: {
      type: Number,
      default: 0
    }
  },

  mounted() {
    if (this.scrollTop <= 0) {
      this.isShowTop = true
      return false
    } else {
      let self = this
      addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY
        if (scrollTop >= self.scrollTop) {
          self.isShowTop = true
        } else {
          self.isShowTop = false
        }
      })
    }
  },

  methods: {
    goTop: function() {
      let self = this
      const acceleration = self.acceleration
      const stime = self.stime
      let x1 = 0
      let y1 = 0
      let x2 = 0
      let y2 = 0
      let x3 = 0
      let y3 = 0
      if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0
        y1 = document.documentElement.scrollTop || 0
      }
      if (document.body) {
        x2 = document.body.scrollLeft || 0
        y2 = document.body.scrollTop || 0
      }
      x3 = window.scrollX || 0
      y3 = window.scrollY || 0

      // 滚动条到页面顶部的水平距离
      let x = Math.max(x1, Math.max(x2, x3))
      // 滚动条到页面顶部的垂直距离
      let y = Math.max(y1, Math.max(y2, y3))


      // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
      let speeding = 1 + acceleration
      window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding))

      // 如果距离不为零, 继续调用函数
      if (x > 0 || y > 0) {
        window.setTimeout(self.goTop, stime)
      }
    }
  }
};
</script>

<style lang="less">
.z-backtop-wrapper {
  position: fixed;
  right: 100px;
  bottom: 100px;
  z-index: 99999;
  cursor: pointer;
  transition: all .2s;
  opacity: 0;
  visibility: hidden;

  i {
    font-size: 42px;
  }
}

.show-top {
  opacity: 1;
  visibility: visible;
}
</style>
