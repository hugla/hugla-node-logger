const HuglaLogger = require('../lib/hugla-logger.js').default;

test('debug method call should output debug template', () => {
  const huglaLogger = new HuglaLogger();

  /* eslint-disable no-console */
  const tmp = console.log;
  const mockFn = jest.fn();
  console.log = mockFn;

  huglaLogger.debug('test debug message');

  expect(mockFn).toHaveBeenCalledWith('%s %s', 'DEBUG', 'test debug message');

  console.log = tmp;
  /* eslint-enable no-console */
});

test('info method call should output info template', () => {
  const huglaLogger = new HuglaLogger();

  /* eslint-disable no-console */
  const tmp = console.log;
  const mockFn = jest.fn();
  console.log = mockFn;

  huglaLogger.info('test info message');

  expect(mockFn).toHaveBeenCalledWith('%s %s', 'INFO', 'test info message');

  console.log = tmp;
  /* eslint-enable no-console */
});

test('warn method call should output warn template', () => {
  const huglaLogger = new HuglaLogger();

  /* eslint-disable no-console */
  const tmp = console.log;
  const mockFn = jest.fn();
  console.log = mockFn;

  huglaLogger.warn('test warn message');

  expect(mockFn).toHaveBeenCalledWith('%s %s', 'WARN', 'test warn message');

  console.log = tmp;
  /* eslint-enable no-console */
});

test('error method call should output error template', () => {
  const huglaLogger = new HuglaLogger();

  /* eslint-disable no-console */
  const tmp = console.log;
  const mockFn = jest.fn();
  console.log = mockFn;

  huglaLogger.error('test error message');

  expect(mockFn).toHaveBeenCalledWith('%s %s', 'ERROR', 'test error message');

  console.log = tmp;
  /* eslint-enable no-console */
});
