## ActionSheet 动作面板

<template>
  <z-button
  type="success"
  @click="isShowActionSheet = true">
  打开动作面板
  </z-button>

  <z-actionsheet
  :show="isShowActionSheet"
  :title="'动作面板展示'"
  :lis="lis"
  :close-text="'确定或者取消或者其他'"
  @click998="test"
  @close="isShowActionSheet = false">
  </z-actionsheet>
</template>

<script>
export default {
  data() {
    return {
      isShowActionSheet: false,
      lis: [
        {
          id: 998,
          text: '私聊'
        },
        {
          text: '关注',
          href: 'http://blog.zhaoyuxiang.cn'
        },
        {
          text: '拉入黑名单'
        }
      ]
    };
  },

  methods: {
    test() {
      alert('点击了标识为998的item')
    }
  }
};
</script>

```html
<z-button
type="success"
@click="isShowActionSheet = true">
打开动作面板
</z-button>

<z-actionsheet
:show="isShowActionSheet"
:title="'动作面板展示'"
:lis="lis"
:close-text="'确定或者取消或者其他'"
@click998="test"
@close="isShowActionSheet = false">
</z-actionsheet>
```

```js
data() {
  return {
    isShowActionSheet: false,
    lis: [
      {
        id: 998,
        text: '私聊'
      },
      {
        text: '关注',
        href: 'http://blog.zhaoyuxiang.cn'
      },
      {
        text: '拉入黑名单'
      }
    ]
  };
},

methods: {
  test() {
    alert('点击了标识为998的item')
  }
}
```
### API

<template>
  <z-table
  :title="'主要参数'"
  :ths="['参数','类型','必填','默认值','说明']"
  :trs="[
    ['show','Boolean','是','-','是否显示动作面板'],
    ['lis','Array','是','-','动作面板中的各项条目'],
    ['title','String','否','-','动作面板的标题'],
    ['close-text','String','否','取消','动作面板关闭按钮的文字']
  ]">
  </z-table>

  <z-table
  :title="'lis中的参数'"
  :ths="['参数','类型','必填','默认值','说明']"
  :trs="[
    ['text','String','是','-','条目显示的文字'],
    ['id','Number','否','-','条目的标识'],
    ['href','String','否','-','条目要跳转到的路径']
  ]">
  </z-table>
</template>

### EVENT
<template>
  <div class="introduce-block">
    <z-table
    :ths="['事件名称', '说明', '回调参数']"
    :trs="[
            ['close','关闭动作面板时的回调函数','-'],
            ['click + id','点击单个条目时的回调函数','-'],
          ]">
    </z-table>
  </div>
</template>

#### 给条目追加点击事件的方法

如果想对某个条目绑定click方法，只需要给该条目一个标识(id),当该条目被点击时，组件会emit一个"'click' + id",在父组件接收即可。

比如例子中我们给第一个条目标识为998，那么只需要在父组件`@click998`即可。
