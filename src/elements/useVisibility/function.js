import { ref, unref, onMounted } from 'vue'
import { useEvent } from '../../events/useEvent'

/**
 * Checks an element visibility within the viewport.
 *
 * @since 0.0.1
 *
 * @param {HTMLElement} el
 * @param {object} options
 * @param {boolean} options.scroll
 * @param {boolean} options.threshold
 */
export const useVisibility = (el, options = {}) => {
  const isVisible = ref(false)

  const checkVisibility = () => {
    const rect = unref(el).getBoundingClientRect()

    /**
     * Checks if at least 1px of the target is visible inside the viewport.
     *
     * If not specified, this is the default option.
     */
    const insideViewport =
      rect.top <= window.innerHeight &&
      rect.left <= window.innerWidth &&
      rect.bottom >= 0 &&
      rect.right >= 0

    /**
     * Checks if 100% of the target is visible inside the viewport.
     */
    const fullyInsideViewport =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth

    isVisible.value = options.threshold ? fullyInsideViewport : insideViewport
  }

  onMounted(() => checkVisibility())

  if (options.scroll)
    useEvent(window, 'scroll', checkVisibility, { passive: true })

  return isVisible
}
