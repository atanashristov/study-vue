# Notes

## 05.65-passing-parameters-to-routes-practical

Pass parameters to route with the `params` parameter:

```html
<RouterLink :to="{ name: 'article', params: { id: article.id } }">{{ article.title }}</RouterLink>
```
