import { useUnref } from '../../utilities/useUnref'
import { useEvent } from '../useEvent'

/**
 * Detects clicks outside of an element.
 *
 * @since 0.0.1
 *
 * @param {HTMLElement} el
 * @param {function} callback
 */
export const useClickOutside = (el, callback) => {
  const clickOutside = e => {
    const element = useUnref(el)

    if (!element || element === e.target || e.composedPath().includes(element))
      return

    callback()
  }

  return useEvent(window, 'click', clickOutside)
}
