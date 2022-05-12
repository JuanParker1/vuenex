# useEvent

Sets event on a specific target.

Automatically registers event listeners inside `onMounted` and `onBeforeUnmounted` hooks.

## Function

### API

```js
useEvent(target, type, callback, options)
```

### Example

```html
<script setup>
  import { useEvent } from 'vuenex'

  useEvent(window, 'scroll', e => console.log(e))
</script>
```

## Source

[Function](function.js)
