import { useUnref } from '../../../shared'
import { useEvent } from '../..'

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

export const removeAttributes = (target, attribute, values) => {
  if (attribute === 'attr' || attribute === 'attribute') {
    useEvent(target, 'click', () => {
      const el = useUnref(target)

      if (typeof values !== 'string') {
        values.forEach(value => {
          el.removeAttribute(value)
        })
      } else {
        el.removeAttribute(values)
      }
    })
  }
}
