<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo.png">
      <hello></hello>
    </div>

    <div id="aside" class="section">
      <h2>Aside</h2>
      <div class="introduce">
        <z-button
        :text="'Left'"
        @click="asideLeft.show = true">
        </z-button>
        <z-aside
        :show.sync="asideLeft.show"
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
        :type="'bottom'">
          <h3>我是Aside-Bottom</h3>
          <div>组件内部可以自定义HTML结构</div>
          <p>直接在&lt;aside&gt;标签中写即可</p>
          <div>内容长度无限制，超过部分可以滚动浏览</div>
        </z-aside>
      </div>
    </div>

    <div id="button" class="section">
      <h2>Button</h2>

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
    </div>

    <div id="modal" class="section">
      <h2>Modal</h2>

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
    </div>

    <div id="table" class="section">
      <h2>Table</h2>

      <div class="introduce">
        <z-table
        :ths="['参数','类型','必填','说明']"
        :trs="[['ths','一维数组','是','表头的数据'],['trs','二维数组','是','表体的数据']]">
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
</style>
