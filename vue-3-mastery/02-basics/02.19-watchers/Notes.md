# Notes

The _watchers_ provide a way to listen to data changes and are added as property `watch`.

The most common case is to compute expensive and slow operations.

Summary:

- `data` - these are the _reactive properties_ which hold the state of the app
- `computed` - these are the _computed properties_ which hold cached calculations. Can use for formatting
- `watch` - these are watchers that _are notified_ when _reactive or computed properties have changed_.
- `methods` - these are _methods_ to execute business logic
