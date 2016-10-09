<template lang="html">
  <div :style="{width: width + 'px', height: height + 'px'}" style="overflow:hidden;">
    <ul :id=id :style="{width: ulWidth + 'px', height: height + 'px', left: ulLeft + 'px'}">
      <li v-for="li in lis" :style="{width: width + 'px', height: height + 'px'}"><a :href="li.link"><img :src="li.src" /></a></li>
    </ul>
    <ul class="dots"><li v-for="index in lis.length-2" :class="{active:liIndex == index}"></li></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ulWidth: "",
      ulLeft: "",
      timer: "",
      autoplayTimer: "",
      liIndex: ""
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    lis: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    delay: {
      type: Number,
      default: 5000
    }
  },
  created() {
    this.lis.unshift(this.lis[this.lis.length - 1])
    this.lis.push(this.lis[1])
    this.ulWidth = this.width * this.lis.length
    this.ulLeft = -this.width
  },
  mounted() {
    var self = this
    window.onload = function(){
      var images = document.getElementById(self.id).getElementsByTagName('img')
      for (var i = 0,len = images.length; i < len; i++) {
        self.trimImg(images[i])
      }
      self.autoplay()
    }
  },
  watch: {
    "ulLeft": function() {
      if (this.ulLeft <= -this.width * (this.lis.length - 1)) {
        this.liIndex = 1
      } else {
        this.liIndex = -Math.ceil(this.ulLeft/this.width)
      }
    }
  },
  methods: {
    trimImg: function(img) {
      var imageWidth = img.width
      var imageHeight = img.height
      if ((this.width/this.height) > (imageWidth/imageHeight)) {
        img.style.width = this.width + 'px'
        img.style.top = -(this.width / (imageWidth/imageHeight) - this.height)/2 + 'px'
      }
      else {
        img.style.height = this.height + 'px'
        img.style.left = -(this.height * (imageWidth/imageHeight) - this.width)/2 + 'px'
      }
    },
    nextImg: function() {
      clearInterval(this.autoplayTimer)
      if (this.timer) {
        return false
      }
      var self = this
      if (this.ulLeft <= -this.width * (this.lis.length - 1)) {
        this.ulLeft = -this.width
      }
      var offsetLeft = this.ulLeft - this.width
      self.timer = setInterval(function(){
        if (self.ulLeft <= offsetLeft) {
          clearInterval(self.timer)
          self.timer = 0
          self.ulLeft = offsetLeft
          self.autoplay()
        }else {
          self.ulLeft = self.ulLeft - self.width/100
        }
      },10)
    },
    autoplay: function() {
      this.autoplayTimer = setInterval(this.nextImg, this.delay)
    }
  }
};
</script>

<style lang="css" scoped>
div {
  position: relative;
  overflow: hidden;
}

ul {
  position: absolute;
}

li {
  list-style: none;
  position: relative;
  float: left;
  overflow: hidden;
}

img {
  position: absolute;
  display: inline-block;
}

.dots {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  margin-bottom: 5px;
}

.dots>li {
  border-radius: 100%;
  border: 1px solid #fff;
  width: 8px;
  height: 8px;
  margin: 0 5px;
}

.dots>li.active {
  background-color: rgb(65, 184, 131);
}
</style>
