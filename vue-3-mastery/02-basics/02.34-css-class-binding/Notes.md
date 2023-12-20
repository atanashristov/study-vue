# Notes

## 02.34-css-class-binding

CSS classes can be applied using the so called _object syntax_ we use to _bind a class to element_ using `:class` directive.

```html
<div :class="{red: isRed}">
</div>
```

We can also apply multiple CSS classes with the `:class` directive:

```html
<div :class="{red: isRed, underline: isUnderline, bigfont: isBigFont}">
</div>
```

This may grow too much and become unreadable. In that case we can _add computed property_:

```js
const vm = Vue.createApp({
  data() {
    return {
      isUnderlined: false,
      isBigFont: false,
      isRed: false,
      highlightClass: 'underline',
      errorClass: 'red'
    }
  },
  computed: {
    // Use computed classes:
    classes() {
      return {
        red: this.isRed,
        underline: this.isUnderline,
        bigfont: this.isBigFont
      }
    }
  }
}).mount('#app');
```

, and then use is:

```html
<div :class="classes">
</div>
```

How we handle situation when the CSS class name can't be used as a JavaScript property name?

For example `under-line` CSS class name should be _applied as a string_:

```js
    classes() {
      return {
        red: this.isRed,
        'under-line': this.isUnderline,
        bigfont: this.isBigFont
      }
    }
```
