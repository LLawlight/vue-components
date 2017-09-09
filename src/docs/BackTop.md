## BackTop 返回顶部

```html
<z-backtop
:scroll-top="100"
:right="'5%'"
:bottom="'20px'"
></z-backtop>
```
效果见本页返回顶部按钮。

`<z-backtop>`标签中可以自定义html结构，用于替换成自己的返回顶部按钮样式。

例子：

<template>
  <z-backtop
  class="example"
  :acceleration="0.2"
  :stime="5">
  返回顶部
  </z-backtop>
</template>

```html
<z-backtop
class="example"
:acceleration="0.2"
:stime="5"
>
返回顶部
</z-backtop>
```

<template>
  <div class="introduce-block">
    <z-table
    :title="'API'"
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['scrollTop','Number','否','0','页面滚动多少距离开始显示返回顶部按钮'],
            ['acceleration','Number','否','0.5','滚动的速度'],
            ['stime','Number','否','10','每次滚动的时间间隔'],
            ['right','String','否','20','返回顶部按钮和窗口右侧的距离'],
            ['bottom','String','否','20','返回顶部按钮和窗口底部的距离'],
          ]">
    </z-table>
  </div>
</template>

<style>
.z-backtop-wrapper.show-top.example {
  position: static;
}
</style>
