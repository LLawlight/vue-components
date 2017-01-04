## Install & Usage 安装与使用

### npm 安装

```bash
$ npm install master --save
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

<template>
<z-table
:title="'组件名称与标签一览表'"
:ths="['组件名称','name','标签']"
:trs="[
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
