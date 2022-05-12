import { useUnref } from '../../utilities/useUnref'

/**
 * Removes focus from a specific element.
 *
 * @since 0.0.1
 *
 * @param {HTMLElement} el
 */
export const useBlur = el => useUnref(el).blur()
