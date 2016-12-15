<template>
  <div id="app">
    <z-progress
    :bgc="'rgb(65, 184, 131)'"
    :type="'bottom'"
    ref="progress"
    ></z-progress>
    <z-navbar
    :isFixed="true">
      <ul>
        <li><a href="http://www.zhaoyuxiang.cn" target="_blank">Blog</a></li>
        <li><a href="https://github.com/Clark-Zhao/vue-components/archive/master.zip" target="_blank">Download</a></li>
        <li><a href="https://github.com/Clark-Zhao/vue-components" target="_blank">Github</a></li>
        <li class="z-guide">
          <z-dropmenu
          :type="'hover'"
          :text="'Guide'"
          :lis="[
            {
              href: '#aside',
              text: 'Aside 侧边栏'
            },
            {
              href: '#backtop',
              text: 'Backtop 返回顶部'
            },
            {
              href: '#button',
              text: 'Button 按钮'
            },
            {
              href: '#carrousel',
              text: 'Carrousel 轮播图'
            },
            {
              href: '#dropmenu',
              text: 'Dropmenu 下拉菜单'
            },
            {
              href: '#ImageInput',
              text: 'ImageInput 图片放置'
            },
            {
              href: '#InputNumber',
              text: 'InputNumber 计数器'
            },
            {
              href: '#modal',
              text: 'Modal 模态窗'
            },
            {
              href: '#navbar',
              text: 'Navbar 导航栏'
            },
            {
              href: '#pagination',
              text: 'Pagination 分页器'
            },

            {
              href: '#progress',
              text: 'Progress 进度条'
            },
            {
              href: '#switch',
              text: 'Switch 开关'
            },
            {
              href: '#table',
              text: 'Table 表格'
            }
          ]"
          ></z-dropmenu>
        </li>
      </ul>
    </z-navbar>
    <div class="header">
      <img class="logo" src="./assets/logo.png">
      <hello></hello>
    </div>

    <div class="main">

      <div class="content">

        <div id="aside" class="section">
          <h2><a href="#aside">Aside</a></h2>

          <div class="introduce">
            <z-button
            :text="'Left'"
            @click.native="asideLeft.show = true">
            </z-button>
            <z-aside
            :show="asideLeft.show"
            :title="'标题'"
            :type="'left'"
            @close-aside="asideLeft.show = false">
              <h3>我是Aside-Left</h3>
              <div>组件内部可以自定义HTML结构</div>
              <p>直接在&lt;aside&gt;标签中写即可</p>
              <div>内容长度无限制，超过部分可以滚动浏览</div>
            </z-aside>
          </div>

          <div class="introduce">
            <z-button
            :text="'Top'"
            @click.native="asideTop.show = true">
            </z-button>
            <z-aside
            :show="asideTop.show"
            :title="'标题'"
            :type="'top'"
            @close-aside="asideTop.show = false">
              <h3>我是Aside-Top</h3>
              <div>组件内部可以自定义HTML结构</div>
              <p>直接在&lt;aside&gt;标签中写即可</p>
              <div>内容长度无限制，超过部分可以滚动浏览</div>
            </z-aside>
          </div>

          <div class="introduce">
            <z-button
            :text="'Right'"
            @click.native="asideRight.show = true">
            </z-button>
            <z-aside
            :show="asideRight.show"
            :title="'标题'"
            :type="'right'"
            @close-aside="asideRight.show = false">
              <h3>我是Aside-Right</h3>
              <div>组件内部可以自定义HTML结构</div>
              <p>直接在&lt;aside&gt;标签中写即可</p>
              <div>内容长度无限制，超过部分可以滚动浏览</div>
            </z-aside>
          </div>

          <div class="introduce">
            <z-button
            :text="'Bottom'"
            @click.native="asideBottom.show = true">
            </z-button>
            <z-aside
            :show.sync="asideBottom.show"
            :title="'标题'"
            :type="'bottom'"
            @close-aside="asideBottom.show = false">
              <h3>我是Aside-Bottom</h3>
              <div>组件内部可以自定义HTML结构</div>
              <p>直接在&lt;aside&gt;标签中写即可</p>
              <div>内容长度无限制，超过部分可以滚动浏览</div>
            </z-aside>
          </div>

          <div class="introduce-block">
            <p>备注：组件标签内可以自定义HTML结构。</p>
            <p>组件标签须写上<code class="z-code">@close-aside="xxx.show=false"</code>来通知父组件改变<code class="z-code">show</code>值。</p>
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['show','Boolean','是','-','显示状态'],
                    ['title','String','否','-','表体的数据'],
                    ['type','String','否','left','显示位置(left,top,right,bottom)'],
                    ['close','String','否','关闭','关闭按钮文字']
                  ]">
            </z-table>
          </div>
          <aside-md></aside-md>
        </div>

        <div id="backtop" class="section">
          <h2><a href="#backtop">BackTop</a></h2>
          <backtop-md></backtop-md>
        </div>

        <div id="button" class="section">
          <h2><a href="#button">Button</a></h2>

          <div class="introduce">
            <z-button
            :text="'defalut'">
            </z-button>
          </div>

          <div class="introduce">
            <z-button
            :text="'primary'"
            :type="'primary'">
            </z-button>
          </div>

          <div class="introduce">
            <z-button
            :text="'success'"
            :type="'success'">
            </z-button>
          </div>

          <div class="introduce">
            <z-button
            :text="'info'"
            :type="'info'">
            </z-button>
          </div>

          <div class="introduce">
            <z-button
            :text="'warning'"
            :type="'warning'">
            </z-button>
          </div>

          <div class="introduce">
            <z-button
            :text="'danger'"
            :type="'danger'">
            </z-button>
          </div>

          <div class="introduce-block">
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['text','String','是','-','按钮文字'],
                    ['type','String','否','defalut','按钮样式(defalut,primary,success,info,warning,danger)']
                  ]">
            </z-table>
          </div>

          <button-md></button-md>
        </div>

        <div id="carrousel" class="section">
          <h2><a href="#carrousel">Carrousel</a></h2>
          <carrousel-md></carrousel-md>
        </div>

        <div id="dropmenu" class="section">
          <h2><a href="#dropmenu">Dropmenu</a></h2>

          <div class="introduce">
            <z-dropmenu
            :text="'Guide'"
            :lis="[
              {
                href: 'https://github.com/Clark-Zhao/vue-components',
                text: 'Github'
              },
              {
                href: 'https://github.com/Clark-Zhao/vue-components/archive/master.zip',
                text: 'Download'
              },
              {
                href: 'http://www.zhaoyuxiang.cn',
                text: 'Blog'
              }
            ]"
            :isShowArrow="true"
            ></z-dropmenu>
          </div>

          <div class="introduce-block">
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['type','String','否','click','菜单显示方式(click,hover)'],
                    ['text','String','是','-','菜单文字'],
                    ['lis','Array','是','-','列表的文字(text)和链接(href)'],
                    ['isShowArrow','Boolean','否','false','是否在右侧显示▲小箭头']
                  ]">
            </z-table>
          </div>

          <dropmenu-md></dropmenu-md>
        </div>

        <div id="ImageInput" class="section">
          <h2><a href="#ImageInput">ImageInput</a></h2>

          <div class="introduce">
            <z-imageinput
            :width="200"
            :height="150"
            :src="'http://placehold.it/500x500'"
            :alt="'测试图片'"
            ></z-imageinput>
          </div>

          <div class="introduce-block">
            <p>自动根据容器尺寸缩放图片并展示中心位置。</p>
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['width','Number','是','-','容器宽度'],
                    ['height','Number','是','-','容器高度'],
                    ['src','String','是','-','图片路径'],
                    ['alt','String','否','-','图片加载失败时显示的文字信息']
                  ]">
            </z-table>
          </div>

          <imageinput-md></imageinput-md>
        </div>

        <div id="InputNumber" class="section">
          <h2><a href="#InputNumber">InputNumber</a></h2>
          <inputnumber-md></inputnumber-md>
        </div>

        <div id="modal" class="section">
          <h2><a href="#modal">Modal</a></h2>


          <div class="introduce">
            <z-button
            :text="'Alert'"
            @click.native="alert.show = true">
            </z-button>
            <z-modal
            :show="alert.show"
            :content="'这是一个alert！'"
            @close-modal="alert.show = false">
            </z-modal>
          </div>

          <div class="introduce">
            <z-button
            :text="'Confirm'"
            @click.native="confirm.show = true">
            </z-button>
            <z-modal
            :show="confirm.show"
            :type="'confirm'"
            :content="'这是一个confirm！'"
            @close-modal="confirm.show = false"
            ></z-modal>
          </div>

          <div class="introduce-block">
            <p>组件标签须写上<code class="z-code">@close-modal="xxx.show=false"</code>来通知父组件改变<code class="z-code">show</code>值。</p>
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['show','Boolean','是','-','显示状态'],
                    ['content','String','是','-','弹窗内容'],
                    ['type','String','否','alert','弹窗类型(alert,confirm)'],
                    ['title','String','否','提示','弹窗标题'],
                    ['sure','String','否','确定','确定按钮文字'],
                    ['cancle','String','否','取消','取消按钮文字'],
                    ['sureEvent','Function','否','-','确定按钮点击事件'],
                    ['cancelEvent','Function','否','-','取消按钮点击事件'],
                  ]">
            </z-table>
          </div>

          <modal-md></modal-md>
        </div>

        <div id="navbar" class="section">
          <h2><a href="#navbar">Navbar</a></h2>

          <div class="introduce-block">
            <p>效果见本页导航栏。</p>
            <p>备注：组件标签内可以自定义HTML结构。</p>
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['isFixed','Boolean','否','false','滚动时菜单是否固定在顶部']
                  ]">
            </z-table>
          </div>

          <navbar-md></navbar-md>
        </div>

        <div id="pagination" class="section">
          <h2><a href="#pagination">Pagination</a></h2>
          <pagination-md></pagination-md>
        </div>

        <div id="progress" class="section">
          <h2><a href="#progress">Progress</a></h2>

          <div class="introduce">
            <z-button
            :text="'点击感受进度条 ↓'"
            :type="'info'"
            @click.native="startProgress"
            ></z-button>
          </div>

          <div class="introduce-block">
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['bgc','String','否','#0080ff','进度条颜色'],
                    ['type','String','否','top','进度条显示位置(top,bottom)']
                  ]">
            </z-table>
          </div>

          <progress-md></progress-md>
        </div>

        <div id="switch" class="section">
          <h2><a href="#switch">Switch</a></h2>


          <div class="introduce">
            <z-switch></z-switch>
          </div>

          <div class="introduce-block">
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['width','Number','否','50','开关宽度'],
                    ['height','Number','否','25','开关高度'],
                    ['bgc','String','否','rgb(65, 184, 131)','开启时的背景色']
                  ]">
            </z-table>
          </div>

          <switch-md></switch-md>
        </div>

        <div id="table" class="section">
          <h2><a href="#table">Table</a></h2>

          <div class="introduce">
            <z-table
            :title="'表格属性'"
            :ths="['参数','类型','必填','说明']"
            :trs="[['title','字符串','否','表格标题'],['ths','一维数组','是','表头的数据'],['trs','二维数组','是','表体的数据']]">
            </z-table>
          </div>

          <table-md></table-md>
        </div>

      </div>
    </div>

    <div class="footer">
      <p>Released under the <a href="https://github.com/Clark-Zhao/vue-components/blob/master/LICENSE">MIT License</a></p>
      <p>Copyright &copy; 2016</p>
      <p>made with <span class="heart">❤</span> by <a href="http://zhaoyuxiang.cn">Z<span style="display:none;">GOD_</span>YX</a></p>
    </div>
  </div>
