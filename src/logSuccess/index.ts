import { logStatus } from '../logStatus';
import { StatusConfig } from '../types';

/**
 * Log out a success message
 * 
 * @since v0.0.1
 * @param {StatusConfig} [config] - The configuration
 * @returns {(...args: unknown[]) => void}
 * @example
 * logSuccess()('You did it!');
 * 
 * const success = logSuccess({ indent: 2, tagMessage: 'GREAT' });
 * success('You did it!');
 * @docgen_types
 * export type StatusConfig = {
 *   indent?: number,
 *   tagMessage?: string,
 * };
 */
export const logSuccess = (config?: StatusConfig) => (...args: unknown[]) : void => {
  const tagMessage = config?.tagMessage?.length > 0 ? config.tagMessage : 'Success';

  logStatus({ indent: config?.indent, tagColor: 'green', tagMessage })(...args);
};