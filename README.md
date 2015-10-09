# HuglaLogger
### Hugla web framework's node back-end logger module

[![Build Status](https://travis-ci.org/hugla/hugla-node-logger.svg?branch=master)](https://travis-ci.org/hugla/hugla-node-logger)
[![Coverage Status](https://coveralls.io/repos/hugla/hugla-node-logger/badge.svg?branch=master&service=github)](https://coveralls.io/github/hugla/hugla-node-logger?branch=master)

## Usage

Here is a descriptive example of using HuglaLogger

```javascript

// require the module
var HuglaLogger = require('hugla-logger');

// instantiate
var huglaLogger = new HuglaLogger();

// and use
huglaLogger.debug('debug message');
huglaLogger.info('info message');
huglaLogger.warn('warning message');
huglaLogger.error('error message');

```
