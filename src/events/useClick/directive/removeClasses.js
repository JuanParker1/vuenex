export const removeClassesAddEvent = (el, binding) => {
  if (binding.value[1] === 'class') {
    el.addEventListener('click', () => {
      const classes = binding.value[2].split(' ')

      el.classList.remove(...classes)
    })
  }
}

export const removeClassesRemoveEvent = (el, binding) => {
  if (binding.value[1] === 'class') {
    el.removeEventListener('click', () => {
      const classes = binding.value[2].split(' ')

      el.classList.remove(...classes)
    })
  }
}
