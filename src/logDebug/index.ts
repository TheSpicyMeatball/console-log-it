/**
 * Log out args based on a condition
 * 
 * @since v0.0.1
 * @param {boolean} condition - If true, the {args} will be logged
 * @param {...*} [args] - The args to log
 * @example
 * // Log item only when the id === 42
 * for (const item of array) {
 *   logDebug(item.id === 42, item);
 * }
 * @docgen_description_note
 * Helpful for targeted logging to reduce log noise in complex or repetitive code such as loops.
 */
export const logDebug = (condition: boolean, ...args: unknown[]) : void => condition ? console.log(...args) : undefined;