</template>

<script>
import hljs from '../node_modules/highlightjs/highlight.pack.min.js';
hljs.initHighlightingOnLoad()
import '../node_modules/highlightjs/styles/github.css';

import Hello from './components/Hello'
import zAside from './components/Aside'
import zButton from './components/Button'
import zCarrousel from './components/Carrousel'
import zDropmenu from './components/Dropmenu'
import zImageinput from './components/ImageInput'
import zInputnumber from './components/InputNumber'
import zModal from './components/Modal'
import zNavbar from './components/Navbar'
import zProgress from './components/Progress'
import zSwitch from './components/Switch'
import zTable from './components/Table'

import asideMd from 'src/docs/Aside.md'
import backtopMd from 'src/docs/BackTop.md'
import buttonMd from 'src/docs/Button.md'
import carrouselMd from 'src/docs/Carrousel.md'
import dropmenuMd from 'src/docs/Dropmenu.md'
import imageinputMd from 'src/docs/ImageInput.md'
import inputnumberMd from 'src/docs/InputNumber.md'
import modalMd from 'src/docs/Modal.md'
import navbarMd from 'src/docs/Navbar.md'
import paginationMd from 'src/docs/Pagination.md'
import progressMd from 'src/docs/Progress.md'
import switchMd from 'src/docs/Switch.md'
import tableMd from 'src/docs/Table.md'

