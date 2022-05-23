import { useUnref } from '../../shared'

/**
 * Removes focus from a specific element.
 *
 * @since 0.0.1
 *
 * @param {ref|HTMLElement} el
 */
export const useBlur = el => useUnref(el).blur()
