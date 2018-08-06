# Blocked

Periodic test for event loop, in the browser or in node. Callback to report each time it was blocked.

## Install

```sh
npm install [--save] @ircam/blocked
```

## Example


It is the same usage within node or a web browser.

```js
import Blocked from '@ircam/blocked';

const threshold = 100; // report blockage of more than 100 ms

const blocked = new Blocked( (duration) => {
    console.log(`Blocked for ${duration} ms`);
    }, threshold);

// that's it is runs in the background
```

```js
// in case you want to stop it:
blocked.stop();
```
