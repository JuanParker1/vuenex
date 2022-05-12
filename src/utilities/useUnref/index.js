import { unref } from 'vue'

/**
 * Checks the ref value.
 *
 * @since 0.0.1
 *
 * @param {ref|event} el
 */
export const useUnref = el => {
  if (el === event) return el.target

  return unref(el)
}
