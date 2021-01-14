/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logSuccess } = require('../../dist/lib/es5/index');
const { reset, tagColorMap } = require('../../dist/lib/es5/_private/index');

describe('success', () => {
  test('basic', () => {
    console.log = jest.fn();
    logSuccess()('There has been a great success!');
    expect(console.log).lastCalledWith(tagColorMap.get('green'), 'Success', reset, 'There has been a great success!');
    jest.clearAllMocks();
  });
  
  test('custom tag message', () => {
    console.log = jest.fn();
    logSuccess({ tagMessage: 'CUSTOM' })('There has been a great success!');
    expect(console.log).lastCalledWith(tagColorMap.get('green'), 'CUSTOM', reset, 'There has been a great success!');
    jest.clearAllMocks();
  });
});