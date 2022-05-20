/**
 * Detects clicks outside of an element.
 *
 * @since 0.3.0
 */
export const vClickOutside = {
  mounted: (el, { value }) => {
    el._clickOutside = e => {
      if (!el || el === e.target || e.composedPath().includes(el)) return

      value(e)
    }

    window.addEventListener('click', el._clickOutside, {
      passive: true,
      capture: true
    })
  },

  beforeUnmount: el => {
    window.removeEventListener('click', el._clickOutside, {
      passive: true,
      capture: true
    })
  }
}
