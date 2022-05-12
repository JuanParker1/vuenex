# useClick

Triggers custom actions on element click.

## Function

### API

```js
useClick(target, action, attribute, values)
```

### Example

```html
<template>
  <div ref="target1" @click="addClass">Add classes</div>
  <div ref="target2" class="text-blue-600" @click="removeClass">
    Remove classes
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useClick } from 'vuenex'

  const target1 = ref()
  const target2 = ref()

  const addClass = useClick(
    target1,
    'add',
    'class',
    'bg-green-100 text-green-600'
  )
  const removeClass = useClick(target2, 'remove', 'class', 'text-blue-600')
</script>
```

## Directive

### API

```html
v-click="[action, attribute, values]"
```

### Example

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

## Source

[Function](function/index.js) — [Directive](directive/index.js)
