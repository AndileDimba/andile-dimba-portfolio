<template>
  <v-app>
    <!-- App Bar for mobile toggle -->
    <v-app-bar app color="primary" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> <!-- Hamburger menu toggle -->
      <v-toolbar-title>Andile Dimba Portfolio</v-toolbar-title> <!-- Optional title; customize as needed -->
    </v-app-bar>

    <!-- Navigation Drawer: Responsive (permanent on desktop, temporary on mobile) -->
    <v-navigation-drawer
      v-model="drawer"
      :permanent="$vuetify.display.mdAndUp" 
      :temporary="!$vuetify.display.mdAndUp"
      app
      color="surface"
      elevation="2"
    >
      <!-- Static header (updated for Vuetify 3: No v-list-item-content needed) -->
      <v-list-item
        title="Andile Dimba"
        subtitle="Intermediate Software Engineer"
      >
        <template v-slot:append>
          <!-- Optional: Add an icon or avatar here if you want -->
        </template>
        <v-list-item-subtitle class="text-caption mt-1">Building innovative solutions in South Africa</v-list-item-subtitle> <!-- Extra subtitle via direct nesting -->
      </v-list-item>
      <v-divider></v-divider>
      <!-- Navigation links -->
      <v-list nav>
        <v-list-item to="/about" prepend-icon="mdi-information-outline">About</v-list-item>
        <v-list-item to="/skills" prepend-icon="mdi-tools">Skills</v-list-item>
        <v-list-item to="/experience" prepend-icon="mdi-briefcase">Experience</v-list-item>
        <v-list-item to="/projects" prepend-icon="mdi-rocket-launch">Projects</v-list-item>
        <v-list-item to="/education" prepend-icon="mdi-school">Education</v-list-item>
        <v-list-item to="/hobbies" prepend-icon="mdi-run">Hobbies</v-list-item>
        <v-list-item to="/contact" prepend-icon="mdi-email">Contact</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid> <!-- Fluid for better mobile fit -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: true  // Starts open on desktop; toggled on mobile
    }
  }
}
</script>