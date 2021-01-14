/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logStyle } = require('../../dist/lib/es5/index');
const { colorMap, styleMap, backgroundColorMap, reset } = require('../../dist/lib/es5/_private/index');

describe('logStyle', () => {
  test('basic', () => {
    console.log = jest.fn();
    logStyle('green')('This message is green');
    expect(console.log).lastCalledWith(colorMap.get('green'), 'This message is green');
    jest.clearAllMocks();
  });

  test('background color', () => {
    console.log = jest.fn();
    logStyle('bgGreen')('This message is on a green background');
    expect(console.log).lastCalledWith(backgroundColorMap.get('bgGreen'), 'This message is on a green background');
    jest.clearAllMocks();
  });
  
  test('style', () => {
    console.log = jest.fn();
    logStyle('blink')('This message is blinking');
    expect(console.log).lastCalledWith(styleMap.get('blink'), 'This message is blinking');
    jest.clearAllMocks();
  });

  test('not found', () => {
    console.log = jest.fn();
    logStyle('not found')('test');
    expect(console.log).lastCalledWith(reset, 'test');
    jest.clearAllMocks();
  });
});