import { useOnMounted } from '../../utilities/useOnMounted'
import { useUnref } from '../../utilities/useUnref'

/**
 * Sets focus on a specific element.
 *
 * @since 0.0.1
 *
 * @param {HTMLElement} el
 * @param {object} options
 * @param {boolean} options.preventScroll
 */
export const useFocus = (el, options = {}) => {
  const preventScroll =
    options === true || options.preventScroll ? { preventScroll: true } : null

  return useOnMounted(() => useUnref(el).focus(preventScroll))
}
