<template lang="html">
  <div class="z-dropmenu-title">
    <a @click="toggleDropMenu">{{text}}<span class="z-dropmenu-arrow"></span></a>
    <transition name="z-dropmenu-show">
      <ul class="z-dropmenu" v-show="isShow">
        <li v-for="li in lis"><a :href="li.href" @click="closeDropMenu">{{li.text}}</a></li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
    lis: {
      type: Array,
      required: true
    }
  },
  watch: {
    "isShow": function(newVal,oldVal) {
      newVal ? this.clickCloseBind() : this.clickCloseOff()
    }
  },
  methods: {
    toggleDropMenu() {
      this.isShow = !this.isShow
    },
    closeDropMenu() {
      this.isShow = false
    },
    clickClose(event) {
      event.preventDefault()
      event.stopPropagation()
      if (event.target.parentNode !== this.$el && event.target.parentNode.parentNode !== this.$el) {
        this.closeDropMenu()
      }
    },
    clickCloseBind() {
      let self = this
      this.$root.$el.addEventListener("click",self.clickClose)
    },
    clickCloseOff() {
      let self = this
      this.$root.$el.removeEventListener("click",self.clickClose)
    }
  }
}
</script>

<style lang="css" scoped>
.z-dropmenu-title {
  cursor: pointer;
  position: relative;
}
.z-dropmenu-title>a {
  display: block;
  color: #34495e;
}
.z-dropmenu-arrow {
  display: inline-block;
  vertical-align: middle;
  margin-top: -1px;
  margin-left: 6px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #ccc;
}
.z-dropmenu {
  position: absolute;
  z-index: 9999;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-bottom-color: #ccc;
  text-align: left;
  border-radius: 4px;
  overflow: hidden;
  transition: all .3s ease;
}
.z-dropmenu-show-enter-active,.z-dropmenu-show-leave-active {
  top: 100%
}
.z-dropmenu-show-enter,.z-dropmenu-show-leave-active {
  top: 50%;
  opacity: 0;
}
.z-dropmenu li {
  list-style: none;
  line-height: 1.8em;
}
.z-dropmenu li a {
  color: #7f8c8d;
  font-size: 0.9em;
  display: block;
  padding: 0 30px 0 20px;
}
.z-dropmenu li a:hover {
  color: rgb(65, 184, 131);
}
</style>
