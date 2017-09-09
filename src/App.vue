<template>
  <div id="app">
    <z-navbar
    class="navbar"
    :isFixed="true"
    @touchmove.prevent.native>
      <ul>
        <li><a href="https://github.com/Clark-Zhao/vue-components/archive/dev.zip" target="_blank">Download</a></li>
        <li><a href="https://github.com/Clark-Zhao/vue-components" target="_blank">Github</a></li>
        <li><a href="http://zhaoyuxiang.cn" target="_blank">Home</a></li>
        <li class="small-logo"><router-link to="/"><img src="static/favicon.ico" /><span>ZVueComponents</span></a></router-link></li>
        <li class="z-guide" @click="isShowGuide = !isShowGuide">Guide</li>
      </ul>
    </z-navbar>

    <div class="main">

      <div class="content clearfix">

        <div class="siderbar">
          <router-link to="/install"><span class="group-title">安装与使用</span></router-link>
          <router-link to="/grid"><span class="group-title">栅格</span></router-link>
          <span class="group-title">组件</span>
          <ul>
            <li v-for="(nav, index) in navs" :key="index" @click="getTitle(nav.text)"><router-link :to="nav.href">{{nav.text}}</router-link></li>
          </ul>
        </div>

        <z-aside :show="isShowGuide" @close="isShowGuide = false" class="siderbar-wrapper">
          <div class="siderbar">
            <router-link to="/install"><span class="group-title">安装与使用</span></router-link>
            <router-link to="/grid"><span class="group-title">栅格</span></router-link>
            <span class="group-title">组件</span>
            <ul>
              <li v-for="(nav, index) in navs" :key="index" @click="getTitle(nav.text)"><router-link :to="nav.href">{{nav.text}}</router-link></li>
            </ul>
          </div>
        </z-aside>

        <div class="section">
          <router-view></router-view>
        </div>

      </div>

      <div id="SOHUCS"></div>

    </div>

    <div class="footer">
      <p>Released under the <a href="https://github.com/Clark-Zhao/vue-components/blob/master/LICENSE">MIT License</a></p>
      <p>Copyright &copy; 2016-2017</p>
      <p>made with <span class="heart">❤</span> by <a href="http://zhaoyuxiang.cn" target="_blank">Z<span style="display:none;">GOD_</span>YX</a></p>
    </div>

    <z-progress
    :bgc="'rgb(65, 184, 131)'"
    :type="'bottom'"
    ref="progress"
    ></z-progress>

    <z-backtop
    class="backtop"
    :scroll-top="100"
    bottom="55px"
    ></z-backtop>
  </div>
</template>

<script>
import 'highlight.js/styles/solarized-dark.css';
import hljs from 'highlight.js';

hljs.initHighlightingOnLoad()

