# useBlur

Removes focus from a specific element.

## Function

### API

```js
useBlur(el)
```

### Example

```html
<template>
  <input ref="target" @keydown.esc="removeFocus" @keydown.enter="removeFocus" />
</template>

<script setup>
  import { ref } from 'vue'
  import { useBlur } from 'vuenex'

  const target = ref()

  const removeFocus = () => useBlur(target)
</script>
```

## Source

[Function](function.js)
