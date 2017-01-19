<template lang="html">
    <div class="z-modal-wrapper">
      <z-dimmer :show="show"></z-dimmer>
      <transition name="z-modal-expand">
        <div class="z-modal" v-show="show">
          <div class="z-modal-title">
            {{title}}
          </div>
          <div class="z-modal-content">
            {{content}}
          </div>
          <div class="z-modal-footer">
            <a class="z-btn-modal" @click="cancelFunc" v-if="type=='confirm'">{{cancel}}</a>
            <a class="z-btn-modal" :class="{'z-btn-modal-sure': type=='confirm'}" @click="sureFunc">{{sure}}</a>
          </div>
        </div>
      </transition>
    </div>

</template>

<script>
export default {
  name: 'z-modal',
  props: {
    sure: {
      type: String,
      default: "确定"
    },
    cancel: {
      type: String,
      default: "取消"
    },
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: "提示"
    },
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "alert"
    },
    sureEvent: {
      type: Function,
      default: function() {}
    },
    cancelEvent: {
      type: Function,
      default: function() {}
    }
  },
  methods: {
    sureFunc: function() {
      this.$emit("close")
      this.sureEvent()
    },
    cancelFunc: function() {
      this.$emit("close")
      this.cancelEvent()
    }
  }
};
</script>

<style lang="css" scoped>
  .z-modal {
    width: 300px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    position: fixed;
    z-index: 3000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .z-modal-expand-enter, .z-modal-expand-leave-active {
    opacity: 0;
  }

  .z-modal-expand-enter.z-modal, .z-modal-expand-leave-active.z-modal{
    -webkit-transform: translate(-50%, -50%) scale(0.5);
    transform: translate(-50%, -50%) scale(0.5);
  }

  .z-modal-title {
    line-height: 44px;
    text-align: center;
  }

  .z-modal-content {
    padding: 0 12px 12px;
    text-align: left;
  }

  .z-modal-footer {
    border-top: 1px solid #ccc;
    display: table;
    width: 100%;
  }

  .z-btn-modal {
    display: table-cell;
    text-align: center;
    cursor: pointer;
    line-height: 44px;
  }

  .z-btn-modal:nth-child(2) {
    border-left: 1px solid #ccc;
  }

  .z-btn-modal-sure {
    background-color: rgb(65, 184, 131);
    color: #fff;
  }
</style>
