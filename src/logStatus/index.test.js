/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { logStatus } = require('../../dist/lib/es5/index');
const { reset, tagColorMap } = require('../../dist/lib/es5/_private/index');

describe('logStatus', () => {
  test('basic', () => {
    console.log = jest.fn();
    logStatus({
      tagColor: 'blue',
      tagMessage: 'Custom',
    })('This is blue');
    expect(console.log).lastCalledWith(tagColorMap.get('blue'), 'Custom', reset, 'This is blue');
    jest.clearAllMocks();
  });

  test('indent', () => {
    console.log = jest.fn();
    logStatus({
      indent: 2,
      tagColor: 'blue',
      tagMessage: 'Custom',
    })('This is blue');
    expect(console.log).lastCalledWith('  ', tagColorMap.get('blue'), 'Custom', reset, 'This is blue');
    jest.clearAllMocks();
  });
});