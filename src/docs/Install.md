## Install & Usage 安装与使用

### npm 安装

```bash
$ npm install z-vue-components --save
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
<z-button
:text="'Hello World!'">
</z-button>
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
<z-button
:text="'Hello world!'">
</z-button>
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
<z-button
:text="'Hello world!'">
</z-button>
```

<template>
<z-table
:title="'组件名称与标签一览表'"
:ths="['组件名称','name','标签']"
:trs="[
        ['Grid 栅格','zRow, zCol','<z-row>, <z-col>'],
        ['Aside 侧边栏','zAside','<z-aside>'],
        ['BackTop 返回顶部','zBacktop','<z-backtop>'],
        ['Button 按钮','zButton','<z-button>'],
        ['Carrousel 轮播图','zCarrousel','<z-carrousel>'],
        ['Dropmenu 下拉菜单','zDropmenu','<z-dropmenu>'],
        ['ImageInput 图片放置','zImageinput','<z-imageinput>'],
        ['InputNumber 计数器','zInputnumber','<z-inputnumber>'],
        ['Modal 模态窗','zModal','<z-modal>'],
        ['Navbar 导航栏','zNavbar','<z-navbar>'],
        ['Pagination 分页器','zPagination','<z-pagination>'],
        ['Progress 进度条','zProgress','<z-progress>'],
        ['Switch 开关','zSwitch','<z-switch>'],
        ['Table 表格','zTable','<z-table>']
      ]">
</z-table>
</template>
