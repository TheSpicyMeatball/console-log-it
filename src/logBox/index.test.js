/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logBox } = require('../../dist/lib/es5/index');
const { colorNoResetMap, reset } = require('../../dist/lib/es5/_private/index');

describe('logBox', () => {
  test('basic', () => {
    console.log = jest.fn();
    logBox()('Test box');
    expect(console.log).toHaveBeenNthCalledWith(1, colorNoResetMap.get('cyan'), '\n╭────────────╮', '\n│  Test box  │', '\n╰────────────╯\n', reset);
    jest.clearAllMocks();
  });

  test('indent', () => {
    console.log = jest.fn();
    logBox({ indent: 4 })('Test box');
    expect(console.log).toHaveBeenNthCalledWith(1, colorNoResetMap.get('cyan'), '\n    ╭────────────╮', '\n    │  Test box  │', '\n    ╰────────────╯\n', reset);
    jest.clearAllMocks();
  });
  
  test('change color + buffer lines', () => {
    console.log = jest.fn();
    logBox({ color: 'green', bufferLines: true })('Test box');
    expect(console.log).toHaveBeenNthCalledWith(1, colorNoResetMap.get('green'), '\n╭────────────╮', '\n│            │', '\n│  Test box  │', '\n│            │', '\n╰────────────╯\n', reset);
    jest.clearAllMocks();
  });

  test('other config', () => {
    console.log = jest.fn();
    logBox({ color: 'magenta', padding: 10, symbol: '-' })('Test box');
    expect(console.log).toHaveBeenNthCalledWith(1, colorNoResetMap.get('magenta'), '\n------------------------------', '\n-          Test box          -', '\n------------------------------\n', reset);
    jest.clearAllMocks();
  });
  
  test('multiline', () => {
    console.log = jest.fn();
    logBox()(['Test box', 'Another line']);
    expect(console.log).toHaveBeenNthCalledWith(1, colorNoResetMap.get('cyan'), '\n╭────────────────╮', '\n│  Test box      │', '\n│  Another line  │', '\n╰────────────────╯\n', reset);
    jest.clearAllMocks();
  });

  test('multiline => long line first', () => {
    console.log = jest.fn();
    logBox()(['Another line', 'Test box']);
    expect(console.log).toHaveBeenNthCalledWith(1, colorNoResetMap.get('cyan'), '\n╭────────────────╮', '\n│  Another line  │', '\n│  Test box      │', '\n╰────────────────╯\n', reset);
    jest.clearAllMocks();
  });

  test('LogBoxLine', () => {
    console.log = jest.fn();
    logBox()([{ color: 'red', message: 'Test box' }, { color: 'green', message: 'Another line' }]);
    expect(console.log).toHaveBeenNthCalledWith(1, colorNoResetMap.get('cyan'), '\n╭────────────────╮', `\n│  ${colorNoResetMap.get('red')}Test box${colorNoResetMap.get('cyan')}      │`, `\n│  ${colorNoResetMap.get('green')}Another line${colorNoResetMap.get('cyan')}  │`, '\n╰────────────────╯\n', reset);
    jest.clearAllMocks();
  });
});
