<template>
  <h2><a href="#ImageInput">ImageInput 图片放置</a></h2>

  <div class="introduce">
    <z-imageinput
    :width="200"
    :height="150"
    :src="'http://ww4.sinaimg.cn/mw1024/6ad0d67fgw1f4rd11e08cj2079064jrg.jpg'"
    :alt="'测试图片'"
    ></z-imageinput>
  </div>

  <div class="introduce-block">
    <p>自动根据容器尺寸缩放图片并展示中心位置。</p>
    <z-table
    :ths="['参数','类型','必填','默认值','说明']"
    :trs="[
            ['width','Number','是','-','容器宽度'],
            ['height','Number','是','-','容器高度'],
            ['src','String','是','-','图片路径'],
            ['alt','String','否','-','图片加载失败时显示的文字信息']
          ]">
    </z-table>
  </div>
</template>

```html
<z-imageinput
:width="200"
:height="150"
:src="'http://ww4.sinaimg.cn/mw1024/6ad0d67fgw1f4rd11e08cj2079064jrg.jpg'"
:alt="'测试图片'"
></z-imageinput>
```
