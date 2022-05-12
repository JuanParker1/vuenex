import { createApp } from 'vue'
import { VueNex } from '../src'

import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(VueNex)

app.mount('#app')
