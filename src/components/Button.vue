<template lang="html">
  <button class="z-btn" :class="['z-btn-' + type, {'is-loading': loading}, {'is-disabled': disabled}]" @click="onClick">
    <i class="iconfont icon-loading" v-if="loading"></i>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'z-button',
  props: {
    type: {
      type: String,
      default: "default"
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type:Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      if (this.loading || this.disabled) {
        return
      }

      this.$emit('click')
    }
  }
};
</script>

<style lang="less" scoped>
.z-btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #bfcbd9;
  color: #1f2d3d;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  user-select: none;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
}
.z-btn:focus {
  outline: none;
}
.z-btn:active {
  -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
  box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
}

.z-btn.is-loading {
  position: relative;
  cursor: not-allowed;

  &:before {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: hsla(0,0%,100%,.35);
  }
}

.z-btn.is-disabled {
  background-color: #999;
  border-color: #999;
  color: #fff;
  cursor: not-allowed;

  &:hover {
    background-color: #999;
    border-color: #999;
    color: #fff;
  }
}

.z-btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.z-btn-default:hover {
  background-color: #e6e6e6;
  border-color: #adadad;
}

.z-btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
}
.z-btn-primary:hover {
  background-color: #3071a9;
  border-color: #285e8e;
}

.z-btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.z-btn-success:hover {
  background-color: #449d44;
  border-color: #398439;
}

.z-btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.z-btn-info:hover {
  background-color: #31b0d5;
  border-color: #269abc;
}

.z-btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.z-btn-warning:hover {
  background-color: #ec971f;
  border-color: #d58512;
}

.z-btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.z-btn-danger:hover {
  background-color: #c9302c;
  border-color: #ac2925;
}

.icon-loading {
  animation: rotating 1s linear infinite;
  font-size: inherit;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>
