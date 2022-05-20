import { useUnref } from '../../../utilities/useUnref'
import { useEvent } from '../../useEvent'

export const addStyles = (target, attribute, values) => {
  if (attribute === 'style') {
    useEvent(target, 'click', () => {
      const el = useUnref(target)

      el.style.cssText += values
    })
  }
}

export const removeStyles = (target, attribute, values) => {
  if (attribute === 'style') {
    useEvent(target, 'click', () => {
      const el = useUnref(target)

      if (values.length !== 0) {
        values.forEach(value => {
          el.style.removeProperty(value)
        })
      } else {
        el.style = ''
      }
    })
  }
}
