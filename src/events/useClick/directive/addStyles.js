export const addStylesAddEvent = (el, binding) => {
  if (binding.value[1] === 'style') {
    el.addEventListener('click', () => {
      el.style.cssText += binding.value[2]
    })
  }
}

export const addStylesRemoveEvent = (el, binding) => {
  if (binding.value[1] === 'style') {
    el.removeEventListener('click', () => {
      el.style.cssText += binding.value[2]
    })
  }
}
