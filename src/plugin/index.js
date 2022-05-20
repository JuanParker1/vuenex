import { vClick } from '..'
import { vClickOutside } from '..'
import { vFocus } from '..'

/**
 * Activates all directives globally.
 *
 * @since 0.0.1
 */
export const VueNex = {
  install(app, options = {}) {
    const {
      directives: {
        useClick: useClickDirective = true,
        useClickOutside: useClickOutsideDirective = true,
        useFocus: useFocusDirective = true
      } = {}
    } = options

    if (useClickDirective) {
      app.directive('click', vClick)
    }

    if (useClickOutsideDirective) {
      app.directive('click-outside', vClickOutside)
    }

    if (useFocusDirective) {
      app.directive('focus', vFocus)
    }
  }
}
