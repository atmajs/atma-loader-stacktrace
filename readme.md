### Stacktraces for compiled and minified files

Use correct linenumber and filenames in errors for better debugging.

##### Usage
```bash
$ npm i atma-loader-stacktrace -s
# not already included `atma-io`? Then:
$ npm i atma-io -s
```
```javascript
require('atma-loader-stacktrace')({
	//@default false
	handleUncaughtExceptions: true
});

// after this line of code all error objects will have original filenames, linenumbers
```

##### Minified files
```
lib/
   foo.js
   foo.min.js
   foo.min.js.map
```

Now you can `require('./lib/foo.min.js')` and on errors you will see the normalized path to `foo.js` with proper line numbers.
Any time the error occure this library will pick up the source maps (if exists `*.map`)


##### Compiled files

As for example, refer to [atma-loader-traceur](https://github.com/atmajs/atma-loader-traceur).
```
lib/
	foo.es6
```

`atma-loader` uses [atma-io](https://github.com/atmajs/atma-io) to load and dynamicaly compile the sources. And this library registers **virtual files** with the extension e.g. `*.es6.map`, so now after an error occures it will load the sourcemaps for the `foo.es6` file and correctly replace the linenumber for better debuggin.


----
(c) MIT

