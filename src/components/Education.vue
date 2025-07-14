<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-fade-transition> <!-- Fade-in for the main card -->
          <v-card outlined color="surface" class="pa-6" elevation="2" rounded>
            <h2 class="text-h5 font-weight-bold mb-4">Education & Certifications</h2>
            <v-timeline
              :align="$vuetify.display.smAndDown ? 'start' : 'start'"
              :side="$vuetify.display.smAndDown ? 'end' : 'end'" 
              density="compact"
              class="responsive-timeline"
            >
              <v-scale-transition group appear> 
                <v-timeline-item
                  v-for="(item, index) in educationItems"
                  :key="index"
                  :dot-color="item.color"
                  :icon="item.icon"
                  :class="{ 'full-width-mobile': $vuetify.display.smAndDown }"
                >
                  <v-card class="pa-4">
                    <v-card-title class="text-wrap">{{ item.title }}</v-card-title> <!-- Ensure title wraps -->
                    <v-card-subtitle class="text-wrap">{{ item.subtitle }}</v-card-subtitle> <!-- Ensure subtitle wraps -->
                    <v-card-text class="text-wrap">{{ item.description }}</v-card-text> <!-- Ensure description wraps -->
                  </v-card>
                </v-timeline-item>
              </v-scale-transition>
            </v-timeline>
          </v-card>
        </v-fade-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      educationItems: [
        { title: 'Certificate in Information Technology', subtitle: 'Umuzi.org Bootcamp, 2021-2022', description: 'Focused on software engineering, algorithms, and web development. Graduated with NQF5.', color: 'primary', icon: 'mdi-school' },
        { title: 'AWS Certified Developer', subtitle: 'Amazon Web Services, 2025', description: 'Certified in cloud development, deployment, and security best practices.', color: 'primary', icon: 'mdi-certificate' },
      ]
    }
  }
}
</script>

<style scoped>
/* Ensure text wraps on small screens without cutoff */
.text-wrap {
  white-space: normal !important; /* Allow wrapping */
  word-break: break-word !important; /* Break long words if needed */
  hyphens: auto; /* Optional: Auto-hyphenate for better flow */
}

/* Make timeline items full-width on mobile */
.full-width-mobile .v-timeline-item__body {
  max-width: 100% !important; /* Override default narrowing */
  padding: 0 8px; /* Add breathing room */
}

/* Adjust timeline for better mobile spacing */
.responsive-timeline {
  overflow: visible !important; /* Prevent clipping */
}
</style>