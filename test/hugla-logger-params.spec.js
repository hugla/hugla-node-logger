const HuglaLogger = require('../lib/hugla-logger.js').default;

test('logger instance should prefix output', () => {
  const prefixed = new HuglaLogger({ prefix: 'prefix' });

  /* eslint-disable no-console */
  const tmp = console.log;
  const mockFn = jest.fn();
  console.log = mockFn;

  prefixed.debug('test debug message');

  expect(mockFn).toHaveBeenCalledWith('prefix %s %s', 'DEBUG', 'test debug message');

  console.log = tmp;
  /* eslint-enable no-console */
});

test('logger instance should add given module name to log template', () => {
  const moduleLogger = new HuglaLogger({ module: 'demo' });

  /* eslint-disable no-console */
  const tmp = console.log;
  const mockFn = jest.fn();
  console.log = mockFn;

  moduleLogger.debug('test debug message');

  expect(mockFn).toHaveBeenCalledWith('[demo] %s %s', 'DEBUG', 'test debug message');

  console.log = tmp;
  /* eslint-enable no-console */
});
