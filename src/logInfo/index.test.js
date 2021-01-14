/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logInfo } = require('../../dist/lib/es5/index');
const { reset, tagColorMap } = require('../../dist/lib/es5/_private/index');

describe('info', () => {
  test('basic', () => {
    console.log = jest.fn();
    logInfo()('This is informational');
    expect(console.log).lastCalledWith(tagColorMap.get('blue'), 'Info', reset, 'This is informational');
    jest.clearAllMocks();
  });
  
  test('custom tag message', () => {
    console.log = jest.fn();
    logInfo({ tagMessage: 'CUSTOM' })('This is informational');
    expect(console.log).lastCalledWith(tagColorMap.get('blue'), 'CUSTOM', reset, 'This is informational');
    jest.clearAllMocks();
  });
});