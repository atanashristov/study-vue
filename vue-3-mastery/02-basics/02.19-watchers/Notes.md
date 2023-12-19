# Notes

## 02.19-watchers

The _watchers_ provide a way to listen to data changes and are added as object `watch` on the Vue app.

The watchers are functions with two parameters `newName` and `oldName` and are named same as the properties to watch.

The most common case is to compute expensive and slow operations.

Summary:

- `data()` - a function on the Vue app that holds the  _reactive properties_ and represents the state of the app
- `computed` - an object on the Vue app that provides the _computed properties_ which hold cached calculations. Can use for formatting
- `watch` - on object on the Vuew app that adds watchers which _are notified_ when _reactive or computed properties have changed_.
- `methods` - an object on the Vue app that provides the _methods_ to execute business logic
