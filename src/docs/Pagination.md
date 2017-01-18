<template>
  <h2><a href="#pagination">Pagination 分页器</a></h2>

  <div class="introduce-block">
    <z-pagination
    :total="11"
    :page-size="1"
    ></z-pagination>
  </div>
</template>

```html
<z-pagination
:total="11"
:page-size="1"
></z-pagination>
```
<template>
  <div class="introduce-block">
    <z-pagination
    :total="280"
    :page="14"
    :is-jumper="true"
    @current-page="getPage"
    ></z-pagination>
  </div>
</template>

```html
<z-pagination
:total="280"
:page="14"
:is-jumper="true"
@current-page="getPage"
></z-pagination>
```
当页数发生改变时，分页器会把新的页码传递出来，父组件可以通过`@current-page`来接收。
```js
methods: {
  getPage: function(val) {
    console.log("当前第" + val + "页");
  }
}
```

<template>
  <div class="introduce-block">
    <z-pagination
    :total="29"
    :page-size="4"
    :page="8"
    ></z-pagination>
  </div>
</template>

注: 在微信浏览器中使用勿忘加上`<meta name="format-detection" content="telephone=no">`，不然遇到连续的数字会愚蠢的提示你要不要打电话。
```html
<z-pagination
:total="29"
:page-size="4"
:page="8"
></z-pagination>
```

### API
<template>
  <div class="introduce-block">
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['total','Number','是','-','总条目数'],
            ['pageSize','Number','否','10','每页显示的条目数'],
            ['page','Number','否','1','初始化直接前往某一页'],
            ['isJumper','Boolean','否','false','是否开启页数输入跳转(按回车键前往)']
          ]">
    </z-table>
  </div>
</template>

### EVENT
<template>
  <z-table
  :ths="['事件名称', '说明', '回调参数']"
  :trs="[
          ['current-page','当前页码发生改变时的回调函数','新的页码']
        ]">
  </z-table>
</template>

<script>
import zPagination from 'src/components/Pagination'
import zTable from 'src/components/Table'

export default {
  components: {
    zPagination,
    zTable
  },
  methods: {
    getPage: function(val) {
      console.log("当前第" + val + "页");
    }
  }
}
</script>
