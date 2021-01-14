/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logWarning } = require('../../dist/lib/es5/index');
const { reset, tagColorMap } = require('../../dist/lib/es5/_private/index');

describe('warning', () => {
  test('basic', () => {
    console.log = jest.fn();
    logWarning()('This is a warning!');
    expect(console.log).lastCalledWith(tagColorMap.get('yellow'), 'Warning', reset, 'This is a warning!');
    jest.clearAllMocks();
  });
  
  test('custom tag message', () => {
    console.log = jest.fn();
    logWarning({ tagMessage: 'CUSTOM' })('This is a warning!');
    expect(console.log).lastCalledWith(tagColorMap.get('yellow'), 'CUSTOM', reset, 'This is a warning!');
    jest.clearAllMocks();
  });
});