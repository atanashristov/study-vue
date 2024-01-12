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

### Markdown Meta Tags

_Front Matter_ provides meta data to the content pages. It uses _YAML_ syntax.

See:

- [Markdown Front Matter](https://content.nuxt.com/usage/markdown#front-matter)
- [Markdown Front Matter Head Section](https://content.nuxt.com/composables/use-content-head)

### Custom Pages in Markdown

We can have any simple page as Markdown, for example the _about_ page. We can specify a `path`:

```html
<template>
  <main>
    <ContentDoc path="/about" />
  </main>
</template>
```

Without re-implementing _Prose Components_, we can also easy customize styling using _TailwindCSS Typography Element Modifiers_:

```html
  <article class="prose dark:prose-invert prose-h1:text-2xl prose-a:text-blue-600 hover:prose-a:text-blue-500">
    <ContentDoc path="/about" />
  </article>

```

See:

- [TailwindCSS Typography Element Modifiers](https://tailwindcss.com/docs/typography-plugin#element-modifiers)

### Content images and Code Highlighting

Images go to _images/_ folder.

Code syntax highlighting themes are included, we just need to change in _nuxt.config.ts_:

```js
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
```

See:

- [NuxtContent Code Highlighting](https://content.nuxt.com/usage/markdown#code-highlighting)
- [NuxtContent Code Highlighting Configuration](https://content.nuxt.com/get-started/configuration#highlight)
- [Shikiji](https://github.com/antfu/shikiji)
- [Shikiji - List of themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes)
- [Preview of the themes on vscodethemes.com](https://vscodethemes.com/)

Note: Code syntax highlighter did not work for me until I changed the devDependencies downgrading `@nuxt/content`:

```json
  "devDependencies": {
    "@nuxt/content": "2.7.2",
```

### Content Querying

To prevent duplication of fetching data on server and client side, we use `useAsyncData`.
We use destructuring assignment to only get he `data` property and assign it to an alias `posts`.

```html
<script setup>
const { data: posts } = await useAsyncData(
  'blog-list',
  () => queryContent('/blog').only(['_path', 'title']).find()
)
</script>
```

See:

- [Nuxt Content Query Builder](https://content.nuxt.com/composables/query-content#query-builder)

### MDC Syntax

MDC stands for MarkDown Components. It extends Markdown to write documents that interact with Vue components.

We convert the list of blog posts to Vue Content components.

We create _components/content/_ folder and _blog-posts.vue_ component.

We add _content/blog/index.md_ and delete the _pages/blog/index.vue_ file.

We filter out _index.md_ file with `.where({ _path: { $ne: '/blog' } })`.

Sometimes we would like to suppress _prose_ css styles, then we mark with `class="not-prose"`.

Note: the _title_ meta tag automatically gets created from the H1 text from the Markdown text.

```markdown
---
description: 'List of blog posts'
---
# Blog Posts

::blog-posts
```

To the blog posts we can add any custom field into the meta information, thereof we add `publishedAt`.

See:

- [NuxtContent Write Vue Content Components](https://content.nuxt.com/usage/markdown#vue-components)
- [Nuxt3 Components directory](https://nuxt.com/docs/guide/directory-structure/components)
- [MDC Visual Studio Extension](https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc)

### Table of content

We take all the _h2_ and _h3_ elements from the page and create table of content.

The `<ContentDoc/>` component is smart enough to fetch the markdown file based on the current path plus the corresponding location of the markdown file inside the folder.

```html
<ContentDoc/>
```

If we look at the documentation, the `<ContentDoc/>` component combines `<ContentRenderer/>` and `<ContentQuery/>`. It has access to parsed markdown as well as file information. It also contains table of contents based on _h2_ and _h3_ tags and it is located inside _doc..

To customize how the component renders we can use _Slots_. First we get access to the props of the child element, here is how we can just print all the json on the screen:

```html
    <ContentDoc v-slot="childProps">
      {{ childProps }}
    </ContentDoc>
```

Or if we destructure just the `doc` element and render the Markdown:

```html
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer :value="doc"/>
    </ContentDoc>
```

And at the same time we now got access to the document data:

```html
    <ContentDoc v-slot="{ doc }">
      {{ doc.body.toc.links }}
      <ContentRenderer :value="doc"/>
    </ContentDoc>
```

and this is how the json looks like printed from `{{ doc.body.toc.links }}`

```json
[
  {
    "id": "setup-virtual-box-virtual-machines",
    "depth": 2,
    "text": "Setup Virtual Box Virtual Machines",
    "children": [
      {
        "id": "host-only-network",
        "depth": 3,
        "text": "Host Only Network"
      }
    ]
  },
  {
    "id": "setup-kubernetes-cluster",
    "depth": 2,
    "text": "Setup Kubernetes Cluster"
  }
]
```

See:

- [NuxtContent - ContentDoc](https://content.nuxt.com/components/content-doc)
- [NuxtContent - ContentDoc Slots](https://content.nuxt.com/components/content-query#slots)

### Table of content - smooth scrolling

We add to _nuxt.config.ts_:

```js
export default defineNuxtConfig({
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})
```

We add custom router options in _app/router.options_ file.

See:

- [Nuxt Router options](https://nuxt.com/docs/guide/going-further/custom-routing#router-options)
- [Vue Router Options](https://router.vuejs.org/api/interfaces/RouterOptions.html)

### Table of content - highlight active section

We are using the `IntersectionObserver` browser object on `onMounted` hook to see what is the active element. That way we know when ToC section intersects with the view-port.

Then we set the `activeId` and add styling for active content link.

Best works with long paragraphs.

See:

- [VueJS onMounted()](https://vuejs.org/api/composition-api-lifecycle.html#onmounted)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

### Handling 404: Page not Found

For content pages we change the _[...slug].vue_ page We are using _slots_ with default template and named template for _#not-found_.

For other page routes we add _/error.vue_ page. It receives a single `error` object.
The `error` object provides fields `url`, `statusCode`, `statusMessage`, `message`, `description` and `data`. We assign custom fields to the `data` field.

```json
{
  "url": "/aboutx",
  "statusCode": 404,
  "statusMessage": "Page not found: /aboutx",
  "message": "Page not found: /aboutx",
  "stack": "",
  "data": "{\"path\":\"/aboutx\"}"
}
```

See:

- [Nuxt - Error handling](https://nuxt.com/docs/getting-started/error-handling)
- [VueJS - Named Slots](https://vuejs.org/guide/components/slots.html#named-slots)
- [NuxtContet - Slots](https://content.nuxt.com/components/content-doc#slots)

### Page transitions

Nuxt leverages Vue's `<Transition>` component to apply transitions between pages and layouts.

It applies animation when page or component is leaving or entering the DOM.

It it is a component, the component must have one single root element. Note: in Vue3 we can have multiple root elements under `<template>` tag.

They are 6 CSS classes that apply to `<Transition>`:

- Enter - `v-enter-from`, `v-enter-active`, `v-enter-to`
- Leave - `v-leave-from`, `v-leave-active`, `v-leave-to`

Details:

- `v-enter-from`: Applied before the element is placed inside the DOM. Sets the state of the element on the first frame of the animation.
- `v-enter-to`: Applied once the element is placed inside the DOM. Sets the state of the element on the first frame of the animation.
- `v-enter-active`: Sets the duration or easing of the animation.

These are the default names, but it can be customized.

We add CSS styles in _app.vue_, these become available for the entire app.

Then we configure in _nuxt.config.ts_ a `pageTransition`:

```js
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
```

the `name` here has to _match the css class prefixes_. That way we can have many transitions defined in our app.

the `mode` specifies which element is animated first and which second. by default they animate at the same time. We specify "out-in", the leaving elements will animate first.

See:

- [Nuxt Transitions](https://nuxt.com/docs/getting-started/transitions)
- [Vue Transitions](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)

### Main Page, Props, MDC, Reusing BlogPosts Component

Document driven mode - we create one single catch-all page.

Also we can specify layouts directly from the markdown files.

See:

- [Scoped slots](https://vuejs.org/guide/components/slots.html#scoped-slots)
- [MDC Props](https://content.nuxt.com/usage/markdown#props)
- [Document driven mode](https://content.nuxt.com/document-driven/introduction)
