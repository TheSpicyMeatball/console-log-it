/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { backgroundColorMap, backgroundColorNoResetMap, colorNoResetMap, reset, styleMap } = require('../../dist/lib/es5/_private/index');

describe('value', () => {
  test('backgroundColorsNoReset', () => {
    expect(backgroundColorNoResetMap.get('black')).toBe('\x1b[40m');
    expect(backgroundColorNoResetMap.get('red')).toBe('\x1b[41m\x1b[37m');
    expect(backgroundColorNoResetMap.get('green')).toBe('\x1b[42m\x1b[37m');
    expect(backgroundColorNoResetMap.get('yellow')).toBe('\x1b[43m\x1b[37m');
    expect(backgroundColorNoResetMap.get('blue')).toBe('\x1b[44m\x1b[37m');
    expect(backgroundColorNoResetMap.get('magenta')).toBe('\x1b[45m\x1b[37m');
    expect(backgroundColorNoResetMap.get('cyan')).toBe('\x1b[46m\x1b[37m');
    expect(backgroundColorNoResetMap.get('white')).toBe('\x1b[47m\x1b[0m');
  });
  
  test('backgroundColors', () => {
    expect(backgroundColorMap.get('bgBlack')).toBe('\x1b[40m\x1b[0m');
    expect(backgroundColorMap.get('bgRed')).toBe('\x1b[41m\x1b[37m%s\x1b[0m');
    expect(backgroundColorMap.get('bgGreen')).toBe('\x1b[42m\x1b[37m%s\x1b[0m');
    expect(backgroundColorMap.get('bgYellow')).toBe('\x1b[43m\x1b[30m%s\x1b[0m');
    expect(backgroundColorMap.get('bgBlue')).toBe('\x1b[44m\x1b[37m%s\x1b[0m');
    expect(backgroundColorMap.get('bgMagenta')).toBe('\x1b[45m\x1b[37m%s\x1b[0m');
    expect(backgroundColorMap.get('bgCyan')).toBe('\x1b[46m\x1b[37m%s\x1b[0m');
    expect(backgroundColorMap.get('bgWhite')).toBe('\x1b[47m\x1b[30m%s\x1b[0m');
  });
  
  test('colorsNoReset', () => {
    expect(colorNoResetMap.get('black')).toBe('\x1b[30m');
    expect(colorNoResetMap.get('red')).toBe('\x1b[31m');
    expect(colorNoResetMap.get('green')).toBe('\x1b[32m');
    expect(colorNoResetMap.get('yellow')).toBe('\x1b[33m');
    expect(colorNoResetMap.get('blue')).toBe('\x1b[34m');
    expect(colorNoResetMap.get('magenta')).toBe('\x1b[35m');
    expect(colorNoResetMap.get('cyan')).toBe('\x1b[36m');
    expect(colorNoResetMap.get('white')).toBe('\x1b[37m');
  });

  test('style', () => {
    expect(reset).toBe('\x1b[0m');
    expect(styleMap.get('blink')).toBe('\x1b[5m%s\x1b[0m');
    expect(styleMap.get('bright')).toBe('\x1b[1m%s\x1b[0m');
    expect(styleMap.get('dim')).toBe('\x1b[2m%s\x1b[0m');
    expect(styleMap.get('hidden')).toBe('\x1b[8m%s\x1b[0m');
    expect(styleMap.get('reverse')).toBe('\x1b[7m%s\x1b[0m');
    expect(styleMap.get('underscore')).toBe('\x1b[4m%s\x1b[0m');
  });
});