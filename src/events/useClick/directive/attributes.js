export const addAttributes = (el, attribute, values) => {
  if (attribute === 'attr' || attribute === 'attributes') {
    el._clickAddAttributes = () => {
      if (typeof values !== 'string') {
        el.setAttribute(values[0], values[1])
      } else {
        el.setAttribute(values, '')
      }
    }

    el.addEventListener('click', el._clickAddAttributes)
  }
}

export const removeAttributes = (el, attribute, values) => {
  if (attribute === 'attr' || attribute === 'attributes') {
    el._clickRemoveAttributes = () => {
      if (typeof values !== 'string') {
        values.forEach(value => {
          el.removeAttribute(value)
        })
      } else {
        el.removeAttribute(values)
      }
    }

    el.addEventListener('click', el._clickRemoveAttributes)
  }
}
