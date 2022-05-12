import { addClassesAddEvent, addClassesRemoveEvent } from './addClasses'
import {
  removeClassesAddEvent,
  removeClassesRemoveEvent
} from './removeClasses'

/**
 * Triggers custom actions on element click.
 *
 * @since 0.0.1
 *
 * @example v-click="[action, attribute, values]"
 */
export const vClick = {
  mounted: (el, binding) => {
    if (binding.value[0] === 'add') {
      addClassesAddEvent(el, binding)
    }

    if (binding.value[0] === 'remove') {
      removeClassesAddEvent(el, binding)
    }
  },

  beforeUnmounted: (el, binding) => {
    if (binding.value[0] === 'add') {
      addClassesRemoveEvent(el, binding)
    }

    if (binding.value[0] === 'remove') {
      removeClassesRemoveEvent(el, binding)
    }
  }
}
