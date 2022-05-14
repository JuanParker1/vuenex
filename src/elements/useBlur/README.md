# useBlur

Removes focus from a specific element.

## Function

### API

```js
useBlur(el)
```

### Examples

```html
<template>
  <input ref="target" @keydown.enter="useBlur($event)" />
</template>

<script setup>
  import { useBlur } from 'vuenex'
</script>
```

```html
<template>
  <input ref="target" @keydown.esc="removeFocus" />
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
