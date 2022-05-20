export const addClasses = (el, attribute, values) => {
  if (attribute === 'class') {
    el._clickAddClasses = () => {
      const classes = values.split(' ')

      el.classList.add(...classes)
    }

    el.addEventListener('click', el._clickAddClasses)
  }
}

export const removeClasses = (el, attribute, values) => {
  if (attribute === 'class') {
    el._clickRemoveClasses = () => {
      if (values !== '') {
        const classes = values.split(' ')

        el.classList.remove(...classes)
      } else {
        el.className = ''
      }
    }

    el.addEventListener('click', el._clickRemoveClasses)
  }
}
