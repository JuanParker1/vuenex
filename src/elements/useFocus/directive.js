/**
 * Sets focus on a specific element.
 *
 * @since 0.0.1
 *
 * @example v-focus | v-focus.preventScroll
 */
export const vFocus = {
  mounted: (el, binding) => {
    if (binding.modifiers.preventScroll)
      return el.focus({ preventScroll: true })

    return el.focus()
  }
}
