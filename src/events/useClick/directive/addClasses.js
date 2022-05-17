export const addClassesAddEvent = (el, binding) => {
  if (binding.value[1] === 'class') {
    el.addEventListener('click', () => {
      const classes = binding.value[2].split(' ')

      el.classList.add(...classes)
    })
  }
}

export const addClassesRemoveEvent = (el, binding) => {
  if (binding.value[1] === 'class') {
    el.removeEventListener('click', () => {
      const classes = binding.value[2].split(' ')

      el.classList.add(...classes)
    })
  }
}
