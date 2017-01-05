## Grid 栅格

24格的栅格系统。

### 基础栅格

<template>
<z-row>
  <z-col class="demo-col" :span=24>
    <div class="primary-color-dark">col-24</div>
  </z-col>
</z-row>

<z-row>
  <z-col class="demo-col" :span=16>
    <div class="primary-color">col-16</div>
  </z-col>
  <z-col class="demo-col" :span=8>
    <div class="primary-color-light">col-8</div>
  </z-col>
</z-row>

<z-row>
  <z-col class="demo-col" :span=12>
    <div class="primary-color">col-12</div>
  </z-col>
  <z-col class="demo-col" :span=12>
    <div class="primary-color-light">col-12</div>
  </z-col>
</z-row>

<z-row>
  <z-col class="demo-col" :span=8>
    <div class="primary-color">col-8</div>
  </z-col>
  <z-col class="demo-col" :span=8>
    <div class="primary-color-light">col-8</div>
  </z-col>
  <z-col class="demo-col" :span=8>
    <div class="primary-color">col-8</div>
  </z-col>
</z-row>

<z-row>
  <z-col class="demo-col" :span=6>
    <div class="primary-color">col-6</div>
  </z-col>
  <z-col class="demo-col" :span=6>
    <div class="primary-color-light">col-6</div>
  </z-col>
  <z-col class="demo-col" :span=6>
    <div class="primary-color">col-6</div>
  </z-col>
  <z-col class="demo-col" :span=6>
    <div class="primary-color-light">col-6</div>
  </z-col>
</z-row>
</template>

```html
<z-row>
  <z-col :span=16><div>col-16</div></z-col>
  <z-col :span=8><div>col-8</div></z-col>
</z-row>
```

### 区块间隔

<template>
<z-row :gutter=20>
  <z-col class="demo-col" :span=6>
    <div class="primary-color">col-6</div>
  </z-col>
  <z-col class="demo-col" :span=6>
    <div class="primary-color-light">col-6</div>
  </z-col>
  <z-col class="demo-col" :span=6>
    <div class="primary-color">col-6</div>
  </z-col>
  <z-col class="demo-col" :span=6>
    <div class="primary-color-light">col-6</div>
  </z-col>
</z-row>
</template>

```html
<z-row :gutter=20>
  <z-col :span=6><div>col-6</div></z-col>
  <z-col :span=6><div>col-6</div></z-col>
  <z-col :span=6><div>col-6</div></z-col>
  <z-col :span=6><div>col-6</div></z-col>
</z-row>
```

### 左右偏移
<template>
  <z-row>
    <z-col class="demo-col" :span=8>
      <div class="primary-color">col-8</div>
    </z-col>
    <z-col class="demo-col" :span=8 :offset=8>
      <div class="primary-color">col-8 offset-8</div>
    </z-col>
  </z-row>
</template>

```html
<z-row>
  <z-col :span=8><div>col-8</div></z-col>
  <z-col :span=8 :offset=8><div>col-8 offset-8</div></z-col>
</z-row>
```

### 栅格排序

<template>
  <z-row>
    <z-col class="demo-col" :span=16 :push=8>
      <div class="primary-color">col-16 col-push-8</div>
    </z-col>
    <z-col class="demo-col" :span=8 :pull=16>
      <div class="primary-color-light">col-8 col-pull-16</div>
    </z-col>
  </z-row>
</template>

```html
<z-row>
  <z-col :span=16 :push=8><div>col-16 col-push-8</div></z-col>
  <z-col :span=8 :pull=16><div>col-8 col-pull-16</div></z-col>
</z-row>
```

### API

<template>
  <z-table
  :title="'Row'"
  :ths="['参数','类型','必填','默认值','说明']"
  :trs="[
    ['gutter','Number','否','-','栅格间隔']
  ]">
  </z-table>

  <z-table
  :title="'Col'"
  :ths="['参数','类型','必填','默认值','说明']"
  :trs="[
    ['span','Number','是','-','栅格占位格数'],
    ['offset','Number','否','-','栅格左侧的间隔格数'],
    ['push','Number','否','-','栅格向右移动格数'],
    ['pull','Number','否','-','栅格向左移动格数'],
  ]">
  </z-table>
</template>

<style lang="less">
@primary-color: rgba(65, 184, 131, .7);
@primary-color-dark: rgb(65, 184, 131);
@primary-color-light: rgba(65, 184, 131, .4);

.primary-color {
  background-color: @primary-color;
  color: #fff;
}

.primary-color-dark {
  background-color: @primary-color-dark;
  color: #fff;
}

.primary-color-light {
  background-color: @primary-color-light;
  color: rgb(53, 73, 94);
}

.demo-col {
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin: 10px 0;
}
</style>
