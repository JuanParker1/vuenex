import { addClasses, removeClasses } from './classes'
import { addStyles, removeStyles } from './styles'
import { addAttributes, removeAttributes } from './attributes'

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
  mounted: (el, { value }) => {
    const [action, attribute, values] = value

    if (action === 'add') {
      addClasses(el, attribute, values)

      addStyles(el, attribute, values)

      addAttributes(el, attribute, values)
    }

    if (action === 'remove') {
      removeClasses(el, attribute, values)

      removeStyles(el, attribute, values)

      removeAttributes(el, attribute, values)
    }
  },

  beforeUnmount: (el, { value }) => {
    const [action, attribute] = value

    if (action === 'add') {
      if (attribute === 'class') {
        el.removeEventListener('click', el._clickAddClasses)
      }

      if (attribute === 'style') {
        el.removeEventListener('click', el._clickAddStyles)
      }

      if (attribute === 'attr' || attribute === 'attributes') {
        el.removeEventListener('click', el._clickAddAttributes)
      }
    }

    if (action === 'remove') {
      if (attribute === 'class') {
        el.removeEventListener('click', el._clickRemoveClasses)
      }

      if (attribute === 'style') {
        el.removeEventListener('click', el._clickRemoveStyles)
      }

      if (attribute === 'attr' || attribute === 'attributes') {
        el.removeEventListener('click', el._clickRemoveAttributes)
      }
    }
  }
}
