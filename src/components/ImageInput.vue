<template lang="html">
  <div :style="{width:width+'px',height:height+'px'}" class="z-image-wraper">
    <img :src="src" :style="{width:imageWidth+'px',height:imageHeight+'px',top:imageTop+'px',left:imageLeft+'px'}" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageWidth: "",
      imageHeight: "",
      imageTop: "",
      imageLeft: "",
      imageRatio: ""
    }
  },
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.getImage()
  },
  methods: {
    getImage: function() {
      var image = new Image()
      image.src = this.src
      var self = this
      image.onload = function() {
        self.imageRatio = image.width/image.height
        self.resetImageSize()
      }
    },
    resetImageSize: function() {
      if (this.width/this.height>this.imageRatio) {
        this.imageWidth = this.width
        this.imageHeight = this.imageWidth / this.imageRatio
        this.imageTop = -(this.imageHeight - this.height) / 2
      } else {
        this.imageHeight = this.height
        this.imageWidth = this.imageHeight * this.imageRatio
        this.imageLeft = -(this.imageWidth - this.width) / 2
      }
    }
  }
};
</script>

<style lang="css" scoped>
  .z-image-wraper {
    display: inline-block;
    overflow: hidden;
    position: relative;
  }
  .z-image-wraper img{
    display: inline-block;
    overflow: hidden;
    position: absolute;
  }
</style>
