## Install & Usage 安装与使用

### npm 安装

```bash
$ npm install z-vue-components --save
```

### 图标引用地址
```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_kpowu9ee7fvl5wmi.css">
```

### 全局使用

#### 所有组件

```js
import zyx from 'z-vue-components'

Vue.use(zyx)
```

#### 单组件

```js
import { zButton } from 'z-vue-components'

Vue.component(zButton.name, zButton)
```

```html
<z-button>Hello World!</z-button>
```

### 单文件使用

```js
import zButton from 'z-vue-components/src/components/Button.vue'
// or
import { zButton } from 'z-vue-components'
// or
var zButton = require('z-vue-components/src/components/Button.vue')
// or
var zButton = require('z-vue-components').zButton

new Vue({
  components: {
    zButton: zButton
  }
})
```

```html
<z-button>Hello World!</z-button>
```

### 浏览器引入

```js
<script src="path/to/vue.js"></script>
<script src="path/to/z-vue-components.min.js"></script>
<script>
  var vm = new Vue({
    components: {
      zButton: ZVueComponents.zButton
    },
    el: "#app"
  })
</script>
```

```html
<z-button>Hello World!</z-button>
```

<template>
<z-table
:title="'组件名称与标签一览表'"
:ths="['组件名称','name','标签','z-index']"
:trs="[
        ['Grid 栅格','zRow, zCol','<z-row>, <z-col>',''],
        ['ActionSheet 动作面板','zActionsheet','<z-actionsheet>','3000'],
        ['Aside 侧边栏','zAside','<z-aside>','3000'],
        ['BackTop 返回顶部','zBacktop','<z-backtop>','1000'],
        ['Button 按钮','zButton','<z-button>',''],
        ['Carrousel 轮播图','zCarrousel','<z-carrousel>',''],
        ['Dimmer 遮罩层','zDimmer','<z-dimmer>','2000'],
        ['Dropmenu 下拉菜单','zDropmenu','<z-dropmenu>',''],
        ['ImageInput 图片放置','zImageinput','<z-imageinput>',''],
        ['InputNumber 计数器','zInputnumber','<z-inputnumber>',''],
        ['Modal 模态窗','zModal','<z-modal>','3000'],
        ['Navbar 导航栏','zNavbar','<z-navbar>','1000'],
        ['Pagination 分页器','zPagination','<z-pagination>',''],
        ['Progress 进度条','zProgress','<z-progress>','10000'],
        ['Switch 开关','zSwitch','<z-switch>',''],
        ['Table 表格','zTable','<z-table>','']
      ]">
</z-table>
</template>
