```html
<z-button
:text="'Alert'"
@click.native="alert.show = true">
</z-button>
<z-modal
:show="alert.show"
:content="'这是一个alert！'"
@close-modal="alert.show = false">
</z-modal>
```
