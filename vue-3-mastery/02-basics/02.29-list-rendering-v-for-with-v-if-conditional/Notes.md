# Notes

## 02.29-list-rendering-v-for-with-v-if-conditional

Ideally use _computed properties_ instead.

### Usage 1: Filter elements from set of elements

The `v-if` directive has a higher priority than the `v-for`. That's why we use a special `template` syntax to _make the item data available_ to `v-if`:

```html
          <template v-for="(item, index) of items">
            <li v-if="item.price < 1">
              {{index + 1}}. {{item.name}} for ${{item.price.toFixed(2)}}
            </li>
          </template>
```

### Usage 2: Only render list upon condition

Then `v-if` has access to the data:

```html
<ul>
 <li v-for="(item, index) of items" v-if="showTodos">
  {{index + 1}}. {{item.name}} for ${{item.price.toFixed(2)}}
 </li>
</ul>
```

Even better for performance:

```html
<ul v-if="showTodos">
 <li v-for="(item, index) of items">
  {{index + 1}}. {{item.name}} for ${{item.price.toFixed(2)}}
 </li>
</ul>
```
