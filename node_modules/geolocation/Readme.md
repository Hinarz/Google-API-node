# geolocation

geolocation

[![Dependency Status](https://gemnasium.com/tellnes/geolocation.png)](https://gemnasium.com/tellnes/geolocation)

## Usage

```javascript
var geolocation = require('geolocation')

geolocation.getCurrentPosition(function (err, position) {
  if (err) throw err
  console.log(position)
})
```

## Install

    $ npm install geolocation

## API

### geolocation.getCurrentPosition([options], callback)

Wraps `navigator.geolocation.getCurrentPosition` and exposes a node-ish api.

### geolocation.createWatcher([options], [changeListener])

Returns an instance of `Watcher`

### Class: geolocation.Watcher

Inherits from `EventEmitter`

#### new geolocation.Watcher([options])

#### watcher.start()

Starts watching the current position.

#### watcher.stop()

Stops watching the current position.

#### Event: 'change'

Emitted when the position change.

#### Event: 'error'

Emitted if an error occurs.

## License

MIT
