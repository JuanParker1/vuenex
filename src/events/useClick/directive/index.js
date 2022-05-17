import { addClassesAddEvent, addClassesRemoveEvent } from './addClasses'
import { addStylesAddEvent, addStylesRemoveEvent } from './addStyles'

import {
  addAttributesAddEvent,
  addAttributesRemoveEvent
} from './addAttributes'

import {
  removeClassesAddEvent,
  removeClassesRemoveEvent
} from './removeClasses'

import { removeStylesAddEvent, removeStylesRemoveEvent } from './removeStyles'

import {
  removeAttributesAddEvent,
  removeAttributesRemoveEvent
} from './removeAttributes'

/**
 * Triggers custom actions on element click.
 *
 * @since 0.0.1
 *
 * @example v-click="['add', 'class', 'text-green-500']"
 * @example v-click="['remove', 'class', 'text-green-500']"
 *
 * @example v-click="['add', 'style', 'background: green;']"
 * @example v-click="['remove', 'style', 'background']"
 *
 * @example v-click="['add', 'attr', 'data-vuenex']"
 * @example v-click="['remove', 'attr', 'data-vuenex']"
 */
export const vClick = {
  mounted: (el, binding) => {
    if (binding.value[0] === 'add') {
      addClassesAddEvent(el, binding)

      addStylesAddEvent(el, binding)

      addAttributesAddEvent(el, binding)
    }

    if (binding.value[0] === 'remove') {
      removeClassesAddEvent(el, binding)

      removeStylesAddEvent(el, binding)

      removeAttributesAddEvent(el, binding)
    }
  },

  beforeUnmounted: (el, binding) => {
    if (binding.value[0] === 'add') {
      addClassesRemoveEvent(el, binding)

      addStylesRemoveEvent(el, binding)

      addAttributesRemoveEvent(el, binding)
    }

    if (binding.value[0] === 'remove') {
      removeClassesRemoveEvent(el, binding)

      removeStylesRemoveEvent(el, binding)

      removeAttributesRemoveEvent(el, binding)
    }
  }
}
