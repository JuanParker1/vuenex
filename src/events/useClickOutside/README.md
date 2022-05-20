# useClickOutside

Detects clicks outside of an element.

## Function

It's possible to specify custom `options`, for example detect `mousedown` or `mouseup` event outside of an element. Also,

### API

```js
useClickOutside(el, callback, options)
```

**Defaults**

```js
useClickOutside(el, callback, { event: 'click', passive: true, capture: true })
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

## Directive

### API

```html
v-click-outside="callback"
```

### Example

```html
<template>
  <button @click="isVisible = !isVisible">Show Element</button>
  <div v-if="isVisible" v-click-outside="hideElement">VueNex</div>
</template>

<script setup>
  import { ref } from 'vue'
  import { vClickOutside } from 'vuenex'

  const isVisible = ref(false)

  const hideElement = () => {
    isVisible.value = false
  }
</script>
```

## Source

[Function](function.js) — [Directive](directive.js)
