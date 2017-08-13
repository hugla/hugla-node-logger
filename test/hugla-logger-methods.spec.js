const HuglaLogger = require('../lib/hugla-logger.js').default;

const huglaLogger = new HuglaLogger();

test('logger instance has debug method', () => {
  expect(huglaLogger.debug).toBeDefined();
});

test('logger instance has info method', () => {
  expect(huglaLogger.info).toBeDefined();
});

test('logger instance has warn method', () => {
  expect(huglaLogger.warn).toBeDefined();
});

test('logger instance has error method', () => {
  expect(huglaLogger.error).toBeDefined();
});
