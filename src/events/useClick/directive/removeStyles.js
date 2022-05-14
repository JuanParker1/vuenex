export const removeStylesAddEvent = (el, binding) => {
  if (binding.value[1] === 'style') {
    el.addEventListener('click', () => {
      if (binding.value[2].length !== 0) {
        binding.value[2].forEach(value => {
          el.style.removeProperty(value)
        })
      } else {
        el.style = null
      }
    })
  }
}

export const removeStylesRemoveEvent = (el, binding) => {
  if (binding.value[1] === 'style') {
    el.removeEventListener('click', () => {
      if (binding.value[2].length !== 0) {
        binding.value[2].forEach(value => {
          el.style.removeProperty(value)
        })
      } else {
        el.style = null
      }
    })
  }
}
