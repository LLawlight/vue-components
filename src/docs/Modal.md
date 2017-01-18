<template>
  <h2><a href="#modal">Modal 模态窗</a></h2>

  <div class="introduce">
    <z-button @click="alert.show = true">Alert</z-button>
    <z-modal
    :show="alert.show"
    :content="'这是一个alert！'"
    @close="alert.show = false">
    </z-modal>
  </div>

  <div class="introduce">
    <z-button @click="confirm.show = true">Confirm</z-button>
    <z-modal
    :show="confirm.show"
    :type="'confirm'"
    :content="'这是一个confirm！'"
    @close="confirm.show = false"
    ></z-modal>
  </div>
</template>

```html
<z-button @click="alert.show = true">Alert</z-button>

<z-modal
:show="alert.show"
:content="'这是一个alert！'"
@close="alert.show = false">
</z-modal>
```
### API
<template>
  <div class="introduce-block">
    <p>组件标签须写上<code class="z-code">@close="xxx.show=false"</code>来通知父组件改变<code class="z-code">show</code>值。</p>
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
</template>

### EVENT
<template>
  <z-table
  :ths="['事件名称', '说明', '回调参数']"
  :trs="[
          ['close','关闭模态窗时的回调函数','-']
        ]">
  </z-table>
</template>

<script>
export default {
  data() {
    return {
      alert: {
        show: false
      },
      confirm: {
        show: false
      }
    }
  }
}
</script>
