import { useUnref } from '../../shared'
import { useEvent } from '..'

/**
 * Detects clicks outside of an element.
 *
 * @since 0.0.1
 *
 * @param {ref|HTMLElement} el
 * @param {function} callback
 * @param {object} options
 * @param {string} options.event
 * @param {boolean} options.passive
 * @param {boolean} options.capture
 */
export const useClickOutside = (el, callback, options = {}) => {
  const { event = 'click', passive = true, capture = true } = options

  const clickOutside = e => {
    const element = useUnref(el)

    if (!element || element === e.target || e.composedPath().includes(element))
      return

    callback(e)
  }

  const cleanup = [useEvent(window, event, clickOutside, { passive, capture })]

  const stop = () => cleanup.forEach(fn => fn())

  return stop
}
