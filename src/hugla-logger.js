const util = require('util');

/**
 * HuglaLogger - logger module for hugla web framework's node back-end
 */
export default class HuglaLogger {
  /**
   * Class constructor
   *
   * @param {object} [params] Configuration object
   * @param {string} [params.prefix] Log prefix
   * @param {string} [params.module] Log module
   */
  constructor(params = {}) {
    if (process.env.HUGLA_SILENT) {
      this.debug = () => {};
      this.info = () => {};
      this.warn = () => {};
      this.error = () => {};
      return;
    }

    let template = '%s %s';

    if (params.prefix) {
      template = `${params.prefix} ${template}`;
    }

    if (params.module) {
      template = `[${params.module}] ${template}`;
    }

    this.template = template;
  }

  /**
   * Log debug message
   */
  debug(...args) {
    /* eslint-disable no-console */
    console.log(this.template, 'DEBUG', util.format(...args));
    /* eslint-enable no-console */
  }

  /**
   * Log info message
   */
  info(...args) {
    /* eslint-disable no-console */
    console.log(this.template, 'INFO', util.format(...args));
    /* eslint-enable no-console */
  }

  /**
   * Log warning message
   */
  warn(...args) {
    /* eslint-disable no-console */
    console.log(this.template, 'WARN', util.format(...args));
    /* eslint-enable no-console */
  }

  /**
   * Log error message
   */
  error(...args) {
    /* eslint-disable no-console */
    console.log(this.template, 'ERROR', util.format(...args));
    /* eslint-enable no-console */
  }
}
