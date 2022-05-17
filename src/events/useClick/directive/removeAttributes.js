export const removeAttributesAddEvent = (el, binding) => {
  if (binding.value[1] === 'attr' || binding.value[1] === 'attribute') {
    el.addEventListener('click', () => {
      el.removeAttribute(binding.value[2])
    })
  }
}

export const removeAttributesRemoveEvent = (el, binding) => {
  if (binding.value[1] === 'attr' || binding.value[1] === 'attribute') {
    el.removeEventListener('click', () => {
      el.removeAttribute(binding.value[2])
    })
  }
}
