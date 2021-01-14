import { logStatus } from '../logStatus';
import { StatusConfig } from '../types';

/**
 * Log out a warning message
 * 
 * @since v0.0.1
 * @param {StatusConfig} [config] - The configuration
 * @returns {(...args: unknown[]) => void}
 * @example
 * logWarning()('This is a warning!');
 * 
 * const warn = logWarning({ indent: 2, tagMessage: 'CUSTOM' });
 * warn('This is a warning!');
 * @docgen_types
 * export type StatusConfig = {
 *   indent?: number,
 *   tagMessage?: string,
 * };
 */
export const logWarning = (config?: StatusConfig) => (...args: unknown[]) : void => {
  const tagMessage = config?.tagMessage?.length > 0 ? config.tagMessage : 'Warning';

  logStatus({ indent: config?.indent, tagColor: 'yellow', tagMessage })(...args);
};