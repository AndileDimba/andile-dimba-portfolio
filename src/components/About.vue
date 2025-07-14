<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card outlined color="surface" class="pa-6" elevation="2" rounded>
          <v-row align="center">
            <!-- Avatar Column (stacks on top on mobile) -->
            <v-col cols="12" sm="12" md="4" lg="3" class="d-flex justify-center mb-4 mb-md-0">
              <v-avatar size="150" class="elevation-4">
                <v-img src="/AndileDimba.jpg" alt="Andile Dimba" cover class="rounded-circle"></v-img>
              </v-avatar>
            </v-col>
            <!-- Text Column -->
            <v-col cols="12" sm="12" md="8" lg="9">
              <h1 class="text-h4 font-weight-bold mb-2">Andile Dimba</h1>
              <div class="text-subtitle-1 mb-4">Intermediate Software Engineer</div>
              <p class="text-body-1 mb-4">
                Passionate about building modern web applications and solving real-world problems with technology. Open
                to new opportunities, consulting, and collaboration.
              </p>
              <!-- Quick Highlights -->
              <v-list density="compact" class="mb-4">
                <v-list-item>
                  <v-icon color="primary" start size="small">mdi-email</v-icon> <!-- Full name -->
                  <a href="mailto:mlamulia75@gmail.com">mlamulia75@gmail.com</a>
                </v-list-item>
                <v-list-item>
                  <v-icon color="primary" start size="small">mdi-map-marker</v-icon> <!-- Full name -->
                  Sandton, GP, South Africa
                </v-list-item>
              </v-list>

              <!-- Social Links -->
              <div class="mb-4">
                <v-btn icon href="https://linkedin.com/in/yourprofile" target="_blank" class="mx-1">
                  <v-icon color="primary" size="large">mdi-linkedin</v-icon> <!-- Full name -->
                </v-btn>
                <v-btn icon href="https://github.com/yourusername" target="_blank" class="mx-1">
                  <v-icon color="primary" size="large">mdi-github</v-icon> <!-- Full name -->
                </v-btn>
                <!-- Add more as needed -->
              </div>
              <v-btn color="primary" href="/AndileDimbaCV.pdf" target="_blank" download class="mb-2">
                View CV
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  // You can add data, methods, computed properties, etc. here if needed
}
</script>

<style scoped>
/* Optional: Add subtle animation for fade-in */
.v-card {
  transition: all 0.3s ease-in-out;
}

.v-avatar img {
  object-fit: cover;
  /* Ensures image fits without distortion */
}
</style>