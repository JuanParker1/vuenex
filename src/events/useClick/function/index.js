import { addClasses, removeClasses } from './classes'
import { addStyles, removeStyles } from './styles'
import { addAttributes, removeAttributes } from './attributes'

/**
 * Triggers custom actions on element click.
 *
 * @since 0.0.1
 *
 * @param {ref} target
 * @param {string} action
 * @param {string} attribute
 * @param {string|array} values
 *
 * @example useClick(target, 'add', 'class', 'text-green-500')
 * @example useClick(target, 'remove', 'class', 'text-green-500')
 *
 * @example useClick(target, 'add', 'style', 'background: green;')
 * @example useClick(target, 'remove', 'style', ['background'])
 *
 * @example useClick(target, 'add', 'attr', 'data-vuenex')
 * @example useClick(target, 'remove', 'attr', 'data-vuenex')
 */
export const useClick = (target, action, attribute, values) => {
  if (action === 'add') {
    addClasses(target, attribute, values)

    addStyles(target, attribute, values)

    addAttributes(target, attribute, values)
  }

  if (action === 'remove') {
    removeClasses(target, attribute, values)

    removeStyles(target, attribute, values)

    removeAttributes(target, attribute, values)
  }
}
