---
description: Yaml - Basic Syntax
image: /images/logos/yaml-logo.png
head:
  meta:
    - name: 'keywords'
      content: 'YAML, Swagger'
publishedAt: 2018-09-15T00:00:00-06:00
toc: true
---
# Yaml - Basic Syntax

## Intro

![Yaml - Basic Syntax](/images/logos/yaml-logo.png)

These are notes on _basic YAML syntax_ which I took while studying Swagger.

YAML is used by many systems and programing languages. It is easy to write and understand and has simple format based on indentation.

YAML stands for **Y**AML **A**in't **M**arkup **L**anguage, even though originally was created to be used for markup.

YAML is _used for data_ and not for content. It is thereof similar to XML and JSON. Often it is used for _configuration files_, rather than API format.

## YAML syntax

YAML uses **whitespace indentation** and line breaks to represent document structure and levels. The indentation cannot be a tab, is has to be a space. Example:

```yaml
name:
  firstName: Atanas
  lastName: Hristov
```

### Types and key/value pairs

**Key/Value pairs** are indicated by colon followed by a space. The values can be of type:

- numbers
- strings
- booleans

**Types** are determined from the context. Strings don't need quotations and also may contain spaces. We may want to add quotes around strings so that the value won't be misinterpreted as a number or a boolean. Quotation marks can be single or double.

In the next example we have two strings followed by two numbers, followed by a boolean.

```yaml
  version: "2.55"
  description: This is a description
  price: 12.34
  units: 3
  boolean-value: true
```

### Lists and dictionaries

YAML has **dictionaries**, these are collections of key/value pairs:

```yaml
person:
  name: John Doe
  birthday: 1979-10-15
```

YAML has **lists**, where the _list items_ are indicated by a _dash_. Example of list of paragraphs:

```yaml
content:
  - Nostrud magna reprehenderit exercitation commodo nulla.
  - Irure ex ullamco occaecat officia laborum culpa.
  - Velit aliquip officia ea anim mollit proident dolore.
```

We may have **list of dictionaries**, each item in the list is a dictionary. We just need a dash in front of the first key/value pair of each item. Just the presence of the dash indicates this is a list item.

In the next example we have list of people, the first item has two key/value pairs, the second three:

```yaml
people:
  - name: John Doe
    birthday: 1979-10-15
  - name: Jane Doe
    birthday: 1985-02-07
    city: New York
```

We also may have **dictionary of lists**:

```yaml
chapter1:
  - Commodo anim ut aliqua aliqua.
  - Voluptate magna dolor proident proident.
  - Aute reprehenderit consectetur aute voluptate laboris enim.
chapter2:
  - Incididunt proident commodo mollit et laborum.
  - Minim officia cillum commodo dolor exercitation velit laboris ea.
```

We can also use _inline syntax_ for lists and dictionaries:

```yaml
chapters: [1,2,3,4]
person: {name: Jane Doe, city: NewYork}
```

### Comments

**Comments** are denoted with the pound **#**. Everything after the pound is a comment and will be ignored:

```yaml
  # Product version
  version: "2.55"
  build-number: 567 # Build number
```

### Multi-line strings and special characters

**Multi-line strings** are preserved as follows:

- The pipe character **|** _preserves lines and spaces_
- The greater than character **>** is used to _fold lines_

In the next example the pipe preserves the lines and spaces. This:

```yaml
multi-line: |
  Ut velit sunt excepteur cupidatat velit
    esse incididunt veniam incididunt.
```

translated to:

```text
Ut velit sunt excepteur cupidatat velit
  esse incididunt veniam incididunt.
```

And here is an example with folding lines. This:

```yaml
single-line: >
  Ut velit sunt excepteur cupidatat velit
      esse incididunt veniam incididunt.
```

translated to:

```text
Ut velit sunt excepteur cupidatat velit esse incididunt veniam incididunt.
```

Yaml has **special characters** that cannot be used in unquoted strings: `[] {} : > |`. For example this:

```yaml
unquoted-string: Deserunt commodo qui ea: irure commodo.
```

Should use quotes like this:

```yaml
unquoted-string: "Deserunt commodo qui ea: irure commodo."
```

## Links

[YAML](https://yaml.org/){:target="_blank"}

[Swagger](https://swagger.io/){:target="_blank"}
