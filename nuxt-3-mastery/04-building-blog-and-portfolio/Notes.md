# Notes

## 04-building-blog-and-portfolio

To create new application run:

```sh
npx nuxi@latest init portfolio
```

then:

```sh
cd portfolio
npm run dev
```

To learn more about directory structure, see [Custom Directories](https://nuxt.com/docs/guide/directory-structure/components#custom-directories) page.

### Layouts

Can set global or custom layout.

Custom layout can be set globally, per page or changed dynamically/programmatically.

See: [Layouts](https://nuxt.com/docs/guide/directory-structure/layouts) page.

### Modules

To install modules to the Nuxt project, check the [Nuxt Modules](https://nuxt.com/modules) directory.

For _tailwindcss_

- add `@nuxtjs/tailwindcss` dependency to the project: `npm install --save-dev @nuxtjs/tailwindcss`

- add `@nuxtjs/tailwindcss` to modules section of the _nuxt.config.{ts,js}_:

```js
{
  modules: [
    '@nuxtjs/tailwindcss'
  ]
}
```

- start the app `npm run dev`

- verify module is active

On the webpage press _Shift+Alt+D_ to toggle _Nuxt DevTools_ and verify the module is active from the modules section.

### Style with Tailwind CSS

See [Tailwind CSS](https://tailwindcss.com/docs/installation) page.

### Components

Add to directory _components_. They are imported automatically.

`@apply` allows to apply Tailwind CSS classes to a class:

```html
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200
}
</style>
```

### SEO and Meta tags

See [SEO and meta](https://nuxt.com/docs/getting-started/seo-meta) page.

On the page open the _Nuxt DevTools_ and select _Open Graph_ to see the list of _Missing Tags_. It also provides a _Code Snipped_ how to add those.

For the Open Graph (OG) Protocol tags see [ogp.me/#metadata](https://ogp.me/#metadata) page.

Note that with `useHead()` we can specify `title` for the pages and `titleTemplate` in the template page.

### External CSS

See [External CSS documentation](https://nuxt.com/docs/getting-started/seo-meta#external-css) page.

You can add Google fonts to your site.

### Data fetching

See [Data fetching](https://nuxt.com/docs/getting-started/data-fetching) page.

### Dark mode

With `ref()` we create reactive mutable object:

```js
 const showNextModelLabel = ref(false)`
```

and then reference and change it from the template:

```html
<div class="text-gray-500 text-xs" v-if="showNextModelLabel">Change to {{ nextMode }}</div>
<button @click="toggleMode" @mouseenter="showNextModelLabel = true" @mouseleave="showNextModelLabel = false" ...
```

With `computed()` we create reactive readonly object:

```js
const nextModeIcon = computed(() => nextModeIcons[nextMode.value])
```

and then reference and change it from the template:

```html
... {{ nextModeIcon }} ...
```

To render content only on the client, we wrap it in `<ClientOnly/>` tag:

```html
<ClientOnly>
  <ColorModeSelector />
</ClientOnly>
```

See:

- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Nuxt Color Mode](https://color-mode.nuxtjs.org/)

### Content Management

Nuxt Content reads _content/_ directory and parses _.md_, _.yml_, _.csv_, _.json_.

If the catch all page is `_pages/blog/[...slug].vue_, then we add the blog content posts into _content/blog/_ folder, we follow the same directory structure.

You can also add files to sub-folders, thereof _content/blog/dir1/file1.md_ can be open with url path _blog/dir1/file1_

For Markdown it uses _MDC syntax_.

The Markdown content is rendered using _Prose Components_ like `ProseH1`, `ProseP`, etc.

These components can be customized. To overwrite a prose component, create a component with the same name in your project _components/content/_ directory (ex: _components/content/ProseA.vue_).

The content can be queried by _Query builder_

To be able to show content we have to install the _Nuxt Content Module_ with `npm install @nuxt/content`

Then we have to enable the module into _nuxt.config.ts_:

```js
  plugins: [
    require('@tailwindcss/typography')
  ],
```

Also, _tailwindcss_ overrides the styling, so all looks the same. We need to install the _@tailwindcss/typography plugin_: `npm install -D @tailwindcss/typography` and then enable the module into _nuxt.config.ts_.

The plugin only applies when we explicitly add a `prose` class:

```html
  <article class="prose dark:prose-invert">
    <ContentDoc />
  </article>
```

See:

- [Nuxt Content](https://content.nuxt.com/)
- [Nuxt Content Directory](https://content.nuxt.com/usage/content-directory)
- [Nuxt Content with Markdown](https://content.nuxt.com/usage/markdown)
- [Nuxt Content Prose Components](https://content.nuxt.com/components/prose)
- [Nuxt Content Query Builder](https://content.nuxt.com/composables/query-content#query-builder)
- [@tailwindcss/typography plugin](https://tailwindcss.com/docs/typography-plugin)
- [VS Code MDC Markdown Components Extension](https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc)
- [Markdown Live Preview](https://markdownlivepreview.com/)
- [Tailwind Play](https://play.tailwindcss.com/uj1vGACRJA?layout=preview)
