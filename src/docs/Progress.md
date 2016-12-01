```html
<z-progress
:bgc="'rgb(65, 184, 131)'"
:type="'bottom'"
ref="progress"
></z-progress>
```

```js
methods: {
  startProgress: function() {
    this.$refs.progress.startProgress()
  }
}
```
你可以在任何时候通过<code class="z-code">this.startProgress()</code>来触发新的进度条。
