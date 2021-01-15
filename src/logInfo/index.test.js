/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logInfo } = require('../../dist/lib/es5/index');
const { reset, tagColorMap } = require('../../dist/lib/es5/_private/index');

describe('info', () => {
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
    logInfo()('This is informational');
    expect(console.log).lastCalledWith(tagColorMap.get('blue'), 'Info', reset, 'This is informational');
  });
  
  test('custom tag message', () => {
    logInfo({ tagMessage: 'CUSTOM' })('This is informational');
    expect(console.log).lastCalledWith(tagColorMap.get('blue'), 'CUSTOM', reset, 'This is informational');
  });
});