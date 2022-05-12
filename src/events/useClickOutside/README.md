# useClickOutside

Detects clicks outside of an element.

## Function

### API

```js
useClickOutside(el, callback)
```

### Example

```html
<template>
  <div ref="target" style="height: 33vh; background: lightgreen">
    Click outside
  </div>
  <p>You clicked {{ count }} times.</p>
</template>

<script setup>
  import { ref } from 'vue'
  import { useClickOutside } from 'vuenex'

  const target = ref()
  const count = ref(0)

  useClickOutside(target, () => count.value++)
</script>
```

## Source

[Function](function.js)
