import { colorNoResetMap, reset } from './../_private/index';
import { LogBoxConfig, LogBoxLine } from '../types';

/**
 * Log out a message in a box
 * 
 * @since v0.0.1
 * @param {LogBoxConfig} [config] - The configuration for the box
 * @returns {(message: string[] | string | LogBoxLine[]) => void}
 * @example
 * logBox()('Box Message Goes Here');
 * 
 * ╭─────────────────────────╮
 * │  Box Message Goes Here  │
 * ╰─────────────────────────╯
 * @docgen_types
 * export type LogBoxConfig = {
 *   color: Color,
 *   indent?: number,
 *   padding?: number,
 *   bufferLines?: boolean,
 *   symbol?: string,
 * };
 * 
 * export type LogBoxLine = {
 *   color: Color,
 *   message: string,
 * };
 * 
 * export type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
 * @docgen_import
 * { logBox, LogBoxConfig, LogBoxLine, Color }
 */
export const logBox = (config?: LogBoxConfig) => (message: string[] | string | LogBoxLine[]) : void => {
  const lines = typeof message === 'string' ? [message] : message;
  const indent = typeof config?.indent === 'number' ?  ' '.repeat(config.indent) : '';
  const padding = config?.padding !== undefined ? config.padding : 2;
  const color = config?.color !== undefined ? colorNoResetMap.get(config.color) : colorNoResetMap.get('cyan');
  const symbol = config?.symbol !== undefined && config.symbol.length > 0 ? config.symbol : undefined;

  const width = getTextWidth(lines);
  let output = [color, getBorder('top', indent, padding, width, symbol)];
  
  if (config && config.bufferLines) {
    output = [...output, getLine(color, indent, padding, width, '', symbol)];
  }

  for (const line of lines) {
    output = [...output, getLine(color, indent, padding, width, line, symbol)];
  }

  if (config && config.bufferLines) {
    output = [...output, getLine(color, indent, padding, width, '', symbol)];
  }

  output = [...output, getBorder('bottom', indent, padding, width, symbol)];
  console.log(...output, reset);
};

const getTextWidth = (lines: string[] | LogBoxLine[]) : number => {
  let width = 0;
  lines.forEach(x => {
    if (typeof x === 'object' && x.message.length > width) {
      width = x.message.length;
    } else if (typeof x === 'string' && x.length > width) {
      width = x.length;
    }
  });
  
  return width;
};

const getBorder = (bar: string, indent, padding: number, width: number, symbol?: string) => {
  const _symbol = symbol ? symbol.substring(0, 1) : '─';
  const corners = {
    topLeft: symbol ? symbol.substring(0, 1) : '╭',
    topRight: symbol ? symbol.substring(0, 1) : '╮',
    bottomLeft: symbol ? symbol.substring(0, 1) : '╰',
    bottomRight: symbol ? symbol.substring(0, 1) : '╯',
  };
  
  let output = '\n' + indent + (bar === 'bottom' ?  corners.bottomLeft : corners.topLeft);

  for (let i = 0; i < (padding + width + padding); i++) {
    output += _symbol;
  }

  return output += (bar === 'bottom' ? corners.bottomRight + '\n' : corners.topRight);
};

const getPadding = (padding: number) : string => {
  let output = '';

  for (let i = 0; i < padding; i++) {
    output += ' ';
  }

  return output;
};

const getLine = (boxColor: string, indent: string, padding:number, width: number, line: string | LogBoxLine, symbol?: string) : string => {
  const message = typeof line === 'string' ? line : line.message;
  const _symbol = symbol ? symbol.substring(0, 1) : '│';
  const rightPadding = width > message.length ? width - message.length + padding : padding;

  if (typeof line === 'object') {
    return '\n' + indent + _symbol + getPadding(padding) + colorNoResetMap.get(line.color) + message + boxColor + getPadding(rightPadding) + _symbol;
  }

  return '\n' + indent + _symbol + getPadding(padding) + message + getPadding(rightPadding) + _symbol;
};

// export const logBox = (config?: LogBoxConfig) => (message: string[] | string | LogBoxLine[]) : void => {
//   const lines = typeof message === 'string' ? [message] : message;
//   const indent = typeof config?.indent === 'number' ?  ' '.repeat(config.indent) : '';
//   const padding = config?.padding !== undefined ? config.padding : 2;
//   const color = config?.color !== undefined ? colorMap.get(config.color) : colorMap.get('cyan');
//   const symbol = config?.symbol !== undefined && config.symbol.length > 0 ? config.symbol : undefined;

//   const width = getTextWidth(lines);
  
//   console.log(color, getBorder('top', indent, padding, width, symbol));

//   if (config && config.bufferLines) {
//     console.log(color, getLine(indent, padding, width, '', symbol));
//   }

//   for (const line of lines) {
//     console.log(color, getLine(indent, padding, width, line, symbol));
//   }

//   if (config && config.bufferLines) {
//     console.log(color, getLine(indent, padding, width, '', symbol));
//   }

//   console.log(color, getBorder('bottom', indent, padding, width, symbol));
//   console.log();
// };

// const getTextWidth = (lines: string[] | LogBoxLine[]) : number => {
//   let width = 0;
//   lines.forEach(x => {
//     if (x.length > width) {
//       width = x.length;
//     }
//   });
  
//   return width;
// };

// const getBorder = (bar: string, indent, padding: number, width: number, symbol?: string) => {
//   const _symbol = symbol ? symbol.substring(0, 1) : '─';
//   const corners = {
//     topLeft: symbol ? symbol.substring(0, 1) : '╭',
//     topRight: symbol ? symbol.substring(0, 1) : '╮',
//     bottomLeft: symbol ? symbol.substring(0, 1) : '╰',
//     bottomRight: symbol ? symbol.substring(0, 1) : '╯',
//   };
  
//   let output = indent + (bar === 'bottom' ? corners.bottomLeft : corners.topLeft);

//   for (let i = 0; i < (padding + width + padding); i++) {
//     output += _symbol;
//   }

//   return output += (bar === 'bottom' ? corners.bottomRight : corners.topRight);
// };

// const getPadding = (padding: number) : string => {
//   let output = '';

//   for (let i = 0; i < padding; i++) {
//     output += ' ';
//   }

//   return output;
// };

// const getLine = (indent, padding:number, width: number, line: string | LogBoxLine, symbol?: string) : string => {
//   const message = typeof line === 'string' ? line : line.message;
//   const _symbol = symbol ? symbol.substring(0, 1) : '│';
//   const rightPadding = width > message.length ? width - message.length + padding : padding;
//   return indent + _symbol + getPadding(padding) + message + getPadding(rightPadding) + _symbol;
// };