export default {
  name: 'app',

  data() {
    return {
      isShowGuide: false,
      componentTitle: '',
      navs: [
        {
          href: '/actionsheet',
          text: 'ActionSheet 动作面板'
        },
        {
          href: '/aside',
          text: 'Aside 侧边栏'
        },
        {
          href: '/backtop',
          text: 'Backtop 返回顶部'
        },
        {
          href: '/button',
          text: 'Button 按钮'
        },
        {
          href: '/carrousel',
          text: 'Carrousel 轮播图'
        },
        // {
        //   href: '/checkbox',
        //   text: 'Checkbox 复选框'
        // },
        {
          href: '/dimmer',
          text: 'Dimmer 遮罩层'
        },
        {
          href: '/dropmenu',
          text: 'Dropmenu 下拉菜单'
        },
        {
          href: '/imageinput',
          text: 'ImageInput 图片放置'
        },
        {
          href: '/inputnumber',
          text: 'InputNumber 计数器'
        },
        {
          href: '/modal',
          text: 'Modal 模态窗'
        },
        {
          href: '/navbar',
          text: 'Navbar 导航栏'
        },
        {
          href: '/pagination',
          text: 'Pagination 分页器'
        },
        {
          href: '/progress',
          text: 'Progress 进度条'
        },
        {
          href: '/radio',
          text: 'Radio 单选框'
        },
        {
          href: '/switch',
          text: 'Switch 开关'
        },
        {
          href: '/table',
          text: 'Table 表格'
        }
      ]
    }
  },

  // mounted() {
  //   this.changyan()
  // },

  watch: {
    '$route.query': function() {
      this.startProgress()

      this.isShowGuide = false

      this.$nextTick(function() {
        hljs.initHighlighting.called = false
        hljs.initHighlighting()
      })
    }
  },

  methods: {
    startProgress: function() {
      this.$refs.progress.startProgress()
    },

    getTitle(title) {
      this.componentTitle = title
    },

    // changyan() {
    //   var appid = 'cysNYmpbA';
    //   var conf = 'prod_0ac045c2d3f8c8f9c94075b367169d93';
    //   var width = window.innerWidth || document.documentElement.clientWidth;
    //   if (width < 960) {
    //     window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
    //   }
    //   else {
    //     var loadJs = function(d,a) {
    //       var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
    //       var b = document.createElement("script");
    //       b.setAttribute("type","text/javascript");
    //       b.setAttribute("charset","UTF-8");
    //       b.setAttribute("src",d);
    //       if (typeof a === "function") {
    //         if (window.attachEvent) {
    //           b.onreadystatechange = function() {
    //             var e = b.readyState;
    //             if (e === "loaded" || e === "complete") {
    //               b.onreadystatechange = null;
    //               a()
    //             }
    //           }
    //         }
    //         else {
    //           b.onload = a
    //         }
    //       }
    //       c.appendChild(b)
    //     };
    //     loadJs("http://changyan.sohu.com/upload/changyan.js", function() {
    //       window.changyan.api.config({appid:appid,conf:conf})
    //     });
    //   }
    // }
  }
}
</script>

<style lang="less">
@primary-color: rgb(65, 184, 131);

html,body,h1,h2,ul {
  margin: 0;
  padding: 0;
}
body {
  font-size: 0;
  background-color: rgb(236,236,236);
}

#app {
  color: rgb(53, 73, 94);
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 16px;
}

code {
  border-radius: 2px;
  font-family: Menlo,Monaco,Consolas,Courier,monospace;
  font-size: 0.9em;
  -webkit-font-smoothing: initial;
  -moz-osx-font-smoothing: initial;
  word-break: break-all;
}

code.z-code {
  color: #e96900;
  padding: 3px 5px;
  margin: 0 2px;
  background-color: #f8f8f8;
}

.backtop.z-backtop-wrapper {
  color: #41b883;
  z-index: 900;
}

.heart {
  color: red;
}

.clearfix {
  *zoom:1;
  clear:both;
}

.clearfix:after {
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
  zoom: 1;
}

h2 {
  color: @primary-color;
  margin-bottom: 24px;
}

h3 {
  margin: 1.6em 0 0.6em 0;
}

a {
  color: @primary-color;
  text-decoration: none;
}

.header {
  text-align: center;
}

.navbar.z-navbar-wraper {
  .z-navbar-fix {
    z-index: 900;
  }
}

#SOHUCS {
  width: 92% !important;
  margin: 0 auto 50px !important;
  padding: 10px !important;
  box-sizing: border-box !important;
  background-color: #fff !important;
}

