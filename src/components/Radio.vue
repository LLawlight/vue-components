<template lang="html">
  <label class="z-radio-wrapper">
    <span :class="['z-radio', {'z-radio-checked': isChecked}, {'z-radio-disabled': disabled}]"></span>
    <input type="radio" v-model="trueValue" :value="label" :disabled="disabled" :name="name" />
    {{label}}
  </label>
</template>

<script>
export default {
  name: 'z-radio',

  data() {
    return {
      trueValue: this.value
    }
  },

  props: {
    value: [String, Number],
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
.z-radio {
  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 2px solid #333;
}

.z-radio-checked {
  border: 2px solid red;

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: red;
  }
}

.z-radio-disabled {
  border: 2px solid #999;

  &:after {
    background-color: #999;
  }
}

input {
  display: none;
}
</style>
