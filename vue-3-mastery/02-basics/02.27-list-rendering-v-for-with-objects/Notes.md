# Notes

## 02.27-list-rendering-v-for-with-objects

To iterate the objects use: `v-for="(item) in items"`

To include the keys of the objects use: `v-for="(item, key) in items"`

To include the index when iterating use: `v-for="(item, key, index) in items"`

The _ordering_ is based on the `Object.keys()` method. This may differ between browsers.
