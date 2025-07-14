<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="8" lg="6">
        <v-card outlined color="surface" class="pa-4" elevation="2">
          <v-card-title class="font-weight-bold text-h5">
            <v-icon color="primary" class="mr-2">mdi-handshake</v-icon>
            Get in Touch
          </v-card-title>
          <v-card-subtitle class="text-body-1 mb-4">
            Let's connect and discuss opportunities!
          </v-card-subtitle>
          <v-divider class="mb-4"></v-divider>
          <v-list density="compact">
            <v-list-item>
              <v-icon color="primary" start>mdi-email</v-icon>
              <span class="font-weight-bold mr-2">Email:</span>
              <a href="mailto:mlamulia75@gmail.com">mlamulia75@gmail.com</a>
            </v-list-item>
            <v-list-item>
              <v-icon color="primary" start>mdi-map-marker</v-icon>
              <span class="font-weight-bold mr-2">Location:</span>
              Sandton, GP, South Africa
            </v-list-item>
            <v-list-item>
              <v-icon color="primary" start>mdi-briefcase</v-icon>
              <span class="font-weight-bold mr-2">Professional Availability:</span>
            </v-list-item>
            <v-list-item class="text-body-2 ml-4">
              🚀 Open to new opportunities and challenges<br>
              🗣️ Welcome to connecting
            </v-list-item>
          </v-list>
          <v-divider class="my-4"></v-divider>
          <!-- Social Links (customize as needed) -->
          <div class="text-center mb-4">
            <v-btn icon href="https://linkedin.com/in/yourprofile" target="_blank" class="mx-2">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon href="https://github.com/yourusername" target="_blank" class="mx-2">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn icon href="https://twitter.com/yourhandle" target="_blank" class="mx-2">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </div>
          <!-- Call to Action Button -->
          <div class="text-center">
            <v-btn color="primary" href="mailto:mlamulia75@gmail.com" class="mb-2">
              Send Message
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  // You can add data, methods, computed properties, etc. here if needed
}
</script>