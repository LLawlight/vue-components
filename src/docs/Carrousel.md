<template>
  <h2><a href="#carrousel">Carrousel 轮播图</a></h2>

  <z-carrousel
  :width="350"
  :height="350"
  :autoplay="true"
  :images="[
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548627&di=08274114517ec51664c7faf924e4ba1b&imgtype=jpg&er=1&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F1f178a82b9014a909461e9baa1773912b31bee5e.jpg'
  },
  {
    src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=959991046,3561375491&fm=27&gp=0.jpg',
    href: 'http://zhaoyuxiang.cn'
  },
  {
    src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2988405876,1451635215&fm=27&gp=0.jpg',
    href: 'https://github.com/LLawlight'
  }
  ]"></z-carrousel>
</template>

兼容PC端和移动端。

```html
<z-carrousel
:width="350"
:height="350"
:autoplay="true"
:images="[
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548627&di=08274114517ec51664c7faf924e4ba1b&imgtype=jpg&er=1&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F1f178a82b9014a909461e9baa1773912b31bee5e.jpg'
  },
  {
    src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=959991046,3561375491&fm=27&gp=0.jpg',
    href: 'http://zhaoyuxiang.cn'
  },
  {
    src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2988405876,1451635215&fm=27&gp=0.jpg',
    href: 'https://github.com/LLawlight'
  }
]"></z-carrousel>
```

<template>
  <div class="introduce-block">
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['width','Number','是','-','轮播图宽度'],
            ['height','Number','是','-','轮播图高度'],
            ['images','Array','是','-','需要轮播的图片组(src: 图片路径, href: 超链接)'],
            ['delay','Number','否','3000','每张图片展示的时长'],
            ['isShowIndex','Boolean','否','true','显示图片的序号'],
            ['type','String','否','next','轮播的方向(pre, next)'],
            ['autoplay','Boolean','否','false','是否开启轮播']
          ]">
    </z-table>
  </div>
</template>

<script>
import zCarrousel from 'src/components/Carrousel'
import zTable from 'src/components/Table'

export default {
  components: {
    zCarrousel,
    zTable
  }
}
</script>
