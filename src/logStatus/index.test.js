/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logStatus } = require('../../dist/lib/es5/index');
const { reset, tagColorMap, webTagColorMap } = require('../../dist/lib/es5/_private/index');

describe('logStatus', () => {
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
    logStatus({
      tagColor: 'blue',
      tagMessage: 'Custom',
    })('This is blue');
    expect(console.log).lastCalledWith(tagColorMap.get('blue'), 'Custom', reset, 'This is blue');
  });

  test('indent', () => {
    logStatus({
      indent: 2,
      tagColor: 'blue',
      tagMessage: 'Custom',
    })('This is blue');
    expect(console.log).lastCalledWith('  ', tagColorMap.get('blue'), 'Custom', reset, 'This is blue');
  });

  test('browser', () => {
    jest.spyOn(global, "window", "get").mockImplementation(() => ({
      document: {},
    }));
    logStatus({
      tagColor: 'blue',
      tagMessage: 'Custom',
    })('This is blue');
    expect(console.log).lastCalledWith('%cCustom%cThis is blue', webTagColorMap.get('blue') + ' padding-left: 4px; padding-right: 4px; margin-right: 8px', 'background-color: inherit; color:inherit; padding-left: inherit; padding-right: inherit; margin-right: inherit');
  });

  test('browser', () => {
    jest.spyOn(global, "window", "get").mockImplementation(() => ({
      document: {},
    }));
    logStatus({
      indent: 2,
      tagColor: 'blue',
      tagMessage: 'Custom',
    })('This is blue');
    expect(console.log).lastCalledWith('  %cCustom%cThis is blue', webTagColorMap.get('blue') + ' padding-left: 4px; padding-right: 4px; margin-right: 8px', 'background-color: inherit; color:inherit; padding-left: inherit; padding-right: inherit; margin-right: inherit');
  });

  test('browser', () => {
    jest.spyOn(global, "window", "get").mockImplementation(() => ({
      document: {},
    }));
    logStatus({
      tagColor: 'blue',
      tagMessage: 'Custom',
    })('This is blue');
    expect(console.log).lastCalledWith('%cCustom%cThis is blue', webTagColorMap.get('blue') + ' padding-left: 4px; padding-right: 4px; margin-right: 8px', 'background-color: inherit; color:inherit; padding-left: inherit; padding-right: inherit; margin-right: inherit');
  });
});