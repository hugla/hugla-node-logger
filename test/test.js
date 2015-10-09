"use strict";

const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

const HuglaLogger = require('./../index.js');

describe('HuglaLogger', function() {
  const huglaLogger = new HuglaLogger();

  it('should have #debug() method', function() {
    expect(huglaLogger).to.respondTo('debug');
  });

  it('should have #info() method', function() {
    expect(huglaLogger).to.respondTo('info');
  });

  it('should have #warn() method', function() {
    expect(huglaLogger).to.respondTo('warn');
  });

  it('should have #error() method', function() {
    expect(huglaLogger).to.respondTo('error');
  });

  it('should silent log messages in case of process.env.HUGLA_SILENT', function() {
    process.env.HUGLA_SILENT = true;

    const silentLogger = new HuglaLogger();
    const tmp = console.log;
    console.log = sinon.spy();
    silentLogger.debug("test debug message");
    expect(console.log).to.have.callCount(0);
    console.log = tmp;

    delete process.env.HUGLA_SILENT;
  });

  it('should add given prefix to log template', function() {
    const prefixed = new HuglaLogger({ prefix: 'prefix' });
    const tmp = console.log;
    console.log = sinon.spy();
    prefixed.debug("test debug message");
    expect(console.log).to.have.been.calledWithExactly('prefix %s %s', 'DEBUG', 'test debug message');
    console.log = tmp;
  });

  it('should add given module name to log template', function() {
    const moduleLogger = new HuglaLogger({ module: 'demo' });
    const tmp = console.log;
    console.log = sinon.spy();
    moduleLogger.debug("test debug message");
    expect(console.log).to.have.been.calledWithExactly('[demo] %s %s', 'DEBUG', 'test debug message');
    console.log = tmp;
  });

  describe('#debug()', function() {
    it('should print out message with debug template', function() {
      const tmp = console.log;
      console.log = sinon.spy();
      huglaLogger.debug("test debug message");
      expect(console.log).to.have.been.calledWithExactly('%s %s', 'DEBUG', 'test debug message');
      console.log = tmp;
    });
  });

  describe('#info()', function() {
    it('should print out message with info template', function() {
      const tmp = console.log;
      console.log = sinon.spy();
      huglaLogger.info("test info message");
      expect(console.log).to.have.been.calledWithExactly('%s %s', 'INFO', 'test info message');
      console.log = tmp;
    });
  });

  describe('#warn()', function() {
    it('should print out message with warn template', function() {
      const tmp = console.log;
      console.log = sinon.spy();
      huglaLogger.warn("test warn message");
      expect(console.log).to.have.been.calledWithExactly('%s %s', 'WARN', 'test warn message');
      console.log = tmp;
    });
  });

  describe('#error()', function() {
    it('should print out message with error template', function() {
      const tmp = console.log;
      console.log = sinon.spy();
      huglaLogger.error("test error message");
      expect(console.log).to.have.been.calledWithExactly('%s %s', 'ERROR', 'test error message');
      console.log = tmp;
    });
  });
});
