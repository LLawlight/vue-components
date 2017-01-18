## Switch 开关

### 基础开关

默认状态：

<template>
  <z-switch @change="getIsOpen"></z-switch>
</template>

```html
<z-switch @change="getIsOpen"></z-switch>
```

初始开启状态：

<template>
  <z-switch default-checked @change="getIsOpen"></z-switch>
</template>

```html
<z-switch default-checked @change="getIsOpen"></z-switch>
```

注： 点击开关组件将会报告开关的状态，监听change事件即可。

```js
methods: {
  getIsOpen(isOpen) {
    if (isOpen) {
      console.log('开关状态：打开')
    }
    else{
      console.log('开关状态：关闭')
    }
  }
}
```

### 禁用状态

默认禁用状态：

<template>
  <z-switch disabled></z-switch>
</template>

```html
<z-switch disabled></z-switch>
```

禁用且开启状态：

<template>
  <z-switch disabled default-checked :off-text="'开'"></z-switch>
</template>

```html
<z-switch disabled default-checked :off-text="'开'"></z-switch>
```

注：禁用状态下开关将不会触发鼠标事件。

### API
<template>
  <div class="introduce-block">
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['default-checked','Boolean','否','false','开关初始是否开启'],
            ['disabled','Boolean','否','false','是否禁用开关'],
            ['width','Number','否','50','开关宽度'],
            ['height','Number','否','25','开关高度'],
            ['bgc','String','否','rgb(65, 184, 131)','开启时的背景色'],
            ['on-text','String','否','-','开启时显示的文字'],
            ['off-text','String','否','-','关闭时显示的文字'],
            ['name','String','否','-','switch对应的name(适用于表单提交)']
          ]">
    </z-table>
  </div>
</template>

### EVENT
<template>
  <div class="introduce-block">
    <z-table
    :ths="['事件名称', '说明', '回调参数']"
    :trs="[
            ['change','switch状态发生变化时的回调函数','新状态的布尔值']
          ]">
    </z-table>
  </div>
</template>

<script>
export default {
  methods: {
    getIsOpen(isOpen) {
      if (isOpen) {
        console.log('开关状态：打开')
      }
      else{
        console.log('开关状态：关闭')
      }
    }
  }
}
</script>
