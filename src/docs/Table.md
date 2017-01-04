<template>
  <h2><a href="#table">Table 表格</a></h2>

  <div class="introduce">
    <z-table
    :title="'表格属性'"
    :ths="['参数','类型','必填','说明']"
    :trs="[['title','字符串','否','表格标题'],['ths','一维数组','是','表头的数据'],['trs','二维数组','是','表体的数据']]">
    </z-table>
  </div>
</template>

```html
<z-table
:title="'表格属性'"
:ths="['参数','类型','必填','说明']"
:trs="[
  ['title','字符串','否','表格标题'],
  ['ths','一维数组','是','表头的数据'],
  ['trs','二维数组','是','表体的数据']
]">
</z-table>
```
