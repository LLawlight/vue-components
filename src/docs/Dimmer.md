## Dimmer 遮罩层

<template>
  <z-button type="danger" @click="show = true">点击制造雾霾</z-button>

  <z-dimmer :show="show" @click="show = false"></z-dimmer>
</template>

```html
<z-button type="danger" @click="show = true">点击制造雾霾</z-button>

<z-dimmer :show="show" @click="show = false"></z-dimmer>
```

```js
data() {
  return {
    show: false
  }
}
```

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

注：遮罩层显示状态下将会自动禁用PC端和移动端页面滚动（不影响遮罩层之上的浮层滚动）。

### API

<template>
  <z-table
  :ths="['参数','类型','必填','默认值','说明']"
  :trs="[
    ['show','Boolean','是','-','是否显示遮罩层']
  ]">
  </z-table>
</template>
