export const addAttributesAddEvent = (el, binding) => {
  if (binding.value[1] === 'attr' || binding.value[1] === 'attribute') {
    el.addEventListener('click', () => {
      if (typeof binding.value[2] !== 'string') {
        el.setAttribute(binding.value[2][0], binding.value[2][1])
      } else {
        el.setAttribute(binding.value[2], '')
      }
    })
  }
}

export const addAttributesRemoveEvent = (el, binding) => {
  if (binding.value[1] === 'attr' || binding.value[1] === 'attribute') {
    el.removeEventListener('click', () => {
      if (typeof binding.value[2] !== 'string') {
        el.setAttribute(binding.value[2][0], binding.value[2][1])
      } else {
        el.setAttribute(binding.value[2], '')
      }
    })
  }
}
