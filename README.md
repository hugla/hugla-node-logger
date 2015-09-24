# HuglaLogger
### Hugla web framework's node back-end logger module

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