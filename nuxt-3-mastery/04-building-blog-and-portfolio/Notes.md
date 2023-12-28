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
