# HuglaLogger
### Hugla web framework's node back-end logger module

[![Build Status](https://travis-ci.org/hugla/hugla-node-logger.svg?branch=master)](https://travis-ci.org/hugla/hugla-node-logger)
[![Coverage Status](https://coveralls.io/repos/hugla/hugla-node-logger/badge.svg?branch=master&service=github)](https://coveralls.io/github/hugla/hugla-node-logger?branch=master)

## Usage

Here is a descriptive example of using HuglaLogger

```javascript

// require the module
const HuglaLogger = require('hugla-logger');

// instantiate
const huglaLogger = new HuglaLogger();

// and use
huglaLogger.debug('debug message');
// result: DEBUG debug message

huglaLogger.info('info message');
// result: INFO info message

huglaLogger.warn('warning message');
// result: WARN warning message

huglaLogger.error('error message');
// result: ERROR error message

```

You can also use "prefix" and "module" options`

```javascript

const HuglaLogger = require('hugla-logger');

const prefixedLogger = new HuglaLogger({ prefix: 'example' });

prefixedLogger.debug('debug message');
// result: example DEBUG debug message

const moduleLogger = new HuglaLogger({ module: 'example' });

moduleLogger.debug('debug message');
// result: [example] DEBUG debug message

```

## License

[MIT](LICENSE)
