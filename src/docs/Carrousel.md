<template>
  <h2><a href="#carrousel">Carrousel 轮播图</a></h2>

  <z-carrousel
  :width="350"
  :height="350"
  :images="[
  {
    src: 'static/1.JPG',
    href: 'http://www.zhaoyuxiang.cn'
  },
  {
    src: 'static/2.JPG',
    href: 'http://www.blog.zhaoyuxiang.cn'
  },
  {
    src: 'static/3.JPG',
    href: 'https://github.com/Clark-Zhao'
  }
  ]"></z-carrousel>
</template>

兼容PC端和移动端。

```html
<z-carrousel
:width="350"
:height="350"
:images="[
  {
    src: 'static/1.JPG',
    href: 'http://www.zhaoyuxiang.cn'
  },
  {
    src: 'static/2.JPG',
    href: 'http://www.blog.zhaoyuxiang.cn'
  },
  {
    src: 'static/3.JPG',
    href: 'https://github.com/Clark-Zhao'
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
            ['type','String','否','next','轮播的方向(pre, next)']
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
