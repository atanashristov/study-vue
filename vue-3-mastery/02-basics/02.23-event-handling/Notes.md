# Notes

## 02.23-event-handling

We subscribe to DOM events via `v-on` template directive, like `v-on:click="step = 2"`.

Since `v-on:click` is used very often, there is a shortcut (at click) for it: `@click="..."`.

The handler can be:

- an inline JavaScript - `@click="step = 2"` - good for prototyping
- a method name - `@click="nextStep"` - receives the DOM event object as parameter
- a call to method - `@click="nextStep(someParamsHere)"` - can pass params
  - DOM event object can also be passed - `@click="nextStep($event)"`
- a comma separated list of calls to multiple methods - `@click="step1(), step2(), step3()"`

For other shortcut event handler names such as `@click`, `@change`, `@keydown`, `@keyup`, `@mouseenter` etc.

You can simply check The [Mozilla Global attributes doca](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

To _prevent submit_, in pure JavaScript we use `event.preventDefault();`. In Vue we have `@submit.prevent="handler"`. This is a modifier for the event handler.

You can see the event hander modifiers on the [Vue Event Handling documentation pge](https://vuejs.org/guide/essentials/event-handling#event-modifiers)
