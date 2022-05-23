import { unref, watch } from 'vue'
import { noop } from '../../shared'

/**
 * Sets event on a specific target.
 *
 * @since 0.0.1
 *
 * @param {ref|HTMLElement|window|document} target
 * @param {string} type
 * @param {function} callback
 * @param {object} options
 */
export const useEvent = (target, type, callback, options) => {
  if (!target) return noop

  const addEvent = el => el.addEventListener(type, callback, options)
  const removeEvent = el => el.removeEventListener(type, callback, options)

  const stopWatch = watch(
    () => unref(target),
    (el, _, cleanup) => {
      if (!el) return

      addEvent(el)

      cleanup(() => removeEvent(el))
    },
    { immediate: true, flush: 'post' }
  )

  const stop = () => stopWatch()

  return stop
}
