import { useUnref } from '../../../utilities/useUnref'
import { useEvent } from '../../useEvent'

export const addAttributes = (target, attribute, values) => {
  if (attribute === 'attr' || attribute === 'attribute') {
    useEvent(target, 'click', () => {
      const el = useUnref(target)

      if (typeof values !== 'string') {
        el.setAttribute(values[0], values[1])
      } else {
        el.setAttribute(values, '')
      }
    })
  }
}
