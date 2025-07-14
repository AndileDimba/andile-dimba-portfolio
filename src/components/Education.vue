<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-fade-transition> <!-- Fade-in for the main card -->
          <v-card outlined color="surface" class="pa-6" elevation="2" rounded>
            <h2 class="text-h5 font-weight-bold mb-4">Education & Certifications</h2>
            <v-timeline align="start" density="compact">
              <v-scale-transition group appear> <!-- Group for staggered scale-in -->
                <v-timeline-item v-for="(item, index) in educationItems" :key="index" :dot-color="item.color" :icon="item.icon">
                  <v-card class="pa-4">
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                    <v-card-text>{{ item.description }}</v-card-text>
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