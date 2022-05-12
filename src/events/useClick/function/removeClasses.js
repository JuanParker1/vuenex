import { useUnref } from '../../../utilities/useUnref'
import { useEvent } from '../../../events/useEvent'

export const removeClasses = (target, attribute, values) => {
  if (attribute === 'class') {
    useEvent(target, 'click', () => {
      const el = useUnref(target)
      const classes = values.split(' ')

      el.classList.remove(...classes)
    })
  }
}
