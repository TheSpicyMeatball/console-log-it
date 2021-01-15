/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logStyle } = require('../../dist/lib/es5/index');
const { colorMap, styleMap, backgroundColorMap, reset, webColorMap, webTagColorMap } = require('../../dist/lib/es5/_private/index');

describe('logStyle', () => {
  beforeAll(() => {    
    console.log = jest.fn();
    jest.spyOn(global, "window", "get").mockImplementation(() => ({
      document: undefined,
    }));
  });

  afterEach(() => {    
    jest.clearAllMocks();
  });

  test('basic', () => {
    logStyle('green')('This message is green');
    expect(console.log).lastCalledWith(colorMap.get('green'), 'This message is green');
  });

  test('background color', () => {
    logStyle('bgGreen')('This message is on a green background');
    expect(console.log).lastCalledWith(backgroundColorMap.get('bgGreen'), 'This message is on a green background');
  });
  
  test('style', () => {
    logStyle('blink')('This message is blinking');
    expect(console.log).lastCalledWith(styleMap.get('blink'), 'This message is blinking');
  });

  test('not found', () => {
    logStyle('not found')('test');
    expect(console.log).lastCalledWith(reset, 'test');
  });
});

describe('logStyle => browser', () => {
  const reset = 'background-color: inherit; color:inherit; padding-left: inherit; padding-right: inherit; margin-right: inherit;';

  beforeAll(() => {    
    console.log = jest.fn();
    jest.spyOn(global, "window", "get").mockImplementation(() => ({
      document: {},
    }));
  });

  afterEach(() => {    
    jest.clearAllMocks();
  });

  test('basic', () => {
    logStyle('green')('This message is green');
    expect(console.log).lastCalledWith('%cThis message is green%c', webColorMap.get('green'), reset);
  });

  test('background color', () => {
    logStyle('bgGreen')('This message is on a green background');
    expect(console.log).lastCalledWith('%cThis message is on a green background%c', webTagColorMap.get('green'), reset);
  });
  
  test('style', () => {
    logStyle('blink')('This message is blinking');
    expect(console.log).lastCalledWith('%cThis message is blinking%c', reset, reset);
  });

  test('not found', () => {
    logStyle('not found')('test');
    expect(console.log).lastCalledWith('%ctest%c', reset, reset);
  });
});