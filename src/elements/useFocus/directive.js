/**
 * Sets focus on a specific element.
 *
 * @since 0.0.1
 *
 * @example v-focus | v-focus.preventScroll
 */
export const vFocus = {
  mounted: (el, { modifiers }) => {
    if (modifiers.preventScroll) el.focus({ preventScroll: true })

    el.focus()
  }
}
