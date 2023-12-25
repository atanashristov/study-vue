# Notes

## 05.64-programmatic-navigation

We know how to create clickable links to route programmatically.

Now we want to see how to navigate to route programmatically.

Every component has access to the special `$router` object.

It's `push()` method allows redirect _to specific url or named route_.

```js
          return this.$router.push({
            name: "not-found",
            params: {
              url: "wrong"
            }
          });
```