.content {
  padding: 20px 0;
  margin: 50px 0 10px;
  width: 92%;
  background-color: #fff;
  border-radius: 6px;
  box-sizing: border-box;

  .siderbar-wrapper {
    .z-dimmer {
      z-index: 8;
    }

    .z-aside.z-aside-left {
      width: 180px;
      z-index: 9;

      .z-aside-content {
        padding: 60px 0 44px 0;

        .siderbar {
          width: 180px;
          border-right: none;

          &>a {
            padding: 0 8px 0 16px;
          }

          >.group-title {
            padding: 8px 8px 8px 16px;
          }

          ul {
            li {
              a {
                padding-left: 24px;
                padding-right: 8px;
              }
            }
          }
        }
      }
    }
  }

  .siderbar {
    width: 100%/6;
    float: left;
    border-right: 1px solid #eee;

    .router-link-active {
      color: @primary-color;
      border-right: 2px solid @primary-color;
      background-color: rgba(65, 184, 131,.3);
    }

    a {
      display: block;
    }

    >a {
      color: #35495e;
      height: 42px;
      line-height: 42px;
      padding: 0px 16px 0px 32px;

      .group-title {
        padding: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .group-title {
      display: inline-block;
      padding: 8px 16px 8px 32px;
    }

    >.group-title {
      height: 26px;
      line-height: 26px;
    }

    ul {
      list-style: none;

      li {

        a {
          color: gray;
          height: 42px;
          line-height: 42px;
          padding-left: 48px;
          padding-right: 16px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;

          &:hover {
            color: @primary-color;
          }
        }
      }
    }
  }

  .section {
    padding: 5px 4%;
    margin-left: 100%/6;
    border-left: 1px solid #eee;

    section {
      max-width: 800px;
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 1366px) {
  .content {

    .siderbar {
      width: 210px;
    }

    .section {
      margin-left: 210px;
    }
  }
}

@media screen and (max-width: 768px) {
  #app {
    font-size: 14px;
  }

  #SOHUCS {
    width: 100% !important;
    margin: 0  0 10px 0 !important;
  }

  .content {
    width: 100%;
    margin: 10px 0;

    &>.siderbar {
      display: none;
    }

    .section {
      margin-left: 0px;
      padding: 10px;
    }

    .siderbar-wrapper .z-aside.z-aside-left {
      width: 180px;

      .z-aside-content {
        padding: 60px 0 44px 0;

        .siderbar {
          width: 180px;

          &>a {
            padding: 0 8px 0 16px;
          }

          >.group-title {
            padding: 8px 8px 8px 16px;
          }

          ul {
            li {
              a {
                padding-left: 24px;
                padding-right: 8px;
              }
            }
          }
        }
      }
    }
  }

  .z-navbar-wraper .z-navbar {
    .small-logo {
      display: none;
    }

    .z-guide {
      display: block;
      color: @primary-color;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .z-navbar>ul {
    padding: 10px;
  }

  .z-backtop-wrapper.show-top {
    right: 10px;
    bottom: 10px;
  }
}

@media screen and (min-width: 768px) {
  .main {
    text-align: center;
  }

  .content {
    display: inline-block;
    text-align: left;

    // .z-aside.z-aside-left {
    //   .z-aside-content {
    //     .siderbar {
    //       display: none;
    //     }
    //   }
    // }
  }

  .z-navbar>ul {
    padding: 10px 60px;
  }

}

.footer {
  text-align: center;
  color: #fff;
  padding: 50px 0;
  background-color: #727f80;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
}

.footer a {
  color: #fff;
}

.logo {
  width: 100px;
  height: 100px
}

.introduce {
  margin: 10px 5px 0 0;
  display: inline-block;
}
.introduce:last-child {
  margin-right: 0;
}

.introduce-block {
  margin: 10px 0 0;
}

.z-navbar>ul {
  height: 40px;
  line-height: 40px;
}
.z-navbar>ul>li {
  list-style: none;
  float: right;
  margin: 0 0.6em;
}
.z-navbar>ul>li>a {
  color: #34495e;
  padding-bottom: 3px;
}
.z-navbar>ul>li>a:hover {
  border-bottom: 3px solid @primary-color;
}

.z-navbar {
  .small-logo {
    float: left;
    height: 40px;

    a {
      display: inline-block;
      height: 40px;

      span {
        height: 100%;
        margin-left: 10px;
        font-size: 32px;
        float: right;
      }
    }

    a:hover {
      border-bottom: none;
    }

    img {
      max-height: 40px;
    }
  }
}

.z-navbar .z-guide {
  float: left;
  position: relative;
  display: none;

  .z-dropmenu-title>a {
    color: @primary-color;
    font-weight: bold;
  }
}
</style>
