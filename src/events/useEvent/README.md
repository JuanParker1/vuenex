# useEvent

Sets event on a specific target.

Automatically registers event listeners on `mounted` and `unmounted`.

## Function

### API

```js
useEvent(target, type, callback, options)
```

### Examples

```html
<template>
  <div ref="target" style="background: lightgreen; height: 30vh">
    Click here
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useEvent } from 'vuenex'

  const target = ref()

  useEvent(target, 'click', e => console.log(e))
</script>
```

```html
<template>
  <div style="height: 300vh;">VueNex</div>
</template>

<script setup>
  import { useEvent } from 'vuenex'

  useEvent(window, 'scroll', e => console.log(e))
</script>
```

## Source

[Function](function.js)
