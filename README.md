# TypeScript implementation of debounce function



_Debounce_ creates a new function `g`, which when called will delay the invocation of the original function `f` until `n` milliseconds, BUT drop previous pending delayed emissions if a new invocation is made before `n` milliseconds.

It's very useful for scenarios when it's better to limit the number of times the function is called. E.g. think of typeahed which fetches data from API. It's enough display search results after user has stopped entering characters for some time.


## Function arguments

```ts
import { debounce } from "ts-debounce";

const debouncedFunction = debounce(originalFunction, waitMilliseconds, options);
```

- `originalFunction`
  - the function which we want to debounce
- `waitMilliseconds`
  - how many seconds must pass after most recent function call, for the original function to be called
- `isImmediate` (boolean)
    - if set to `true` then `originalFunction` will be called immediately, but on subsequent calls of the debounced function original function won't be called, unless `waitMilliseconds` passed after last call
  
## Cancellation

The returned debounced function can be cancelled by calling `cancel()` on it.

```ts
const debouncedFunction = debounce(originalFunction, waitMilliseconds, options);

debouncedFunction.cancel();
```

This implementation is based upon following sources:

- [Lodash implementation](https://lodash.com/)
- [p-debounce](https://github.com/sindresorhus/p-debounce)
