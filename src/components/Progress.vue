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
      isShowProgress: true
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
  mounted() {
    this.progressing()
    this.timer = setInterval(this.runProgress, 500)
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
        setTimeout(function() {
          self.isShowProgress = false
        },500)
      }
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
