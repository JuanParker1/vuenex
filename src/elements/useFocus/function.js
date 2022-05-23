import { useOnMounted, useUnref } from '../../shared'

/**
 * Sets focus on a specific element.
 *
 * @since 0.0.1
 *
 * @param {ref|HTMLElement} el
 * @param {object} options
 * @param {boolean} options.preventScroll
 */
export const useFocus = (el, options = {}) => {
  const preventScroll =
    options === true || options.preventScroll ? { preventScroll: true } : null

  return useOnMounted(() => useUnref(el).focus(preventScroll))
}
