# useClick

Triggers custom actions on element click.

## Function

### API

```js
useClick(target, action, attribute, values)
```

### Class Examples

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

```html
<template>
  <div ref="target2" class="text-3xl text-blue-600 bg-blue-100">
    Remove all classes
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useClick } from 'vuenex'

  const target2 = ref()

  // Empty '' will remove all classes from the element
  useClick(target2, 'remove', 'class', '')
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

### Attribute Examples

```html
<template>
  <div ref="target1">Add attributes</div>
  <div ref="target2" data-vuenex>Remove attributes</div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useClick } from 'vuenex'

  const target1 = ref()
  const target2 = ref()

  useClick(target1, 'add', 'attr', 'data-vuenex')
  useClick(target2, 'remove', 'attr', 'data-vuenex')
</script>
```

```html
<template>
  <div ref="target1">Add attributes</div>
  <div ref="target2">Add attributes with values</div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useClick } from 'vuenex'

  const target1 = ref()
  const target2 = ref()

  // 'attr' is an abbreviation of 'attribute', both values are acceptable
  useClick(target1, 'add', 'attr', 'data-vuenex')

  // To add attrs with values, simply use [name, value] syntax
  useClick(target2, 'add', 'attr', ['data-color', 'green'])
</script>
```

## Directive

### API

```html
v-click="[action, attribute, values]"
```

### Class Examples

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

```html
<template>
  <div
    v-click="['remove', 'class', '']"
    class="text-3xl text-blue-600 bg-blue-100"
  >
    Remove all classes
  </div>
</template>

<script setup>
  import { vClick } from 'vuenex'
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

### Attribute Examples

```html
<template>
  <div v-click="addAttrs">Add attributes</div>
  <div v-click="removeAttrs" data-vuenex>Remove attributes</div>
</template>

<script setup>
  import { ref } from 'vue'
  import { vClick } from 'vuenex'

  // 'attr' is an abbreviation of 'attribute', both values are acceptable
  const addAttrs = ref(['add', 'attr', 'data-vuenex'])
  const removeAttrs = ref(['remove', 'attr', 'data-vuenex'])
</script>
```

```html
<template>
  <div v-click="['add', 'attr', ['data-color', 'green']]">
    Add attributes with values
  </div>
  <div v-click="['remove', 'attr', 'data-vuenex']" data-vuenex>
    Remove attributes
  </div>
</template>

<script setup>
  import { vClick } from 'vuenex'
</script>
```

## Source

[Function](function/index.js) — [Directive](directive/index.js)
