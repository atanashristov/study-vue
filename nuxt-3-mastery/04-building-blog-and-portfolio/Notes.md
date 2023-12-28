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
