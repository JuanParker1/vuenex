import { useUnref } from '../../../shared'
import { useEvent } from '../..'

export const addClasses = (target, attribute, values) => {
  if (attribute === 'class') {
    useEvent(target, 'click', () => {
      const el = useUnref(target)
      const classes = values.split(' ')

      el.classList.add(...classes)
    })
  }
}

export const removeClasses = (target, attribute, values) => {
  if (attribute === 'class') {
    useEvent(target, 'click', () => {
      const el = useUnref(target)

      if (values !== '') {
        const classes = values.split(' ')

        el.classList.remove(...classes)
      } else {
        el.className = ''
      }
    })
  }
}
