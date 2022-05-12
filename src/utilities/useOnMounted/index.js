import { getCurrentInstance, onMounted } from 'vue'

/**
 * Checks if onMounted hook is called inside of a component lifecycle.
 *
 * @since 0.0.1
 *
 * @param {function} fn
 */
export const useOnMounted = fn => {
  if (getCurrentInstance()) return onMounted(fn)

  return fn()
}
