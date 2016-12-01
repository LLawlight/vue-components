<template lang="html">
  <div class="z-pagination">
    <ul v-if="this.pageCount <= 10">
      <li class="arrow" @click="goPre" :class="{'disabled': !canGoPre}">&lt;</li>
      <li v-for="index in pageCount" :class="{'active': currentPage === index}" @click="goPage(index)">{{index}}</li>
      <li class="arrow" @click="goNext" :class="{'disabled': !canGoNext}">&gt;</li>
    </ul>
    <ul v-else>
      <li class="arrow" @click="goPre" :class="{'disabled': !canGoPre}">&lt;</li>
      <li v-for="index in frontCount" :class="{'active': currentPage === index}" @click="goPage(index)">{{index}}</li>
      <li v-if="isShowPreItemsButton" @click="showPreItems">&hellip;</li>
      <li v-if="isShowMiddle" v-for="index in 6" :class="{'active': currentPage === index - 1 + middleStart}" @click="goPage(index - 1 + middleStart)">{{index - 1 + middleStart}}</li>
      <li v-if="isShowNextItemsButton" @click="showNextItems">&hellip;</li>
      <li v-for="index in behindCount" :class="{'active': currentPage === (index + pageCount - behindCount)}" @click="goPage(index + pageCount - behindCount)">{{index + pageCount - behindCount}}</li>
      <li class="arrow" @click="goNext" :class="{'disabled': !canGoNext}">&gt;</li>
    </ul>

    <div class="input-page" v-if="isJumper">前往第<input type="text" v-model="inputPage" @keydown.enter="changePage"/>页</div>
  </div>
</template>

<script>
export default {
  name: 'z-pagination',

  data: function() {
    return {
      currentPage: this.page,
      canGoPre: true,
      canGoNext: true,
      frontEnd: 8,
      behindStart: 1,
      middleStart: 0,
      isShowPreItemsButton: false,
      isShowNextItemsButton: true,
      inputPage: this.page
    }
  },

  props: {
    total: {
      type: Number,
      require: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      default: 1
    },
    isJumper: {
      type: Boolean,
      default: false
    }
  },

  mounted: function() {
    if (this.pageCount === 1) {
      this.canGoPre = false
      this.canGoNext = false
    } else if (this.currentPage === 1) {
      this.canGoPre = false
    } else if (this.currentPage === this.pageCount) {
      this.canGoNext = false
    }

    if (Number(this.inputPage) < 1) {
      this.currentPage = 1
      this.inputPage = 1
    } else if (Number(this.inputPage) > this.pageCount) {
      this.currentPage = this.pageCount
      this.inputPage = this.pageCount
    } else {
      this.currentPage = Number(this.inputPage)
    }

    this.initPage()
  },

  computed: {
    'pageCount': function() {
      return Math.ceil(this.total / this.pageSize)
    },

    'middleEnd': function() {
      return (this.middleStart + 5)
    },

    'isShowMiddle': function() {
      if (this.isShowPreItemsButton && this.isShowNextItemsButton) {
        return true
      } else {
        return false
      }
    },

    'frontCount': function() {
      if (this.isShowPreItemsButton) {
        return 1
      } else {
        return 8
      }
    },

    'behindCount': function() {
      if (this.isShowNextItemsButton) {
        return 1
      } else {
        return 8
      }
    }
  },

  watch: {
    'currentPage': function(val) {
      this.$emit("current-page", val)

      if (val <= 1) {
        this.currentPage = 1
        this.canGoPre = false
        this.canGoNext = true
      } else if (val >= this.pageCount) {
        this.currentPage = this.pageCount
        this.canGoNext = false
        this.canGoPre = true
      } else {
        this.canGoPre = true
        this.canGoNext = true
      }
    },

    'inputPage': function(val) {
      if (!Number(val)) {
        this.inputPage = ''
      }
    }
  },

  methods: {
    goPage: function(index) {
      if (index === this.pageCount) {
        this.isShowPreItemsButton = true
        this.isShowNextItemsButton = false
      } else if (index === 1) {
        this.isShowPreItemsButton = false
        this.isShowNextItemsButton = true
      }
      this.currentPage = index
    },

    goPre: function() {
      if (!this.canGoPre) {
        return false
      }
      this.currentPage--

      if (((this.behindCount === 8) && (this.currentPage < (this.pageCount - 8 + 1))) || ((this.behindCount === 1) && (this.currentPage < this.middleStart))) {
        this.showPreItems()
      }
    },

    goNext: function() {
      if (!this.canGoNext) {
        return false
      }
      this.currentPage++

      if (((this.frontCount === 8) && (this.currentPage > 8)) || ((this.frontCount === 1) && (this.currentPage > this.middleEnd))) {
        this.showNextItems()
      }
    },

    showPreItems: function() {
      if (this.behindCount === 8) {
        this.isShowNextItemsButton = true
        this.middleStart = this.pageCount - 8- 6 + 1
        this.behindCount = 1
      } else {
        this.middleStart = this.middleStart - 6
      }

      if (this.middleStart < 1) {
        this.frontCount = 8
        this.isShowPreItemsButton = false
      } else {
        this.isShowPreItemsButton = true
      }

      this.currentPage = this.middleEnd
    },

    showNextItems: function() {
      if (this.frontCount === 8) {
        this.isShowPreItemsButton = true
        this.middleStart = 9
        this.frontCount = 1
      } else {
        this.middleStart = this.middleEnd + 1
      }

      if (this.middleEnd >= (this.pageCount - 1)) {
        this.behindCount = 8
        this.isShowNextItemsButton = false
      } else {
        this.isShowNextItemsButton = true
      }

      this.currentPage = this.middleStart
    },

    initPage: function() {
      if ((this.currentPage >=1) && (this.currentPage <=8)) {
        this.frontCount = 8
        this.isShowPreItemsButton = false
        this.isShowNextItemsButton = true
        this.behindCount = 1
      } else if ((this.currentPage <= this.pageCount) && (this.currentPage >= this.pageCount - 8 + 1)) {
        this.frontCount = 1
        this.isShowPreItemsButton = true
        this.isShowNextItemsButton = false
        this.behindCount = 8
      } else {
        this.frontCount = 1
        this.isShowPreItemsButton = true
        this.middleStart = this.currentPage - 3
        this.isShowNextItemsButton = true
        this.behindCount = 1
      }
    },

    changePage: function() {
      if (Number(this.inputPage) < 1) {
        this.currentPage = 1
        this.inputPage = 1
      } else if (Number(this.inputPage) > this.pageCount) {
        this.currentPage = this.pageCount
        this.inputPage = this.pageCount
      } else {
        this.currentPage = Number(this.inputPage)
      }

      this.initPage()
    }
  }
};
</script>

<style lang="less" scoped>
.z-pagination {
  overflow: hidden;

  ul {
    overflow: hidden;
    float: left;

    li {
      float: left;
      list-style: none;
      width: 28px;
      height: 28px;
      line-height: 28px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      border-left: 1px solid #ccc;
      text-align: center;
      cursor: pointer;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }

    li:last-child {
      border-right: 1px solid #ccc;
    }

    li.active {
      background-color: #5bc0de;
      color: #fff;
    }

    li.arrow {
      color: #999;
      font-weight: bold;
    }

    li.arrow.disabled {
      color: #e4e4e4;
      cursor: not-allowed;
    }
  }

  .input-page {
    float: left;
    margin-left: 10px;
    height: 30px;
    line-height: 30px;

    input {
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      vertical-align: bottom;
      text-align: center;
      margin: 0 5px;
      padding: 0;
      border: 1px solid #ccc;
    }
  }
}
</style>
