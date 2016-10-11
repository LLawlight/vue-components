<template lang="html">
  <div class="z-carrousel-container" :style="{width: width + 'px',height: height + 'px'}">
    <ul :style="{width: width * lis.length + 'px',transform: 'translateX(' + offsetX + 'px)'}" :class="{active: isActive}"><li v-for="li in lis" :style="{width: width + 'px',height: height + 'px'}"><img :src="li.link"  :style="{width: width + 'px',height: height + 'px'}" /></li></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lis: [
        {link: "static/01.jpg"},
        {link: "static/02.jpeg"},
        {link: "static/03.jpg"}
      ],
      width: 400,
      height: 300,
      offsetX: '',
      isActive: true,
      autoplayTimer: ''
    }
  },
  mounted() {
    this.offsetX = -this.width
    this.lis.unshift(this.lis[this.lis.length - 1])
    this.lis.push(this.lis[1])

    this.autoplay()
  },
  methods: {
    nextImg: function() {
      this.offsetX = this.offsetX - this.width
    },
    autoplay: function() {
      var self = this
      this.autoplayTimer = setInterval(function(){
        if (self.offsetX == -self.width * (self.lis.length - 1)) {
          self.isActive = false
          self.offsetX = -self.width
          
          self.isActive = true
        }
        self.nextImg()
      }, 2000)
    }
  }
};
</script>

<style lang="css" scoped>
  .z-carrousel-container {
    overflow: hidden;
    position: relative;
  }
  .z-carrousel-container>ul {
    position: absolute;
  }
  .z-carrousel-container>ul.active {
    transition: transform .5s ease;
  }
  .z-carrousel-container>ul>li {
    float: left;
    list-style: none;
  }
</style>
