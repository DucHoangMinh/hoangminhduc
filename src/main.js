/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faUserSecret} from "@fortawesome/free-solid-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// Plugins
import { registerPlugins } from '@/plugins'
library.add(faUserSecret,fas,far,fab)
const app = createApp(App)

registerPlugins(app)

app
  .component('font-awesome-icon',FontAwesomeIcon)
  .mount('#app')
