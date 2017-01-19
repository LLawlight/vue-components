<template lang="html">
  <div class="z-aside-wrapper">
    <z-dimmer :show="show" @click="closeAside"></z-dimmer>
    <transition name="z-aside-slide">
      <div class="z-aside" v-show="show" :class="'z-aside-' + type">
        <div class="z-aside-title" v-if="title">{{title}}</div>
        <div class="z-aside-content">
          <slot></slot>
        </div>
        <a class="z-aside-footer" @click="closeAside">{{closeText}}</a>
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
    closeText: {
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
      this.$emit('close')
    }
  }
};
</script>

<style lang="css" scoped>
.z-aside {
  background-color: #fff;
  position: fixed;
  z-index: 3000;
  transition: all .2s ease;
}

.z-aside-left {
  height: 100%;
  left: 0;
  top: 0;
}

.z-aside-slide-enter.z-aside-left, .z-aside-slide-leave-active.z-aside-left {
  transform: translateX(-100%);
}

.z-aside-right {
  height: 100%;
  right: 0;
  top: 0;
}

.z-aside-slide-enter.z-aside-right, .z-aside-slide-leave-active.z-aside-right {
  transform: translateX(100%);
}

.z-aside-top {
  width: 100%;
  top: 0;
  left: 0;
}

.z-aside-slide-enter.z-aside-top, .z-aside-slide-leave-active.z-aside-top {
  transform: translateY(-100%);
}

.z-aside-bottom {
  width: 100%;
  bottom: 0;
  left: 0;
}

.z-aside-slide-enter.z-aside-bottom, .z-aside-slide-leave-active.z-aside-bottom {
  transform: translateY(100%);
}

.z-aside-title {
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #fff;
}

.z-aside-content {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  font-size: 14px;
  box-sizing: border-box;
  padding: 54px 10px;
}

.z-aside-footer {
  height: 44px;
  line-height: 44px;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
}
</style>
