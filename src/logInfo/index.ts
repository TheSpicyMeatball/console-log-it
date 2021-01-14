import { logStatus } from '../logStatus';
import { StatusConfig } from '../types';

/**
 * Log out an info message
 * 
 * @since v0.0.1
 * @param {StatusConfig} [config] - The configuration
 * @returns {(...args: unknown[]) => void}
 * @example
 * logInfo()('This is some information.');
 * 
 * const info = logInfo({ indent: 2, tagMessage: 'CUSTOM' });
 * info('This is some information.');
 * @docgen_types
 * export type StatusConfig = {
 *   indent?: number,
 *   tagMessage?: string,
 * };
 */
export const logInfo = (config?: StatusConfig) => (...args: unknown[]) : void => {
  const tagMessage = config?.tagMessage?.length > 0 ? config.tagMessage : 'Info';

  logStatus({ indent: config?.indent, tagColor: 'blue', tagMessage })(...args);
};