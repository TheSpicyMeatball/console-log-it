import { logStatus } from '../logStatus';
import { StatusConfig } from '../types';

/**
 * Log out an error message
 * 
 * @since v0.0.1
 * @param {StatusConfig} [config] - The configuration
 * @returns {(...args: unknown[]) => void}
 * @example
 * logError()('This is a bummer, man.');
 * 
 * const error = logError({ indent: 2, tagMessage: 'OUCH' });
 * error('This is a bummer, man.');
 * @docgen_types
 * export type StatusConfig = {
 *   indent?: number,
 *   tagMessage?: string,
 * };
 */
export const logError = (config?: StatusConfig) => (...args: unknown[]) : void => {
  const tagMessage = config?.tagMessage?.length > 0 ? config.tagMessage : 'Error';

  logStatus({ indent: config?.indent, tagColor: 'red', tagMessage })(...args);
};