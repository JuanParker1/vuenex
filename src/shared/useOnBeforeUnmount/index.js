import { getCurrentInstance, onBeforeUnmount } from 'vue'

/**
 * Checks if onBeforeUnmount hook is called inside of a component lifecycle.
 *
 * @since 0.4.0
 *
 * @param {function} fn
 */
export const useOnBeforeUnmount = fn => {
  if (getCurrentInstance()) return onBeforeUnmount(fn)
}
