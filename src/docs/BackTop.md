<template>
  <h2><a href="#backtop">BackTop 返回顶部</a></h2>
</template>

```html
<z-backtop
:scroll-top="100"
></z-backtop>
```
效果见本页返回顶部按钮。

按钮距离页面边缘的距离建议使用css来调整，可以根据不同尺寸的设备来设置显示的位置。

默认图标引用方式:

`<link rel="stylesheet" href="//at.alicdn.com/t/font_jplna4shxcfbhuxr.css">`

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
:acceleration="0.2"
:stime="5"
>
返回顶部
</z-backtop>
```

<template>
  <div class="introduce-block">
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['scrollTop','Number','否','0','页面滚动多少距离开始显示返回顶部按钮'],
            ['acceleration','Number','否','0.5','滚动的速度'],
            ['stime','Number','否','10','每次滚动的时间间隔']
          ]">
    </z-table>
  </div>
</template>

<style>
.z-backtop-wrapper.show-top.example {
  position: static;
}
</style>
