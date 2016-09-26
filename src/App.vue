<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo.png">
      <hello></hello>
    </div>

    <div id="modal" class="section">
      <h2>Modal</h2>

      <div class="introduce">
        <a class="z-btn" @click.prevent="alert.show = true">Alert</a>
        <modal
        :show.sync="alert.show"
        :content="'这是一个alert！'"
        ></modal>
      </div>

      <div class="introduce">
        <a class="z-btn" @click.prevent="confirm.show = true">confirm</a>
        <modal
        :show.sync="confirm.show"
        :type="'confirm'"
        :content="'这是一个confirm！'"
        ></modal>
      </div>
    </div>

    <div id="aside" class="section">
      <h2>Aside</h2>
      <div class="introduce">
        <a class="z-btn" @click.prevent="asideLeft.show = true">left</a>
        <aside
        :show.sync="asideLeft.show"
        :type="'left'">
          <h3>我是Aside-Left</h3>
          <div>组件内部可以自定义HTML结构</div>
          <p>直接在&lt;aside&gt;标签中写即可</p>
          <div>内容长度无限制，超过部分可以滚动浏览</div>
        </aside>
      </div>

      <div class="introduce">
        <a class="z-btn" @click.prevent="asideTop.show = true">top</a>
        <aside
        :show.sync="asideTop.show"
        :type="'top'">
          <h3>我是Aside-Top</h3>
          <div>组件内部可以自定义HTML结构</div>
          <p>直接在&lt;aside&gt;标签中写即可</p>
          <div>内容长度无限制，超过部分可以滚动浏览</div>
        </aside>
      </div>

      <div class="introduce">
        <a class="z-btn" @click.prevent="asideRight.show = true">right</a>
        <aside
        :show.sync="asideRight.show"
        :type="'right'">
          <h3>我是Aside-Right</h3>
          <div>组件内部可以自定义HTML结构</div>
          <p>直接在&lt;aside&gt;标签中写即可</p>
          <div>内容长度无限制，超过部分可以滚动浏览</div>
        </aside>
      </div>

      <div class="introduce">
        <a class="z-btn" @click.prevent="asideBottom.show = true">bottom</a>
        <aside
        :show.sync="asideBottom.show"
        :type="'bottom'">
          <h3>我是Aside-Bottom</h3>
          <div>组件内部可以自定义HTML结构</div>
          <p>直接在&lt;aside&gt;标签中写即可</p>
          <div>内容长度无限制，超过部分可以滚动浏览</div>
        </aside>
      </div>
    </div>

  </div>
</template>

<script>
import Hello from './components/Hello'
import Modal from './components/Modal'
import Aside from './components/Aside'

export default {
  components: {
    Hello,
    Modal,
    Aside
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
h1,h2 {
  margin: 0;
  padding: 0;
}

#app {
  color: rgb(53, 73, 94);
  font-family: Source Sans Pro, Helvetica, sans-serif;
  font-size: 16px;
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
  margin: 20px;
}

.introduce {
  margin: 10px 0;
  display: inline-block;
}

.z-btn {
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

</style>
