# z-vue-components

> Components for VueJS2.0

**如果你使用的vue版本小于2.1.5，请使用1.x.x的z-vue-components。**
**如果你使用的vue版本大于等于2.1.5，请使用2.x.x的z-vue-components。**

## Installation
```bash
$ npm install z-vue-components
```

## Documentation
[https://llawlight.github.io/vue-components/dist](https://llawlight.github.io/vue-components/dist)

## Usage

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

#### ES6 or CommonJS
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
    zButton
  }
})

<z-button
:text="'Hello world!'">
</z-button>
```

#### Browser globals
```html
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

<z-button
:text="'Hello world!'">
</z-button>
```

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## License
[The MIT License](/LICENSE)
