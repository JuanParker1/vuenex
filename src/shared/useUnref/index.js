import { unref } from 'vue'
import { isEvent } from '..'

/**
 * Checks the ref value.
 *
 * @since 0.0.1
 *
 * @param {ref|HTMLElement|Event} el
 */
export const useUnref = el => {
  if (isEvent(el)) return el.target

  return unref(el)
}
