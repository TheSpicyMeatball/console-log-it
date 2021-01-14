/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logError } = require('../../dist/lib/es5/index');
const { reset, tagColorMap } = require('../../dist/lib/es5/_private/index');

describe('success', () => {
  test('basic', () => {
    console.log = jest.fn();
    logError()('This is a bummer, man.');
    expect(console.log).lastCalledWith(tagColorMap.get('red'), 'Error', reset, 'This is a bummer, man.');
    jest.clearAllMocks();
  });
  
  test('custom tag message', () => {
    console.log = jest.fn();
    logError({ tagMessage: 'CUSTOM' })('This is a bummer, man.');
    expect(console.log).lastCalledWith(tagColorMap.get('red'), 'CUSTOM', reset, 'This is a bummer, man.');
    jest.clearAllMocks();
  });
});