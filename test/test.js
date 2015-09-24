"use strict";

var expect = require('chai').expect;
var HuglaLogger = require('./../index.js');

describe('HuglaLogger', function() {
  var huglaLogger = new HuglaLogger();

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
});