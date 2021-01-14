/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logDebug } = require('../../dist/lib/es5/index');

describe('logDebug', () => {
  test('condition => true', () => {
    console.log = jest.fn();
    logDebug(true, 'called');
    expect(console.log).toHaveBeenCalled();
    jest.clearAllMocks();
  });

  test('condition => false', () => {
    console.log = jest.fn();
    logDebug(false, 'called');
    expect(console.log).not.toHaveBeenCalled();
    jest.clearAllMocks();
  });

  test('condition => true => multiple args', () => {
    console.log = jest.fn();
    logDebug(true, 'called', 'test');
    expect(console.log).lastCalledWith('called', 'test');
    jest.clearAllMocks();
  });
});
