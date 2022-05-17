import { useUnref } from '../../../utilities/useUnref'
import { useEvent } from '../../useEvent'

export const removeAttributes = (target, attribute, values) => {
  if (attribute === 'attr' || attribute === 'attribute') {
    useEvent(target, 'click', () => {
      const el = useUnref(target)

      el.removeAttribute(values)
    })
  }
}
