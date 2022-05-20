import { useUnref } from '../../utilities/useUnref'
import { useEvent } from '../useEvent'

/**
 * Detects clicks outside of an element.
 *
 * @since 0.0.1
 *
 * @param {HTMLElement} el
 * @param {function} callback
 * @param {object} options
 */
export const useClickOutside = (el, callback, options = {}) => {
  const { event = 'click', passive = true, capture = true } = options

  const clickOutside = e => {
    const element = useUnref(el)

    if (!element || element === e.target || e.composedPath().includes(element))
      return

    callback(e)
  }

  return useEvent(window, event, clickOutside, { passive, capture })
}
