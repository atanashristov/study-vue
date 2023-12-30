---
description: Parcel - A zero configuration web application bundler
image: /images/logos/javascript-logo.png
head:
  meta:
    - name: 'keywords'
      content: 'JavaScript, Webpack, Parcel'
publishedAt: 2018-10-14T00:00:00-06:00
---
# Parcel - A zero configuration web application bundler

![Parcel - A zero configuration web application bundler](/images/logos/javascript-logo.png)

_Webpack_ configuration is complicated? Take a look at _Parcel_, a "blazing fast, zero configuration web application bundler".

I started learning some React the last months and I realize how far JavaScript development went recently. The React community created good practices for developing single page JavaScript projects. While the ecosystem is very open and many technologies and packages can be involved, the processes after all crystallized. As a result tooling has been developed. We have the _create-react-app_ tool, the _Next.js_ and many more.

These tools normally use **Webpack** as a module builder. It brings together all the dependencies. It does the necessary transforms of front-end assets, programming language preprocessing (wow, we can use F#), CSS preprocessing. It can include images, etc. At the end, the application usually is compiled into a self contained single file.

While the idea is charming, the Webpack **configuration** is pretty complicated. I was wondering if there is something easy to kick off a project and do these things without using starter kit and _without all the complicated configuration_ around Webpack.

Sure, there is a tool, and this is [Parcel](https://parceljs.org/){:target="_blank"}.

<hr/>

Table of content:

<!-- vscode-markdown-toc -->
- [Parcel - A zero configuration web application bundler](#parcel---a-zero-configuration-web-application-bundler)
  - [Start a project](#start-a-project)
  - [Npm script](#npm-script)
  - [Hot reload](#hot-reload)
  - [Customizing Babel](#customizing-babel)
  - [Using Sass](#using-sass)
  - [Production build](#production-build)
  - [Links](#links)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

<hr/>

**Parcel** can be used to build both client side apps ad well as Node.js server side apps.

It includes all the important things we need to develop modern JavaScript apps:

- Fast bundle times
- Bundling supports JS, CSS, HTML, files, and more
- Import/Export module system
- Code transforms that include Babel, TypeScript, Flow, PostCSS, SCSS, PostHTML, etc.
- Hot module replacement
- Code splitting
- Tree shaking (dead code elimination)
- Error handling
- Minification and Source maps

and more.

Parcel has good documentation that also includes section with helpful recipes, following which, It is very easy to start new project.

## Start a project

I already have Node.js and npm installed. I use `npm` to create new project inside the directory I create. I use `-y` to automatically accept all the default values and create `package.json` file:

```bash{3}
mkdir parcel-example
cd parcel-example
npm init -y
```

As next I install the `parcel-bundler` module, which provides the `parcel` command line tool I'll be using for the build. I install the `parcel-bundler` as development dependency on the project, that way it does not need to be installed globally:

```bash
npm install --save-dev parcel-bundler
```

The `parcel` command line tool is now installed under `./node_modules/.bin/`.

The build will take the files from `./src` directory. I create this directory add few files in it:

```bash
mkdir -p src src/scripts src/styles
touch ./src/index.html ./src/scripts/index.js ./src/styles/index.scss
```

Next I edit the `index.html`. I create simple HTML5 document and add a `script` reference to the JavaScript file.

Note: If you are using _Visual Studio Code_, you can just type `html:5` to bring html5 document snippet.

```html{12}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Parcel Example</h1>
  <div id="hello-world"></div>
  <script src="./scripts/index.js"></script></body>
</html>
```

Next I add some code to the `index.js` file:

```javascript
const helloWorldElement = document.getElementById('hello-world');

helloWorldElement &&
  (helloWorldElement.innerText = `Hello Atanas Hristov!`);
```

## Npm script

I modify the `package.json` file and add _npm script_ to run parcel. All we need is, point to the `src/index.html` file.

```javascript{7}
{
  "name": "parcel-example",
  "version": "1.0.0",
  "description": "Example project using [Parcel](https://parceljs.org/)",
  "main": "index.js",
  "scripts": {
    "develop": "./node_modules/.bin/parcel src/index.html"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@bitbucket.org/ahristov/parcel-example.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "homepage": "https://bitbucket.org/ahristov/parcel-example#readme",
  "devDependencies": {
    "parcel-bundler": "^1.10.3"
  }
}

```

At this point we already have bundling and this is all the configuration that we need. Now we can run the npm develop script:

```bash
npm run develop
```

This starts development server on port 1234:

![Parcel started](/images/parcel/parcel_run-1.png)

If we open in Chrome the above url, we can see our page and the JavaScript working:

![Parcel running](/images/parcel/parcel_example-1.png)

## Hot reload

From now, if we change the html or the javascript file, we see instant result in the browser.

Let's add another javascript file and see how the import/export works.

I create `./src/scripts/utils/names.js`, export a function from it:

```javascript
const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
}

export { getFullName };
```

Then I use it in the `./src/scripts/index.js` file:

```javascript
import { getFullName } from './utils/names';

const fullName = getFullName('Atanas', 'Hristov');
const helloWorldElement = document.getElementById('hello-world');

helloWorldElement && (helloWorldElement.innerText = `Hello ${fullName}!`);
```

After we save the changes, our page still looks the way it was, so things are working.

If we inspect the _sources_ tab in the Developer tools, we can see the source maps working:

![Parcel source maps](/images/parcel/parcel_source_maps-1.png)

**Note**: There is an issue with the source maps. In order to get the source maps working after changes in the JavaScript, we _need to refresh the browser_.

## Customizing Babel

The **Babel** compatibility is set to `env` preset by default. This is simply because it is the default setting for Babel.

Let's install an [experimental Babel plugin](https://babeljs.io/docs/en/plugins#experimental){:target="_blank"}. Experimental plugins are bringing nonstandard proposal ECMAScript language features with Babel.

In this example I install [nullish-coalescing-operator](https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator){:target="_blank"} plugin.

With _nullish coalescing operator_ I can normalize `null` parameters:

```javascript
var foo = object.foo ?? "default";
```

I change `./src/scripts/utils/names.js` like this:

```javascript{2,3}
const getFullName = (firstName, lastName) => {
  firstName = firstName ?? 'John';
  lastName = lastName ?? 'Doe';

  return `${firstName} ${lastName}`;
}

export { getFullName };
```

If we refresh the page, we get build error:

![Experimental features browser error](/images/parcel/parcel_experimental_js-1.png)

And also in the command line our server explains in the console:

![Experimental features console error](/images/parcel/parcel_experimental_js-2.png)

To fix this, we install We install the babel plugin `@babel/plugin-proposal-nullish-coalescing-operator`:

```bash
npm install --save-dev @babel/plugin-proposal-nullish-coalescing-operator
```

As next, we add `.babelrc` _babel configuration file_ at the home directory of the project:

```javascript
{
  "plugins": [
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ]
}
```

Let's now remove the actual parameters to `getFullName()` in `./src/scripts/index.js`:

```javascript{3}
import { getFullName } from './utils/names';

const fullName = getFullName();
const helloWorldElement = document.getElementById('hello-world');

helloWorldElement && (helloWorldElement.innerText = `Hello ${fullName}!`);
```

If we run the development server again:

```bash
npm run develop
```

and refresh the page, the parameters to the `getFullName` are defaulted now:

![Defaulted parameters](/images/parcel/parcel_default_params-1.png)

## Using Sass

Let's add some `Sass` in the file `./src/styles/index.scss`:

```css
$primary-color: darkmagenta;
$secondary-color: green;

h1 {
  color: $primary-color;
}

#hello-world {
  color: $secondary-color;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20pt;
  font-weight: bold;
}
```

I install the `sass` npm package:

```bash
npm install sass
```

After the installation finished, I import the `index.scss` file into `./src/scripts/index.js`:

```javascript{2}
import { getFullName } from './utils/names';
import '../styles/index.scss';

const fullName = getFullName();
const helloWorldElement = document.getElementById('hello-world');

helloWorldElement && (helloWorldElement.innerText = `Hello ${fullName}!`);
```

Now, if we restart the web server and refresh the page, we get Sass into our project and we should see the styling modified.

![Parcel Sass example](/images/parcel/parcel_example-2.png)

## Production build

To compile our project we add another npm script in the `package.json` file:

```javascript{3}
  "scripts": {
    "develop": "./node_modules/.bin/parcel src/index.html",
    "build": "./node_modules/.bin/parcel build src/index.html --out-dir public"
  },
```

By default it will build the content into `./dist` directory. This directory already exists and I set the output directory to `./public`. If we run:

```bash
npm run build
```

, we get the production build of the compiled assets:

![Parcel build](/images/parcel/parcel_build-1.png)

And now we have our simple setup and we can keep working with it.

## Links

[Code repository for this blog](https://bitbucket.org/ahristov/parcel-example){:target="_blank"}

[Parcel](https://parceljs.org/){:target="_blank"}

[Babel nullish-coalescing-operator](https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator){:target="_blank"}
