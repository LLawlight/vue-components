<template lang="html">
  <transition name="z-aside-slide">
    <div class="z-supernatant" v-show="show">
      <transition>
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
  </transition>
</template>

<script>
export default {
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
      this.$emit('closeAside')
    }
  }
};
</script>

<style lang="css" scoped>
.z-supernatant {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.z-aside-slide-enter, .z-aside-slide-leave-active {
  opacity: 0;
}

.z-aside {
  background-color: white;
  position: fixed;
  transition: all .3s ease;
}

.z-aside-left {
  height: 100%;
  left: 0;
}

.z-aside-right {
  height: 100%;
  right: 0;
}

.z-aside-top {
  width: 100%;
  top: 0;
}

.z-aside-bottom {
  width: 100%;
  bottom: 0;
}
@media screen and (max-width: 768px) {
  .z-aside-left {
    width: 100%;
  }
  .z-aside-slide-enter .z-aside-left, .z-aside-slide-leave-active .z-aside-left {
    left: -100%;
  }

  .z-aside-right {
    width: 100%;
  }
  .z-aside-slide-enter .z-aside-right, .z-aside-slide-leave-active .z-aside-right {
    right: -100%;
  }

  .z-aside-top {
    height: 100%;
  }
  .z-aside-slide-enter .z-aside-top, .z-aside-slide-leave-active .z-aside-top {
    top: -100%;
  }

  .z-aside-bottom {
    height: 100%;
  }
  .z-aside-slide-enter .z-aside-bottom, .z-aside-slide-leave-active .z-aside-bottom {
    bottom: -100%;
  }
}

@media screen and (min-width: 768px) {
  .z-aside-left {
    width: 300px;
  }
  .z-aside-slide-enter .z-aside-left, .z-aside-slide-leave-active .z-aside-left {
    left: -300px;
  }

  .z-aside-right {
    width: 300px;
  }
  .z-aside-slide-enter .z-aside-right, .z-aside-slide-leave-active .z-aside-right {
    right: -300px;
  }

  .z-aside-top {
    height: 300px;
  }
  .z-aside-slide-enter .z-aside-top, .z-aside-slide-leave-active .z-aside-top {
    top: -300px;
  }

  .z-aside-bottom {
    height: 300px;
  }
  .z-aside-slide-enter .z-aside-bottom, .z-aside-slide-leave-active .z-aside-bottom {
    bottom: -300px;
  }
}

.z-aside-title {
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  position: absolute;
  top: 0;
  width: 100%;
}

.z-aside-content {
  width: 100%;
  overflow: auto;
  position: absolute;
  top: 44px;
  bottom: 44px;
  padding: 10px;
  font-size: 14px;
  box-sizing: border-box;
}

.z-aside-footer {
  height: 44px;
  width: 100%;
  position: absolute;
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
