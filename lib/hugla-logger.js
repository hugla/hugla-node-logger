"use strict";

var util = require('util');

/**
 * HuglaLogger - logger module for hugla web framework's node back-end
 *
 * @constructor
 */
function HuglaLogger() {}

/**
 * Log debug message
 */
HuglaLogger.prototype.debug = function() {
  console.log('%s %s', 'DEBUG', util.format.apply(util, arguments));
};

/**
 * Log info message
 */
HuglaLogger.prototype.info = function() {
  console.log('%s %s', 'INFO', util.format.apply(util, arguments));
};

/**
 * Log warning message
 */
HuglaLogger.prototype.warn = function() {
  console.log('%s %s', 'WARN', util.format.apply(util, arguments));
};

/**
 * Log error message
 */
HuglaLogger.prototype.error = function() {
  console.log('%s %s', 'ERROR', util.format.apply(util, arguments));
};

module.exports = HuglaLogger;