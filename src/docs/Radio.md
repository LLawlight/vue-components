## 单选框（实验功能，谨慎使用）

### 基础单选框

#### 默认未选中

<template>
  <z-radio
    label="单选框">
  </z-radio>
</template>

```html
<z-radio label="单选框"></z-radio>
```

#### 默认选中

<template>
  <z-radio
    v-model="testSingle"
    label="单选框">
  </z-radio>
</template>

```html
<z-radio v-model="testSingle" label="单选框"></z-radio>
```

### 禁用单选框

#### 默认未选中

<template>
  <z-radio
    label="单选框"
    disabled>
  </z-radio>
</template>

```html
<z-radio label="单选框" disabled></z-radio>
```

#### 默认选中

<template>
  <z-radio
    v-model="testSingle"
    label="单选框"
    disabled>
  </z-radio>
</template>

```html
<z-radio v-model="testSingle" label="单选框" disabled></z-radio>
```

<script>
export default {
  data() {
    return {
      testSingle: '单选框',
    };
  },
};
</script>

```js
export default {
  data() {
    return {
      testSingle: '单选框',
    };
  },
};
```

### API
<z-table
  :ths="['参数','类型','必填','默认值','说明']"
  :trs="[
    ['label','String, Number','是','-','单选框对应的值'],
    ['value','String, Number','否','-','传给单选框的值'],
    ['disabled','Boolean','否','false','是否禁用单选框'],
    ['name','String','否','-','单选框的name']
  ]">
</z-table>
