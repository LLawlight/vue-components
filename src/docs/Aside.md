```html
<z-button
:text="'Left'"
@click.native="asideLeft.show = true">
</z-button>
<z-aside
:show="asideLeft.show"
:title="'标题'"
:type="'left'"
@closeAside="asideLeft.show = false">
  <!-- 自定义内容 -->
</z-aside>
```
