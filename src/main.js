import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import the MDI font CSS (this loads the actual icon glyphs)
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'darkTheme',
    themes: {
      darkTheme: {
        dark: true,
        colors: {
          primary: '#1e88e5',    // Keep your blue for buttons/icons
          secondary: '#FF9800',  // New: Orange accent inspired by the colorful site (for chips/highlights)
          accent: '#82B1FF',     // Light blue for subtle pops
          background: '#121212', // Deep black base
          surface: '#1E1E1E',    // Slightly lighter gray for cards (better contrast than #232323)
          'on-surface': '#E0E0E0', // Lighter gray text for readability on surfaces
          'on-background': '#FFFFFF', // White text on pure background for headers
        },
      },
    },
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',  // Use font-based MDI
  },
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')