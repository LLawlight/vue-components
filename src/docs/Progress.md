<template>
  <h2><a href="#progress">Progress 进度条</a></h2>

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
</template>

<script>
export default {
  mounted() {
    this.startProgress()
  },

  methods: {
    startProgress: function() {
      this.$parent.$refs.progress.startProgress()
    }
  }
}
</script>

```html
<z-progress
:bgc="'rgb(65, 184, 131)'"
:type="'bottom'"
ref="progress"
></z-progress>
```

```js
methods: {
  startProgress: function() {
    this.$refs.progress.startProgress()
  }
}
```
你可以在任何时候通过<code class="z-code">this.startProgress()</code>来触发新的进度条。
