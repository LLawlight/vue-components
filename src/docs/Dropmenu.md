<template>
  <h2><a href="#dropmenu">Dropmenu 下拉菜单</a></h2>

  <div class="introduce">
    <z-dropmenu
    :is-show-arrow="true"
    :text="'Guide'"
    :lis="[
      {
        href: 'https://github.com/Clark-Zhao/vue-components',
        text: 'Github'
      },
      {
        href: 'https://github.com/Clark-Zhao/vue-components/archive/master.zip',
        text: 'Download'
      },
      {
        href: 'http://www.zhaoyuxiang.cn',
        text: 'Blog'
      }
    ]"
    ></z-dropmenu>
  </div>

  <div class="introduce-block">
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['type','String','否','click','菜单显示方式(click,hover)'],
            ['text','String','是','-','菜单文字'],
            ['lis','Array','是','-','列表的文字(text)和链接(href)'],
            ['isShowArrow','Boolean','否','false','是否在右侧显示▲小箭头']
          ]">
    </z-table>
  </div>
</template>

```html
<z-dropmenu
:is-show-arrow="true"
:text="'Guide'"
:lis="[
  {
    href: 'https://github.com/Clark-Zhao/vue-components',
    text: 'Github'
  },
  {
    href: 'https://github.com/Clark-Zhao/vue-components/archive/master.zip',
    text: 'Download'
  },
  {
    href: 'http://www.zhaoyuxiang.cn',
    text: 'Blog'
  }
]">
</z-dropmenu>
```
