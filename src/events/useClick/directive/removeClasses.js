export const removeClassesAddEvent = (el, binding) => {
  if (binding.value[1] === 'class') {
    el.addEventListener('click', () => {
      if (binding.value[2] !== '') {
        const classes = binding.value[2].split(' ')

        el.classList.remove(...classes)
      } else {
        el.className = ''
      }
    })
  }
}

export const removeClassesRemoveEvent = (el, binding) => {
  if (binding.value[1] === 'class') {
    el.removeEventListener('click', () => {
      if (binding.value[2] !== '') {
        const classes = binding.value[2].split(' ')

        el.classList.remove(...classes)
      } else {
        el.className = ''
      }
    })
  }
}
