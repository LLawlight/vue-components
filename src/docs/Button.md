## Button 按钮

### 基础按钮
<template>
  <div class="introduce">
    <z-button @click="test">default</z-button>
  </div>

  <div class="introduce">
    <z-button type="primary">primary</z-button>
  </div>

  <div class="introduce">
    <z-button type="success">success</z-button>
  </div>

  <div class="introduce">
    <z-button type="info">info</z-button>
  </div>

  <div class="introduce">
    <z-button type="warning">warning</z-button>
  </div>

  <div class="introduce">
    <z-button type="danger">danger</z-button>
  </div>
</template>

```html
<z-button>default</z-button>
<z-button type="primary">primary</z-button>
```

### 加载状态
<template>
<z-button type="warning" loading>加载中...</z-button>
</template>

```html
<z-button type="warning" loading>加载中...</z-button>
```

### 禁用状态
<template>
<z-button disabled>满 &yen;199 起送</z-button>
</template>

```html
<z-button disabled>满 &yen;199 起送</z-button>
```

### API
注：加载状态和禁用状态下按钮将不会触发事件。
<template>
  <div class="introduce-block">
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['type','String','否','default','按钮样式(default,primary,success,info,warning,danger)'],
            ['loading','Boolean','否','false','是否显示加载状态'],
            ['disabled','Boolean','否','false','是否禁用按钮']
          ]">
    </z-table>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      alert(1)
    }
  }
}
</script>
