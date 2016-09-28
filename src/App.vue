<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo.png">
      <hello></hello>
    </div>

    <div id="aside" class="section">
      <a href="#aside">
        <h2>Aside</h2>
      </a>

      <div class="introduce">
        <z-button
        :text="'Left'"
        @click="asideLeft.show = true">
        </z-button>
        <z-aside
        :show.sync="asideLeft.show"
        :title="'标题'"
        :type="'left'">
          <h3>我是Aside-Left</h3>
          <div>组件内部可以自定义HTML结构</div>
          <p>直接在&lt;aside&gt;标签中写即可</p>
          <div>内容长度无限制，超过部分可以滚动浏览</div>
        </z-aside>
      </div>

      <div class="introduce">
        <z-button
        :text="'Top'"
        @click="asideTop.show = true">
        </z-button>
        <z-aside
        :show.sync="asideTop.show"
        :title="'标题'"
        :type="'top'">
          <h3>我是Aside-Top</h3>
          <div>组件内部可以自定义HTML结构</div>
          <p>直接在&lt;aside&gt;标签中写即可</p>
          <div>内容长度无限制，超过部分可以滚动浏览</div>
        </z-aside>
      </div>

      <div class="introduce">
        <z-button
        :text="'Right'"
        @click="asideRight.show = true">
        </z-button>
        <z-aside
        :show.sync="asideRight.show"
        :title="'标题'"
        :type="'right'">
          <h3>我是Aside-Right</h3>
          <div>组件内部可以自定义HTML结构</div>
          <p>直接在&lt;aside&gt;标签中写即可</p>
          <div>内容长度无限制，超过部分可以滚动浏览</div>
        </z-aside>
      </div>

      <div class="introduce">
        <z-button
        :text="'Bottom'"
        @click="asideBottom.show = true">
        </z-button>
        <z-aside
        :show.sync="asideBottom.show"
        :title="'标题'"
        :type="'bottom'">
          <h3>我是Aside-Bottom</h3>
          <div>组件内部可以自定义HTML结构</div>
          <p>直接在&lt;aside&gt;标签中写即可</p>
          <div>内容长度无限制，超过部分可以滚动浏览</div>
        </z-aside>
      </div>

      <div class="introduce-block">
        <p>备注：组件标签内可以自定义HTML结构。</p>
        <z-table
        :ths="['参数','类型','必填','默认值','说明']"
        :trs="[
                ['show','Boolean','是(双向绑定)','false','显示状态'],
                ['title','String','否','-','表体的数据'],
                ['type','String','否','left','显示位置(left,top,right,bottom)'],
                ['close','String','否','关闭','关闭按钮文字']
              ]">
        </z-table>
      </div>
    </div>

    <div id="button" class="section">
      <a href="#button">
        <h2>Button</h2>
      </a>

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

    <div id="modal" class="section">
      <a href="#modal">
        <h2>Modal</h2>
      </a>

      <div class="introduce">
        <z-button
        :text="'Alert'"
        @click="alert.show = true">
        </z-button>
        <z-modal
        :show.sync="alert.show"
        :content="'这是一个alert！'">
        </z-modal>
      </div>

      <div class="introduce">
        <z-button
        :text="'Confirm'"
        @click="confirm.show = true">
        </z-button>
        <z-modal
        :show.sync="confirm.show"
        :type="'confirm'"
        :content="'这是一个confirm！'"></z-modal>
      </div>

      <div class="introduce-block">
        <z-table
        :ths="['参数','类型','必填','默认值','说明']"
        :trs="[
                ['show','Boolean','是(双向绑定)','false','显示状态'],
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

    <div id="table" class="section">
      <a href="#table">
        <h2>Table</h2>
      </a>

      <div class="introduce">
        <z-table
        :title="'表格属性'"
        :ths="['参数','类型','必填','说明']"
        :trs="[['title','字符串','否','表格标题'],['ths','一维数组','是','表头的数据'],['trs','二维数组','是','表体的数据']]">
        </z-table>
      </div>
    </div>

  </div>
</template>

<script>
import Hello from './components/Hello'
import zAside from './components/Aside'
import zButton from './components/Button'
import zModal from './components/Modal'
import zTable from './components/Table'

export default {
  components: {
    Hello,
    zAside,
    zButton,
    zModal,
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
html,body,h1,h2,a {
  margin: 0;
  padding: 0;
}

body {
  font-size: 0;
}

#app {
  color: rgb(53, 73, 94);
  font-family: Source Sans Pro, Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px;
}

a {
  color: rgb(65, 184, 131);
  text-decoration: none;
}

.header {
  text-align: center;
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
</style>
