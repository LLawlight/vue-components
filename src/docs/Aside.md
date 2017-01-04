<template>
  <h2><a href="#aside">Aside 侧边栏</a></h2>

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

```html
<z-button
:text="'Left'"
@click.native="asideLeft.show = true">
</z-button>

<z-aside
:show="asideLeft.show"
:title="'标题'"
:type="'left'"
@close-aside="asideLeft.show = false">
  <!-- 自定义内容 -->
</z-aside>
```
