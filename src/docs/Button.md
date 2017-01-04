<template>
  <h2><a href="#button">Button 按钮</a></h2>

  <div class="introduce">
    <z-button
    :text="'defalut'">
    </z-button>
  </div>

  <div class="introduce">
    <z-button
    :text="'primary'"
    :type="'primary'">
    </z-button>
  </div>

  <div class="introduce">
    <z-button
    :text="'success'"
    :type="'success'">
    </z-button>
  </div>

  <div class="introduce">
    <z-button
    :text="'info'"
    :type="'info'">
    </z-button>
  </div>

  <div class="introduce">
    <z-button
    :text="'warning'"
    :type="'warning'">
    </z-button>
  </div>

  <div class="introduce">
    <z-button
    :text="'danger'"
    :type="'danger'">
    </z-button>
  </div>

  <div class="introduce-block">
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['text','String','是','-','按钮文字'],
            ['type','String','否','defalut','按钮样式(defalut,primary,success,info,warning,danger)']
          ]">
    </z-table>
  </div>
</template>

```html
<z-button
:text="'primary'"
:type="'primary'">
</z-button>
```
