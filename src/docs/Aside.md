<template>
  <h2><a href="#aside">Aside 侧边栏</a></h2>

  <div class="introduce">
    <z-button @click="asideLeft.show = true">Left</z-button>
    <z-aside
    :show="asideLeft.show"
    :title="'标题'"
    :type="'left'"
    @close="asideLeft.show = false">
      <h3>我是Aside-Left</h3>
      <div>组件内部可以自定义HTML结构</div>
      <p>直接在&lt;aside&gt;标签中写即可</p>
      <div>内容长度无限制，超过部分可以滚动浏览</div>
    </z-aside>
  </div>

  <div class="introduce">
    <z-button @click="asideTop.show = true">Top</z-button>
    <z-aside
    :show="asideTop.show"
    :title="'标题'"
    :type="'top'"
    @close="asideTop.show = false">
      <h3>我是Aside-Top</h3>
      <div>组件内部可以自定义HTML结构</div>
      <p>直接在&lt;aside&gt;标签中写即可</p>
      <div>内容长度无限制，超过部分可以滚动浏览</div>
    </z-aside>
  </div>

  <div class="introduce">
    <z-button @click="asideRight.show = true">Right</z-button>
    <z-aside
    :show="asideRight.show"
    :title="'标题'"
    :type="'right'"
    @close="asideRight.show = false">
      <h3>我是Aside-Right</h3>
      <div>组件内部可以自定义HTML结构</div>
      <p>直接在&lt;aside&gt;标签中写即可</p>
      <div>内容长度无限制，超过部分可以滚动浏览</div>
    </z-aside>
  </div>

  <div class="introduce">
    <z-button @click="asideBottom.show = true">Bottom</z-button>
    <z-aside
    :show.sync="asideBottom.show"
    :title="'标题'"
    :type="'bottom'"
    @close="asideBottom.show = false">
      <h3>我是Aside-Bottom</h3>
      <div>组件内部可以自定义HTML结构</div>
      <p>直接在&lt;aside&gt;标签中写即可</p>
      <div>内容长度无限制，超过部分可以滚动浏览</div>
    </z-aside>
  </div>
</template>

```html
<z-button @click="asideBottom.show = true">Bottom</z-button>

<z-aside
:show="asideBottom.show"
:title="'标题'"
:type="'bottom'"
@close="asideBottom.show = false">
  <!-- 自定义内容 -->
</z-aside>
```

注：组件标签内可以自定义HTML结构。

### API
<template>
  <z-table
  :ths="['参数','类型','必填','默认值','说明']"
  :trs="[
          ['show','Boolean','是','-','显示状态'],
          ['title','String','否','-','表体的数据'],
          ['type','String','否','left','显示位置(left,top,right,bottom)'],
          ['close-text','String','否','关闭','关闭按钮文字']
        ]">
  </z-table>
</template>

### EVENT
<template>
  <z-table
  :ths="['事件名称', '说明', '回调参数']"
  :trs="[
          ['close','关闭侧边栏时的回调函数','-']
        ]">
  </z-table>
</template>

<script>
export default {
  data() {
    return {
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
