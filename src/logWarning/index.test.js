/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logWarning } = require('../../dist/lib/es5/index');
const { reset, tagColorMap } = require('../../dist/lib/es5/_private/index');

describe('warning', () => {
  beforeAll(() => {    
    console.log = jest.fn();
    jest.spyOn(global, "window", "get").mockImplementation(() => ({
      document: undefined,
    }));
  });

  afterAll(() => {    
    jest.clearAllMocks();
  });

  test('basic', () => {
    logWarning()('This is a warning!');
    expect(console.log).lastCalledWith(tagColorMap.get('yellow'), 'Warning', reset, 'This is a warning!');
  });
  
  test('custom tag message', () => {
    logWarning({ tagMessage: 'CUSTOM' })('This is a warning!');
    expect(console.log).lastCalledWith(tagColorMap.get('yellow'), 'CUSTOM', reset, 'This is a warning!');
  });
});