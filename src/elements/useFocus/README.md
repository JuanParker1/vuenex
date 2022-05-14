# useFocus

Sets focus on a specific element.

## Function

### API

```js
useFocus(el, options)
```

### Examples

```html
<template>
  <input ref="target" />
</template>

<script setup>
  import { ref } from 'vue'
  import { useFocus } from 'vuenex'

  const target = ref()

  useFocus(target, true) // 'true' will prevent browser scroll
</script>
```

```html
<template>
  <button @click="useFocus(target)">Set Focus</button>
  <input ref="target" />
</template>

<script setup>
  import { ref } from 'vue'
  import { useFocus } from 'vuenex'

  const target = ref()
</script>
```

## Directive

### API

```html
v-focus | v-focus.preventScroll
```

### Example

```html
<template>
  <input v-focus />
</template>

<script setup>
  import { vFocus } from 'vuenex'
</script>
```

## Source

[Function](function.js) — [Directive](directive.js)
