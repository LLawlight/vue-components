<template>
  <div class="introduce-block">
    <z-inputnumber
    :initial-value="5"
    :min="1"
    :max="9"
    @value-change="getValue"
    ></z-inputnumber>
  </div>
</template>

```html
<z-inputnumber
:initial-value="5"
:min="1"
:max="9"
@value-change="getValue"
></z-inputnumber>
```
当数值发生改变时，计数器会把新的数值传递出来，父组件可以通过`@value-change`来接收。

```js
methods: {
  getValue: function(val) {
    console.log(val)
  }
}
```

<template>
  <div class="introduce-block">
    <z-inputnumber
    :initial-value="50"
    :min="1"
    :max="99"
    :disabled="true"
    ></z-inputnumber>
  </div>
</template>

```html
<z-inputnumber
:initial-value="50"
:min="1"
:max="99"
:disabled="true"
></z-inputnumber>
```

<template>
  <div class="introduce-block">
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['initialValue','Number','否','0','初始值'],
            ['min','Number','否','0','最小值'],
            ['max','Number','否','Infinity','最大值'],
            ['disabled','Boolean','否','false','是否禁用计数器']
          ]">
    </z-table>
  </div>
</template>

<script>
import zInputnumber from 'src/components/InputNumber'
import zTable from 'src/components/Table'

export default {
  components: {
    zInputnumber,
    zTable
  },
  methods: {
    getValue: function(val) {
      console.log(val)
    }
  }
}
</script>
