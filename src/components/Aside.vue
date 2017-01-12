<template lang="html">
  <div class="z-aside-wrapper">
    <z-dimmer :show="show" @click-event="closeAside"></z-dimmer>
    <transition name="z-aside-slide">
      <div class="z-aside" v-show="show" :class="'z-aside-' + type">
        <div class="z-aside-title" v-if="title">
          {{title}}
        </div>
        <div class="z-aside-content">
          <slot></slot>
        </div>
        <div class="z-aside-footer">
          <a class="z-btn-aside" @click="closeAside">{{close}}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'z-aside',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    close: {
      type: String,
      default: "关闭"
    },
    title: {
      type: String
    },
    type: {
      type: String,
      default: "left"
    }
  },
  methods: {
    closeAside: function() {
      this.$emit('close-aside')
    }
  }
};
</script>

<style lang="css" scoped>
.z-aside {
  background-color: white;
  position: fixed;
  z-index: 999;
  transition: all .5s ease;
}

.z-aside-left {
  height: 100%;
  left: 0;
  top: 0;
}

.z-aside-right {
  height: 100%;
  right: 0;
  top: 0;
}

.z-aside-top {
  width: 100%;
  top: 0;
  left: 0;
}

.z-aside-bottom {
  width: 100%;
  bottom: 0;
  left: 0;
}
@media screen and (max-width: 768px) {
  .z-aside-left {
    width: 100%;
  }
  .z-aside-slide-enter.z-aside-left, .z-aside-slide-leave-active.z-aside-left {
    left: -100%;
  }

  .z-aside-right {
    width: 100%;
  }
  .z-aside-slide-enter.z-aside-right, .z-aside-slide-leave-active.z-aside-right {
    right: -100%;
  }

  .z-aside-top {
    height: 100%;
  }
  .z-aside-slide-enter.z-aside-top, .z-aside-slide-leave-active.z-aside-top {
    top: -100%;
  }

  .z-aside-bottom {
    height: 100%;
  }
  .z-aside-slide-enter.z-aside-bottom, .z-aside-slide-leave-active.z-aside-bottom {
    bottom: -100%;
  }
}

@media screen and (min-width: 768px) {
  .z-aside-left {
    width: 300px;
  }
  .z-aside-slide-enter.z-aside-left, .z-aside-slide-leave-active.z-aside-left {
    left: -300px;
  }

  .z-aside-right {
    width: 300px;
  }
  .z-aside-slide-enter.z-aside-right, .z-aside-slide-leave-active.z-aside-right {
    right: -300px;
  }

  .z-aside-top {
    height: 300px;
  }
  .z-aside-slide-enter.z-aside-top, .z-aside-slide-leave-active.z-aside-top {
    top: -300px;
  }

  .z-aside-bottom {
    height: 300px;
  }
  .z-aside-slide-enter.z-aside-bottom, .z-aside-slide-leave-active.z-aside-bottom {
    bottom: -300px;
  }
}

.z-aside-title {
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  position: absolute;
  z-index: 1000;
  top: 0;
  width: 100%;
  background-color: #fff;
}

.z-aside-content {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  padding: 44px 10px;
  font-size: 14px;
  box-sizing: border-box;
}

.z-aside-footer {
  height: 44px;
  width: 100%;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  border-top: 1px solid #ccc;
  background-color: #fff;
}

.z-btn-aside {
  width: 100%;
  display: inline-block;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
}
</style>
