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

### Style Example

```html
<template>
  <div ref="target1" style="font-size: 3rem" @click="addStyle">Add styles</div>
  <div
    ref="target2"
    style="font-size: 3rem; background: blue"
    @click="removeStyle"
  >
    Remove styles
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useClick } from 'vuenex'

  const target1 = ref()
  const target2 = ref()

  const addStyle = useClick(
    target1,
    'add',
    'style',
    'background: green; color: white;'
  )

  // Empty 'array' will remove all styles from the element
  const removeStyle = useClick(target2, 'remove', 'style', [])

  // To remove only specific properties, simply add them to the array
  const removeStyle = useClick(target2, 'remove', 'style', ['background'])
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
  const removeStyles = ref(['remove', 'style', ['background']])
</script>
```

## Source

[Function](function/index.js) — [Directive](directive/index.js)
