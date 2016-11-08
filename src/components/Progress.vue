<template lang="html">
  <div class="z-progress-wraper" v-show="isShowProgress" :class="{'z-progress-top': type == 'top','z-progress-bottom': type == 'bottom'}">
    <div class="z-progress" :style="{'width': progress + '%', 'background-color': bgc}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      progress: 0,
      timer: null,
      outTimer: null,
      isShowProgress: false
    }
  },
  props: {
    bgc: {
      type: String,
      default: '#0080ff'
    },
    type: {
      type: String,
      default: 'top'
    }
  },
  methods: {
    progressing: function() {
      this.progress = this.progress + Math.random() * (99 - this.width)
      this.width = this.progress
    },
    runProgress: function() {
      if (document.readyState != 'complete') {
        this.progressing()
      }else {
        clearInterval(this.timer)
        this.progress = 100
        let self = this
        this.outTimer = setTimeout(function() {
          self.isShowProgress = false
          self.resetProgress()
        },500)
      }
    },
    resetProgress: function() {
      this.progress = 0
      this.width = 0
    },
    startProgress: function() {
      clearInterval(this.timer)
      clearTimeout(this.outTimer)
      this.resetProgress()
      this.isShowProgress = true
      this.progressing()
      this.timer = setInterval(this.runProgress, 500)
    }
  }
};
</script>

<style lang="less">
.z-progress-wraper {
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 4px;
  background-color: #fff;

  .z-progress {
    height: 100%;
    transition: all .5s ease-out;
  }
}

.z-progress-top {
  top: 0;
}
.z-progress-bottom {
  bottom: 0;
}
</style>
