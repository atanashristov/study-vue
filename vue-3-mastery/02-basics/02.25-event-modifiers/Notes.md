# Notes

## 02.25-event-modifiers

- `.self` event handler modifier - _only fired on this element_. The handler does not handle any bubbling events from other elements
- `.stop` event handler modifier - _stop propagate the event_. The handler stops propagating the event up
- `.capture` event handler modifier - _direction is turned around_. Changes the direction of the event handling
- `.once` event handler modifier - _only fired once_. Subsequent presses do not trigger the event anymore

The modifiers can be combined `@click.self.stop="method"`.
