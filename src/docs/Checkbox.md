## 复选框（实验功能，谨慎使用）

### 基础复选框

#### 默认未选中

<template>
  <z-checkbox
    label="复选框1">
  </z-checkbox>
</template>

```html
<z-checkbox label="复选框1"></z-checkbox>
```

#### 默认选中

<template>
  <z-checkbox
    :value="true"
    label="复选框2">
  </z-checkbox>
</template>

```html
<z-checkbox :value="true" label="复选框2"></z-checkbox>
```

### 禁用复选框

#### 默认未选中

<template>
  <z-checkbox
    label="复选框1"
    disabled>
  </z-checkbox>
</template>

```html
<z-checkbox label="复选框1" disabled></z-checkbox>
```

#### 默认选中

<template>
  <z-checkbox
    :value="true"
    label="复选框2"
    disabled>
  </z-checkbox>
</template>

```html
<z-checkbox :value="true" label="复选框2" disabled></z-checkbox>
```

### API
<z-table
  :ths="['参数','类型','必填','默认值','说明']"
  :trs="[
    ['label','String, Number','是','-','复选框对应的选项'],
    ['value','Boolean','否','false','传给复选框的状态'],
    ['disabled','Boolean','否','false','是否禁用复选框'],
    ['name','String','否','-','复选框的name']
  ]">
</z-table>
