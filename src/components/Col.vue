<template lang="html">
  <div :class="['z-col-' + span, offset ? 'z-col-offset-' + offset : '', push ? 'z-col-push-' + push : '', pull ? 'z-col-pull-' + pull : '']" :style="{'padding-left': gutter/2 + 'px', 'padding-right': gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-col',

  props: {
    span: {
      type: Number,
      require: true
    },

    offset: Number,
    push: Number,
    pull: Number
  },

  computed: {
    gutter() {
      return this.$parent.gutter
    }
  }
};
</script>

<style lang="less">
.z-col-24, .z-col-23, .z-col-22, .z-col-21, .z-col-20, .z-col-19, .z-col-18, .z-col-17, .z-col-16, .z-col-15, .z-col-14, .z-col-13, .z-col-12, .z-col-11, .z-col-10, .z-col-9, .z-col-8, .z-col-7, .z-col-6, .z-col-5, .z-col-4,.z-col-3, .z-col-2, .z-col-1 {
  box-sizing: border-box;
  float: left;
  position: relative;
}

.z-col-24 {
  width: 100%;
}

.z-col-23 {
  width: 100%/24*23;
}

.z-col-22 {
  width: 100%/24*22;
}

.z-col-21 {
  width: 100%/24*21;
}

.z-col-20 {
  width: 100%/24*20;
}

.z-col-19 {
  width: 100%/24*19;
}

.z-col-18 {
  width: 100%/24*18;
}

.z-col-17 {
  width: 100%/24*17;
}

.z-col-16 {
  width: 100%/24*16;
}

.z-col-15 {
  width: 100%/24*15;
}

.z-col-14 {
  width: 100%/24*14;
}

.z-col-13 {
  width: 100%/24*13;
}

.z-col-12 {
  width: 50%;
}

.z-col-11 {
  width: 100%/24*11;
}

.z-col-10 {
  width: 100%/24*10;
}

.z-col-9 {
  width: 100%/24*9;
}

.z-col-8 {
  width: 100%/3;
}

.z-col-7 {
  width: 100%/24*7;
}

.z-col-6 {
  width: 100%/4;
}

.z-col-5 {
  width: 100%/24*5;
}

.z-col-4 {
  width: 100%/6;
}

.z-col-3 {
  width: 100%/8;
}

.z-col-2 {
  width: 100%/12;
}

.z-col-1 {
  width: 100%/24;
}

// 偏移
.z-col-offset-24 {
  margin-left: 100%;
}

.z-col-offset-23 {
  margin-left: 100%/24*23;
}

.z-col-offset-22 {
  margin-left: 100%/24*22;
}

.z-col-offset-21 {
  margin-left: 100%/24*21;
}

.z-col-offset-20 {
  margin-left: 100%/24*20;
}

.z-col-offset-19 {
  margin-left: 100%/24*19;
}

.z-col-offset-18 {
  margin-left: 100%/24*18;
}

.z-col-offset-17 {
  margin-left: 100%/24*17;
}

.z-col-offset-16 {
  margin-left: 100%/24*16;
}

.z-col-offset-15 {
  margin-left: 100%/24*15;
}

.z-col-offset-14 {
  margin-left: 100%/24*14;
}

.z-col-offset-13 {
  margin-left: 100%/24*13;
}

.z-col-offset-12 {
  margin-left: 50%;
}

.z-col-offset-11 {
  margin-left: 100%/24*11;
}

.z-col-offset-10 {
  margin-left: 100%/24*10;
}

.z-col-offset-9 {
  margin-left: 100%/24*9;
}

.z-col-offset-8 {
  margin-left: 100%/3;
}

.z-col-offset-7 {
  margin-left: 100%/24*7;
}

.z-col-offset-6 {
  margin-left: 100%/4;
}

.z-col-offset-5 {
  margin-left: 100%/24*5;
}

.z-col-offset-4 {
  margin-left: 100%/6;
}

.z-col-offset-3 {
  margin-left: 100%/8;
}

.z-col-offset-2 {
  margin-left: 100%/12;
}

.z-col-offset-1 {
  margin-left: 100%/24;
}

// 排序
.z-col-push-24 {
  left: 100%;
}

.z-col-push-23 {
  left: 100%/24*23;
}

.z-col-push-22 {
  left: 100%/24*22;
}

.z-col-push-21 {
  left: 100%/24*21;
}

.z-col-push-20 {
  left: 100%/24*20;
}

.z-col-push-19 {
  left: 100%/24*19;
}

.z-col-push-18 {
  left: 100%/24*18;
}

.z-col-push-17 {
  left: 100%/24*17;
}

.z-col-push-16 {
  left: 100%/24*16;
}

.z-col-push-15 {
  left: 100%/24*15;
}

.z-col-push-14 {
  left: 100%/24*14;
}

.z-col-push-13 {
  left: 100%/24*13;
}

.z-col-push-12 {
  left: 50%;
}

.z-col-push-11 {
  left: 100%/24*11;
}

.z-col-push-10 {
  left: 100%/24*10;
}

.z-col-push-9 {
  left: 100%/24*9;
}

.z-col-push-8 {
  left: 100%/3;
}

.z-col-push-7 {
  left: 100%/24*7;
}

.z-col-push-6 {
  left: 100%/4;
}

.z-col-push-5 {
  left: 100%/24*5;
}

.z-col-push-4 {
  left: 100%/6;
}

.z-col-push-3 {
  left: 100%/8;
}

.z-col-push-2 {
  left: 100%/12;
}

.z-col-push-1 {
  left: 100%/24;
}

.z-col-pull-24 {
  right: 100%;
}

.z-col-pull-23 {
  right: 100%/24*23;
}

.z-col-pull-22 {
  right: 100%/24*22;
}

.z-col-pull-21 {
  right: 100%/24*21;
}

.z-col-pull-20 {
  right: 100%/24*20;
}

.z-col-pull-19 {
  right: 100%/24*19;
}

.z-col-pull-18 {
  right: 100%/24*18;
}

.z-col-pull-17 {
  right: 100%/24*17;
}

.z-col-pull-16 {
  right: 100%/24*16;
}

.z-col-pull-15 {
  right: 100%/24*15;
}

.z-col-pull-14 {
  right: 100%/24*14;
}

.z-col-pull-13 {
  right: 100%/24*13;
}

.z-col-pull-12 {
  right: 50%;
}

.z-col-pull-11 {
  right: 100%/24*11;
}

.z-col-pull-10 {
  right: 100%/24*10;
}

.z-col-pull-9 {
  right: 100%/24*9;
}

.z-col-pull-8 {
  right: 100%/3;
}

.z-col-pull-7 {
  right: 100%/24*7;
}

.z-col-pull-6 {
  right: 100%/4;
}

.z-col-pull-5 {
  right: 100%/24*5;
}

.z-col-pull-4 {
  right: 100%/6;
}

.z-col-pull-3 {
  right: 100%/8;
}

.z-col-pull-2 {
  right: 100%/12;
}

.z-col-pull-1 {
  right: 100%/24;
}
</style>
