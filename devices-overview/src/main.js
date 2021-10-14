import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'

// To be used on app.use(Quasar, { ... })
const quasarUserOptions = {
  config: {},
  plugins: {

  }
}

createApp(App)
  .use(Quasar, quasarUserOptions)
  .mount('#supported-devices-app');
