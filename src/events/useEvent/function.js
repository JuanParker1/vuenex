import { unref, onBeforeUnmount, onMounted } from 'vue'

/**
 * Sets event on a specific target.
 *
 * @since 0.0.1
 *
 * @param {Ref|HTMLElement|window|document} target
 * @param {string} type
 * @param {function} callback
 * @param {object} options
 */
export const useEvent = (target, type, callback, options) => {
  onMounted(() => unref(target).addEventListener(type, callback, options))
  onBeforeUnmount(() =>
    unref(target).removeEventListener(type, callback, options)
  )
}
