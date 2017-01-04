<template>
  <h2><a href="#navbar">Navbar 导航栏</a></h2>

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
</template>

```html
<z-navbar
:isFixed="true">
  <!-- 自定义内容 -->
</z-navbar>
```
