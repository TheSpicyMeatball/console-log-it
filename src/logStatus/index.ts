import { isBrowser, reset, tagColorMap, webTagColorMap } from '../_private';
import { CustomStatusConfig } from '../types';

/**
 * Log out a custom status message
 * 
 * @since v0.0.1
 * @param {CustomStatusConfig} [config] - The configuration
 * @returns {(...args: unknown[]) => void}
 * @example
 * const deprecated = logStatus({
 *   tagColor: 'magenta',
 *   tagMessage: 'Deprecated',
 * });
 * 
 * deprecated('This is a custom status tag to tell you something is deprecated');
 * @docgen_types
 * export type CustomStatusConfig = {
 *   indent?: number,
 *   tagColor: Color,
 *   tagMessage: string,
 * };
 * 
 * export type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
 */
export const logStatus = (config: CustomStatusConfig) => (...args: unknown[]) : void => {
  const indent = config && typeof config.indent === 'number' ?  ' '.repeat(config.indent) : undefined;

  if (isBrowser()) {
    const consoleArgs = [
      ...(indent ? [indent] : []),
      '%c',
      config.tagMessage,
      '%c',
      ...args,
    ];
    console.log(consoleArgs.join(''), webTagColorMap.get(config.tagColor) + ' padding-left: 4px; padding-right: 4px; margin-right: 8px', 'background-color: inherit; color:inherit; padding-left: inherit; padding-right: inherit; margin-right: inherit');
    return;
  }

  const consoleArgs = [
    ...(indent ? [indent] : []),
    tagColorMap.get(config.tagColor),
    config.tagMessage,
    reset,
    ...args,
  ];
  console.log(...consoleArgs);
};