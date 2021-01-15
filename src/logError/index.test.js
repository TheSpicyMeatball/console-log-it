/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logError } = require('../../dist/lib/es5/index');
const { reset, tagColorMap } = require('../../dist/lib/es5/_private/index');

describe('success', () => {
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
    logError()('This is a bummer, man.');
    expect(console.log).lastCalledWith(tagColorMap.get('red'), 'Error', reset, 'This is a bummer, man.');
  });
  
  test('custom tag message', () => {
    logError({ tagMessage: 'CUSTOM' })('This is a bummer, man.');
    expect(console.log).lastCalledWith(tagColorMap.get('red'), 'CUSTOM', reset, 'This is a bummer, man.');
  });
});