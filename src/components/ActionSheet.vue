<template lang="html">
  <div class="z-actionsheet-wrapper" @touchmove.prevent>
    <z-dimmer :show="show" @click="closeActionSheet"></z-dimmer>
    <transition name="z-actionsheet-items">
      <ul class="z-actionsheet-items" v-show="show">
        <li class="z-actionsheet-title" v-if="title">{{title}}</li>
        <li v-for="li in lis" class="z-actionsheet-item" @click="clickItem(li.id)"><a :href="li.href" target="_blank">{{li.text}}</a></li>
        <li class="z-actionsheet-button" @click="closeActionSheet">{{closeText}}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'z-actionsheet',

  props: {
    show: {
      type: Boolean,
      required: true
    },

    lis: {
      type: Array,
      required: true
    },

    title: String,

    closeText: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    closeActionSheet() {
      this.$emit('close')
    },

    clickItem(id) {
      if (id) {
        this.$emit('click' + id)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.z-dimmer {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.z-actionsheet-items-enter, .z-actionsheet-items-leave-active {
  transform: translateY(100%);
  opacity: 0;
}

.z-actionsheet-items-enter-active, .z-actionsheet-items-leave-active {
  transition: all .2s;
}

.z-actionsheet-items {
  position: fixed;
  z-index: 999;
  left: 0;
  width: 100%;
  bottom: 0;

  li {
    width: 100%;
    text-align: center;
    list-style: none;
    background-color: #fff;

    a {
      padding-top: 15px;
      padding-bottom: 15px;
      display: block;
    }

    &.z-actionsheet-title {
      padding-top: 15px;
      padding-bottom: 15px;
    }

    &.z-actionsheet-item, &.z-actionsheet-title {
      border-bottom: 1px solid #eee;
    }

    &:nth-last-child(2) {
      border-bottom: none;
    }

    &.z-actionsheet-item {
      color: rgb(65, 184, 131);
      cursor: pointer;
    }

    &.z-actionsheet-button {
      margin-top: 5px;
      color: #999;
      cursor: pointer;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
}
</style>
