<template lang="html">
  <label class="z-checkbox-wrapper">
    <span :class="['z-checkbox', {'z-checkbox-checked': trueValue}, {'z-checkbox-disabled': disabled}]"></span>
    <input type="checkbox" v-model="trueValue" :value="label" :disabled="disabled" :name="name" />
    {{label}}
  </label>
</template>

<script>
export default {
  name: 'z-checkbox',

  data() {
    return {
      trueValue: this.value
    }
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number],
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: String
  },

  computed: {
    isChecked() {
      return this.trueValue === this.label
    }
  }
};
</script>

<style lang="less" scoped>
.z-checkbox-wrapper {
  user-select: none;
}

.z-checkbox {
  display: inline-block;
  position: relative;
  width: 15px;
  height: 15px;
  background-image: url('../../static/checkbox.png');
  background-position: 76px 18px;
  vertical-align: middle;
}

.z-checkbox-checked {
  background-image: url('../../static/checkbox.png');
  background-position: 41px 18px;
}

input {
  display: none;
}
</style>
