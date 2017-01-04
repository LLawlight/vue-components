<template>
  <h2><a href="#modal">Modal 模态窗</a></h2>

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

```html
<z-button
:text="'Alert'"
@click.native="alert.show = true">
</z-button>
<z-modal
:show="alert.show"
:content="'这是一个alert！'"
@close-modal="alert.show = false">
</z-modal>
```
