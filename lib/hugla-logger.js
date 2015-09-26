"use strict";

var util = require('util');

/**
 * HuglaLogger - logger module for hugla web framework's node back-end
 */
class HuglaLogger {

  /**
   * Log debug message
   */
  debug() {
    console.log('%s %s', 'DEBUG', util.format.apply(util, arguments));
  }

  /**
   * Log info message
   */
  info() {
    console.log('%s %s', 'INFO', util.format.apply(util, arguments));
  }

  /**
   * Log warning message
   */
  warn() {
    console.log('%s %s', 'WARN', util.format.apply(util, arguments));
  }

  /**
   * Log error message
   */
  error() {
    console.log('%s %s', 'ERROR', util.format.apply(util, arguments));
  }
}

module.exports = HuglaLogger;