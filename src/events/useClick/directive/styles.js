export const addStyles = (el, attribute, values) => {
  if (attribute === 'style') {
    el._clickAddStyles = () => {
      el.style.cssText += values
    }

    el.addEventListener('click', el._clickAddStyles)
  }
}

export const removeStyles = (el, attribute, values) => {
  if (attribute === 'style') {
    el._clickRemoveStyles = () => {
      if (values.length !== 0) {
        values.forEach(value => {
          el.style.removeProperty(value)
        })
      } else {
        el.style = ''
      }
    }

    el.addEventListener('click', el._clickRemoveStyles)
  }
}
