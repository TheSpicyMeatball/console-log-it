import { colorMap, backgroundColorMap, styleMap, reset } from '../_private';
import { BackgroundColor, Color, Style } from '../types';

/**
 * Log out a styled message
 * 
 * @since v0.0.1
 * @param {color: Color | BackgroundColor | Style} color - The color, background color, or style for the logged message
 * @returns {(...args: unknown[]) => void}
 * @example
 * logStyle('green')('This message is green');
 * 
 * const white = logStyle('bgWhite');
 * white('This background is white');
 * white('This background is also white');
 * @docgen_types
 * export type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
 * export type BackgroundColor = 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite';
 * export type Style = 'blink' | 'bright' | 'dim' | 'hidden' | 'reverse' | 'reset' | 'underscore';
 */
export const logStyle = (color: Color | BackgroundColor | Style) => (...args: unknown[]) : void => {
  const _color = colorMap.get(color) || backgroundColorMap.get(color) || styleMap.get(color) || reset;
  console.log(_color, ...args);
};