import { addClasses } from './addClasses'
import { removeClasses } from './removeClasses'

/**
 * Triggers custom actions on element click.
 *
 * @param {ref} target
 * @param {string} action
 * @param {string} attribute
 * @param {string} values
 */
export const useClick = (target, action, attribute, values) => {
  if (action === 'add') return addClasses(target, attribute, values)

  if (action === 'remove') return removeClasses(target, attribute, values)
}
