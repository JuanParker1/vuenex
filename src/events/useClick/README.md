# useClick

Triggers custom actions on element click.

## Function

### API

```js
useClick(target, action, attribute, values)
```

### Class Example

```html
<template>
  <div ref="target1">Add classes</div>
  <div ref="target2" class="text-blue-600">Remove classes</div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useClick } from 'vuenex'

  const target1 = ref()
  const target2 = ref()

  useClick(target1, 'add', 'class', 'bg-green-100 text-green-600')
  useClick(target2, 'remove', 'class', 'text-blue-600')
</script>
```

### Style Example

```html
<template>
  <div ref="target1" style="font-size: 3rem">Add styles</div>
  <div ref="target2" style="color: white; font-size: 3rem; background: blue">
    Remove styles
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useClick } from 'vuenex'

  const target1 = ref()
  const target2 = ref()

  useClick(target1, 'add', 'style', 'background: green; color: white;')

  // Empty [] will remove all styles from the element
  useClick(target2, 'remove', 'style', ['color', 'background'])
</script>
```

## Directive

### API

```html
v-click="[action, attribute, values]"
```

### Class Example

```html
<template>
  <div v-click="addClass">Add classes</div>
  <div v-click="removeClass" class="text-blue-600">Remove classes</div>
</template>

<script setup>
  import { ref } from 'vue'
  import { vClick } from 'vuenex'

  const addClass = ref(['add', 'class', 'bg-green-100 text-green-600'])
  const removeClass = ref(['remove', 'class', 'text-blue-600'])
</script>
```

### Style Example

```html
<template>
  <div v-click="addStyles">Add styles</div>
  <div v-click="removeStyles" style="background: blue; font-size: 3rem">
    Remove styles
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { vClick } from 'vuenex'

  const addStyles = ref(['add', 'style', 'background: green; color: white;'])

  // Empty [] will remove all styles from the element
  const removeStyles = ref(['remove', 'style', ['background']])
</script>
```

## Source

[Function](function/index.js) — [Directive](directive/index.js)
