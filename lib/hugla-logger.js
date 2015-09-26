"use strict";

const util = require('util');

/**
 * HuglaLogger - logger module for hugla web framework's node back-end
 */
class HuglaLogger {

  /**
   * Class constructor
   *
   * @param {object} [params] Configuration object
   * @param {string} [params.prefix] Log prefix
   * @param {string} [params.module] Log module
   */
  constructor(params) {
    params = params || {};

    let template = '%s %s';

    if (params.prefix) {
      template = params.prefix + ' ' + template;
    }

    if (params.module) {
      template = '[' + params.module + '] ' + template;
    }

    this.template = template;
  }

  /**
   * Log debug message
   */
  debug() {
    console.log(this.template, 'DEBUG', util.format.apply(util, arguments));
  }

  /**
   * Log info message
   */
  info() {
    console.log(this.template, 'INFO', util.format.apply(util, arguments));
  }

  /**
   * Log warning message
   */
  warn() {
    console.log(this.template, 'WARN', util.format.apply(util, arguments));
  }

  /**
   * Log error message
   */
  error() {
    console.log(this.template, 'ERROR', util.format.apply(util, arguments));
  }
}

module.exports = HuglaLogger;