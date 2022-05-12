# Plugin

Activates all directives globally.

Plugin is not activated by default. You can activate all directives globally or import a specific part into the local file.

### Global Import

All directive will be activated and available through app without additional importing.

```js
// main.js

import { createApp } from 'vue'
import { VueNex } from 'vuenex'

const app = createApp()

app.use(VueNex)
```

### Local Import

The directive will only be available in the local file where it was imported.

```html
<!-- LocalExample.vue -->

<script setup>
  import { vFocus } from 'vuenex'
</script>

<template>
  <input v-focus />
</template>
```

### API

All directives are enabled by default when used via `VueNex` plugin. The additional configuration allows you to disable a specific directives if necessary.

```js
// main.js

import { VueNex } from 'vuenex'

app.use(VueNex, {
  directives: {
    useClick: true,
    useFocus: false // Disable focus directive
    // ...
  }
})
```

### Source

[Plugin](index.js)
