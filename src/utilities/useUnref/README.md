# useUnref

Checks the `ref` value.

## Function

### API

```js
useUnref(el)
```

### Example

```html
<template>
  <h1 ref="target">VueNex</h1>
  <button @click="log($event)">Log event</button>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useUnref } from 'vuenex'

  const target = ref()

  const log = el => {
    console.log(useUnref(el))
  }

  onMounted(() => console.log(useUnref(target)))
</script>
```

## Source

[Function](index.js)