export default {
  components: {
    Hello,
    zAside,
    zButton,
    zCarrousel,
    zDropmenu,
    zImageinput,
    zInputnumber,
    zModal,
    zNavbar,
    zProgress,
    zSwitch,
    zTable,

    asideMd,
    backtopMd,
    buttonMd,
    carrouselMd,
    dropmenuMd,
    imageinputMd,
    inputnumberMd,
    modalMd,
    navbarMd,
    paginationMd,
    progressMd,
    switchMd,
    tableMd
  },
  data() {
    return {
      alert: {
        show: false
      },
      confirm: {
        show: false
      },
      asideLeft: {
        show: false
      },
      asideTop: {
        show: false
      },
      asideRight: {
        show: false
      },
      asideBottom: {
        show: false
      },
      inputNumber: {
        value: 5
      }
    }
  },
  mounted() {
    this.startProgress()
  },
  watch: {
    'inputNumber.value': function(val) {
      console.log(val);
    }
  },
  methods: {
    startProgress: function() {
      this.$refs.progress.startProgress()
    },

    getValue: function(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less">
html,body,h1,h2,ul {
  margin: 0;
  padding: 0;
}
.section {
  padding-top: 60px
}
body {
  font-size: 0;
}

#app {
  color: rgb(53, 73, 94);
  font-family: Source Sans Pro, Helvetica, sans-serif;
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

.z-backtop-wrapper {
  color: #41b883;
}

.heart {
  color: red;
}

a {
  color: rgb(65, 184, 131);
  text-decoration: none;
}

.header {
  text-align: center;
}

.content {
  padding: 0 10px 50px;
}

@media screen and (max-width: 768px) {
  #app {
    font-size: 14px;
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
}

.footer a {
  color: #fff;
}

.logo {
  width: 100px;
  height: 100px
}

.section {
  margin: 20px 0 0;
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
  border-bottom: 3px solid rgb(65, 184, 131);
}
.z-navbar .z-guide {
  float: left;
  position: relative;

  .z-dropmenu-title>a {
    color: rgb(65, 184, 131);
    font-weight: bold;
  }
}
</style>
