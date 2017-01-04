<template>
  <h2><a href="#switch">Switch 开关</a></h2>

  <div class="introduce">
    <z-switch></z-switch>
  </div>

  <div class="introduce-block">
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['width','Number','否','50','开关宽度'],
            ['height','Number','否','25','开关高度'],
            ['bgc','String','否','rgb(65, 184, 131)','开启时的背景色']
          ]">
    </z-table>
  </div>
</template>

```html
<z-switch></z-switch>
```
