# useVisibility

Checks an element visibility within the viewport.

## Function

### API

```js
useVisibility(el, options)
```

### Example

```html
<template>
  <div style="height: 330vh">
    <div style="position: sticky; top: 0">{{ isVisible }}</div>
    <p
      ref="target"
      style="background: lightgreen; height: 30vh; margin-top: 150vh"
    >
      VueNex
    </p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useVisibility } from 'vuenex'

  const target = ref()
  const isVisible = useVisibility(target, { scroll: true, threshold: true })
</script>
```

## Source

[Function](function.js)
