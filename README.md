# vue-components

> Components for VueJS2.0

## Installation
```$ npm install z-vue-components```

## How to use
``` bash
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

## Documentation
[http://zhaoyuxiang.cn/vue-components/](http://zhaoyuxiang.cn/vue-components/)

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
