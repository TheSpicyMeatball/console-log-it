/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logSuccess } = require('../../dist/lib/es5/index');
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
    logSuccess()('There has been a great success!');
    expect(console.log).lastCalledWith(tagColorMap.get('green'), 'Success', reset, 'There has been a great success!');
  });
  
  test('custom tag message', () => {
    logSuccess({ tagMessage: 'CUSTOM' })('There has been a great success!');
    expect(console.log).lastCalledWith(tagColorMap.get('green'), 'CUSTOM', reset, 'There has been a great success!');
  });
});