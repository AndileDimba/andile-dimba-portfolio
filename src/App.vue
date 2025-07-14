<template>
  <v-app>
    <v-navigation-drawer app color="surface" elevation="2"> <!-- Added color and elevation for a modern feel -->
      <!-- Static header with tagline -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 font-weight-bold">Andile Dimba</v-list-item-title>
          <v-list-item-subtitle>Intermediate Software Engineer</v-list-item-subtitle>
          <v-list-item-subtitle class="text-caption mt-1">Building innovative solutions in South
            Africa</v-list-item-subtitle> <!-- Inspired tagline -->
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <!-- Navigation links with emojis -->
      <v-list nav>
        <v-list-item to="/about" prepend-icon="mdi-information-outline">About</v-list-item> <!-- Emoji-like icon -->
        <v-list-item to="/skills" prepend-icon="mdi-tools">Skills</v-list-item>
        <v-list-item to="/experience" prepend-icon="mdi-briefcase">Experience</v-list-item>
        <v-list-item to="/projects" prepend-icon="mdi-rocket-launch">Projects</v-list-item>
        <v-list-item to="/education" prepend-icon="mdi-school">Education</v-list-item> <!-- New, inspired -->
        <v-list-item to="/hobbies" prepend-icon="mdi-run">Hobbies</v-list-item> <!-- New, inspired -->
        <v-list-item to="/contact" prepend-icon="mdi-email">Contact</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-fade-transition mode="out-in"> <!-- Smooth page transitions -->
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>