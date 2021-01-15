export const backgroundColorMap = new Map<string, string>([
  ['bgBlack', '\x1b[40m\x1b[0m'],
  ['bgRed', '\x1b[41m\x1b[37m%s\x1b[0m'],
  ['bgGreen', '\x1b[42m\x1b[37m%s\x1b[0m'],
  ['bgYellow', '\x1b[43m\x1b[30m%s\x1b[0m'],
  ['bgBlue', '\x1b[44m\x1b[37m%s\x1b[0m'],
  ['bgMagenta', '\x1b[45m\x1b[37m%s\x1b[0m'],
  ['bgCyan', '\x1b[46m\x1b[37m%s\x1b[0m'],
  ['bgWhite', '\x1b[47m\x1b[30m%s\x1b[0m'],
]);

export const backgroundColorNoResetMap = new Map<string, string>([
  ['black', '\x1b[40m'],
  ['red', '\x1b[41m\x1b[37m'],
  ['green', '\x1b[42m\x1b[37m'],
  ['yellow', '\x1b[43m\x1b[37m'],
  ['blue', '\x1b[44m\x1b[37m'],
  ['magenta', '\x1b[45m\x1b[37m'],
  ['cyan', '\x1b[46m\x1b[37m'],
  ['white', '\x1b[47m\x1b[0m'],
]);

export const colorMap = new Map<string, string>([
  ['black', '\x1b[30m%s\x1b[0m'],
  ['red', '\x1b[31m%s\x1b[0m'],
  ['green', '\x1b[32m%s\x1b[0m'],
  ['yellow', '\x1b[33m%s\x1b[0m'],
  ['blue', '\x1b[34m%s\x1b[0m'],
  ['magenta', '\x1b[35m%s\x1b[0m'],
  ['cyan', '\x1b[36m%s\x1b[0m'],
  ['white', '\x1b[37m%s\x1b[0m'],
]);

export const colorNoResetMap = new Map<string, string>([
  ['black', '\x1b[30m'],
  ['red', '\x1b[31m'],
  ['green', '\x1b[32m'],
  ['yellow', '\x1b[33m'],
  ['blue', '\x1b[34m'],
  ['magenta', '\x1b[35m'],
  ['cyan', '\x1b[36m'],
  ['white', '\x1b[37m'],
]);

export const reset = '\x1b[0m';

export const styleMap = new Map<string, string>([
  ['blink', '\x1b[5m%s\x1b[0m'],
  ['bright', '\x1b[1m%s\x1b[0m'],
  ['dim', '\x1b[2m%s\x1b[0m'],
  ['hidden', '\x1b[8m%s\x1b[0m'],
  ['reverse', '\x1b[7m%s\x1b[0m'],
  ['underscore', '\x1b[4m%s\x1b[0m'],
]);

export const tagColorMap = new Map<string, string>([
  ['black', '\x1b[40m'],
  ['red', '\x1b[41m\x1b[37m'],
  ['green', '\x1b[42m\x1b[30m'],
  ['yellow', '\x1b[43m\x1b[30m'],
  ['blue', '\x1b[44m\x1b[37m'],
  ['magenta', '\x1b[45m\x1b[37m'],
  ['cyan', '\x1b[46m\x1b[30m'],
  ['white', '\x1b[47m\x1b[30m'],
]);

export const webTagColorMap = new Map<string, string>([
  ['black', 'background-color: #000000; color: #ffffff;'],
  ['red', 'background-color: #ff6666; color: #ffffff;'],
  ['green', 'background-color: #99e699; color: #000000;'],
  ['yellow', 'background-color: #ffdb4d; color: #000000;'],
  ['blue', 'background-color: #65aee6; color: #ffffff;'],
  ['magenta', 'background-color: #e2baee; color: #ffffff;'],
  ['cyan', 'background-color: #c8f9f6; color: #000000;'],
  ['white', 'background-color: #ffffff; color: #000000;'],
]);

export const webColorMap = new Map<string, string>([
  ['black', 'color: #000000;'],
  ['red', 'color: #ff6666;'],
  ['green', 'color: #99e699;'],
  ['yellow', 'color: #ffdb4d;'],
  ['blue', 'color: #65aee6;'],
  ['magenta', 'color: #e2baee;'],
  ['cyan', 'color: #c8f9f6;'],
  ['white', 'color: #ffffff;'],
]);

export const isBrowser = () : boolean => {
  try {
    if (window && window.document) return true;
  } catch (error) {
    // do nothing  
  }

  return false;
};