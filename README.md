# vue-components

> Components for VueJS2.0

## Installation
```bash
$ npm install z-vue-components
```

## Documentation
[https://clark-zhao.github.io/vue-components/](https://clark-zhao.github.io/vue-components/)

## Usage

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
<script src="path/to/z-vue-components.js"></script>
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
