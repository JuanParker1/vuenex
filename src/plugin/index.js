import { vClick } from '..'
import { vFocus } from '..'

/**
 * Activates all directives globally.
 *
 * @since 0.0.1
 */
export const VueNex = {
  install(app, pluginOptions) {
    const options = {
      directives: {
        useClick: true,
        useFocus: true
      },
      ...pluginOptions
    }

    if (options.directives.useClick) {
      app.directive('click', vClick)
    }

    if (options.directives.useFocus) {
      app.directive('focus', vFocus)
    }
  }
}
