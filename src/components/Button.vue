<template lang="html">
  <a :class="'z-btn z-btn-' + type">{{text}}</a>
</template>

<script>
export default {
  name: 'z-button',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "default"
    }
  }
};
</script>

<style lang="css" scoped>
.z-btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.z-btn:focus {
  outline: none;
}
.z-btn:active {
  -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
  box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
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
</style>
