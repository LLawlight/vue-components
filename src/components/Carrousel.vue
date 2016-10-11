<template lang="html">
  <div :style="{width: width + 'px', height: height + 'px'}" style="overflow:hidden;" class="z-carrousel-container">
    <ul :id=id :style="{width: ulWidth + 'px', height: height + 'px', left: ulLeft + 'px'}">
      <li v-for="li in lis" :style="{width: width + 'px', height: height + 'px'}"><a :href="li.link"><img :src="li.src" /></a></li>
    </ul>
    <ul class="z-dots"><li v-for="index in lis.length-2" :class="{'active':liIndex == index}" @click="chooseImage(index)"></li></ul>
    <span class="z-arrow z-arrow-left" @click="preImg">&lt;</span>
    <span class="z-arrow z-arrow-right" @click="nextImg">&gt;</span>
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
    preImg: function() {
      clearInterval(this.autoplayTimer)
      if (this.timer) {
        return false
      }
      var self = this
      if (this.ulLeft >= -this.width) {
        this.ulLeft = -this.width * (this.lis.length - 1)
      }
      var offsetLeft = this.ulLeft + this.width
      self.timer = setInterval(function(){
        if (self.ulLeft >= offsetLeft) {
          clearInterval(self.timer)
          self.timer = 0
          self.ulLeft = offsetLeft
          self.autoplay()
        }else {
          self.ulLeft = self.ulLeft + self.width/50
        }
      },10)
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
          self.ulLeft = self.ulLeft - self.width/50
        }
      },10)
    },
    autoplay: function() {
      var self = this
      this.autoplayTimer = setInterval(self.nextImg, self.delay)
    },
    chooseImage: function(index) {
      clearInterval(this.timer)
      this.timer = 0
      clearInterval(this.autoplayTimer)
      this.ulLeft = -index * this.width
      this.autoplay()
    }
  }
};
</script>

<style lang="css" scoped>
.z-carrousel-container {
  position: relative;
  overflow: hidden;
}

.z-carrousel-container>ul {
  position: absolute;
}

.z-carrousel-container li {
  list-style: none;
  position: relative;
  float: left;
  overflow: hidden;
}

.z-carrousel-container img {
  position: absolute;
  display: inline-block;
}

.z-dots {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  margin-bottom: 5px;
}

.z-dots>li {
  border-radius: 100%;
  border: 1px solid #fff;
  width: 8px;
  height: 8px;
  margin: 0 5px;
  cursor: pointer;
}

.z-dots>li.active {
  background-color: rgb(65, 184, 131);
}

.z-arrow {
  background-color: #ccc;
  opacity: 0.5;
  padding: 15px 10px;
  font-weight: bold;
  font-family: Simsun,Simhei,sans-serif;
  cursor: pointer;
  position: absolute;
  font-size: 1.5rem;
}
.z-arrow-left {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.z-arrow-right {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
