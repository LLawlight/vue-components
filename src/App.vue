<template>
  <div id="app">
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
              text: 'Aside'
            },
            {
              href: '#button',
              text: 'Button'
            },
            {
              href: '#dropmenu',
              text: 'Dropmenu'
            },
            {
              href: '#ImageInput',
              text: 'ImageInput'
            },
            {
              href: '#modal',
              text: 'Modal'
            },
            {
              href: '#navbar',
              text: 'Navbar'
            },
            {
              href: '#switch',
              text: 'Switch'
            },
            {
              href: '#table',
              text: 'Table'
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
            @closeAside="asideLeft.show = false">
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
            @closeAside="asideTop.show = false">
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
            @closeAside="asideRight.show = false">
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
            @closeAside="asideBottom.show = false">
              <h3>我是Aside-Bottom</h3>
              <div>组件内部可以自定义HTML结构</div>
              <p>直接在&lt;aside&gt;标签中写即可</p>
              <div>内容长度无限制，超过部分可以滚动浏览</div>
            </z-aside>
          </div>

          <div class="introduce-block">
            <p>备注：组件标签内可以自定义HTML结构。</p>
            <p>组件标签须写上<code>@closeAside="xxx.show"</code>来通知父组件改变<code>show</code>值。</p>
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
            ></z-dropmenu>
          </div>

          <div class="introduce-block">
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['type','String','否','click','菜单显示方式(click,hover)'],
                    ['text','String','是','-','菜单文字'],
                    ['lis','Array','是','-','列表的文字(text)和链接(href)']
                  ]">
            </z-table>
          </div>
        </div>

        <div id="ImageInput" class="section">
          <h2><a href="#ImageInput">ImageInput</a></h2>

          <div class="introduce">
            <z-imageinput
            :width="200"
            :height="150"
            :src="'http://placehold.it/500x500'"
            ></z-imageinput>
          </div>

          <div class="introduce-block">
            <p>自动根据容器尺寸缩放图片并展示中心位置。</p>
            <z-table
            :ths="['参数','类型','必填','默认值','说明']"
            :trs="[
                    ['width','Number','是','-','容器宽度'],
                    ['height','Number','是','-','容器高度'],
                    ['src','String','是','-','图片路径']
                  ]">
            </z-table>
          </div>
        </div>

        <div id="modal" class="section">
          <h2><a href="#modal">Modal</a></h2>


          <div class="introduce">
            <z-button
            :text="'Alert'"
            @click.native="alert.show = true">
            </z-button>
            <z-modal
            :show.sync="alert.show"
            :content="'这是一个alert！'"
            @closeModal="alert.show = false">
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
            @closeModal="confirm.show = false"
            ></z-modal>
          </div>

          <div class="introduce-block">
            <p>组件标签须写上<code>@closeModal="xxx.show"</code>来通知父组件改变<code>show</code>值。</p>
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
import Hello from './components/Hello'
import zAside from './components/Aside'
import zButton from './components/Button'
import zDropmenu from './components/Dropmenu'
import zImageinput from './components/ImageInput'
import zModal from './components/Modal'
import zNavbar from './components/Navbar'
import zSwitch from './components/Switch'
import zTable from './components/Table'

export default {
  components: {
    Hello,
    zAside,
    zButton,
    zDropmenu,
    zImageinput,
    zModal,
    zNavbar,
    zSwitch,
    zTable
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
      }
    }
  }
}
</script>

<style>
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
  color: #e96900;
  padding: 3px 5px;
  margin: 0 2px;
  border-radius: 2px;
  white-space: nowrap;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 0.9em;
  background-color: #f8f8f8;
  -webkit-font-smoothing: initial;
  -moz-osx-font-smoothing: initial;
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
}
</style>
