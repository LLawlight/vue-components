<template lang="html">
  <div class="z-supernatant" v-show="show" transition="z-dimmer">
    <div class="z-aside" v-show="show" :transition="'z-aside-'+type">
      <div class="z-aside-title" v-if="title">
        {{title}}
      </div>
      <div class="z-aside-content">
        <slot></slot>
      </div>
      <div class="z-aside-footer">
        <a class="z-btn-aside" @click="show = false">{{close}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    close: {
      type: String,
      default: "关闭"
    },
    show: {
      type: Boolean,
      twoWay: true,
      default: false
    },
    title: {
      type: String
    },
    type: {
      type: String,
      default: "left"
    }
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
.z-supernatant {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
}

.z-dimmer-transition {
  transition: all .3s ease;
}
.z-dimmer-enter, .z-dimmer-leave {
  opacity: 0;
}

.z-aside {
  background-color: white;
  position: fixed;
  transition: all .3s ease;
}

.z-aside-left-transition {
  height: 100%;
  width:300px;
  left: 0;
}
.z-aside-left-enter, .z-aside-left-leave {
  left: -300px;
}

.z-aside-right-transition {
  height: 100%;
  width:300px;
  right: 0;
}
.z-aside-right-enter, .z-aside-right-leave {
  right: -300px;
}

.z-aside-top-transition {
  width: 100%;
  height: 300px;
  top: 0;
}
.z-aside-top-enter, .z-aside-top-leave {
  top: -300px;
}

.z-aside-bottom-transition {
  width: 100%;
  height: 300px;
  bottom: 0;
}
.z-aside-bottom-enter, .z-aside-bottom-leave {
  bottom: -300px;
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
