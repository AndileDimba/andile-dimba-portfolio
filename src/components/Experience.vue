<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card outlined color="surface" class="pa-6" elevation="2" rounded>
          <h2 class="text-h5 font-weight-bold mb-4">Professional Experience</h2>
          <v-timeline align="start" density="compact">
            <v-timeline-item
              v-for="(item, index) in experienceItems"
              :key="index"
              dot-color="primary"
              icon="mdi-briefcase"
            >
              <v-card class="pa-4">
                <!-- Updated for Vuetify 3: Use title/subtitle props directly on v-list-item -->
                <v-list-item
                  :title="item.role"
                  :subtitle="`${item.company} | ${item.dates}`"
                />
                <!-- Responsibilities as a clean list without deprecated content wrapper -->
                <v-list dense>
                  <v-list-item v-for="(responsibility, rIndex) in item.responsibilities" :key="rIndex">
                    {{ responsibility }}
                  </v-list-item>
                </v-list>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experienceItems: [
        {
          role: 'Intermediate Software Engineer',
          company: 'Interfile',
          dates: 'Oct 2023 – Present',
          responsibilities: [
            'System development for Home Affairs: Build and enhance solutions for efficient processing of applications.',
            'Front-end (C# WPF) & back-end (Python) development, modernizing legacy systems.',
            'Angular (TypeScript) integration for seamless functionality.',
            'System monitoring, support, and stakeholder collaboration.',
            'Led support team during manager’s leave; handled production standby and critical support.'
          ]
        },
        {
          role: 'Junior Software Developer',
          company: 'Digital Solution Foundry',
          dates: 'Jan 2023 – Sep 2023',
          responsibilities: [
            'Developed IFRS 17 compliance software for major insurance clients.',
            'Database optimization and backend (.NET MVC) development.',
            'Frontend development and migration (Vue.js, Webpack to Vite).',
            'Deployment pipelines with Azure DevOps.',
            'Collaborated with accountants and conducted code reviews.'
          ]
        },
        {
          role: 'Software Engineer',
          company: 'BBD',
          dates: 'Apr 2022 – Jan 2023',
          responsibilities: [
            'Worked on SARS system: new features and bug fixes in two-week sprints.',
            'Full-stack development (C# front-end, Python back-end).',
            'Supported production deployments and troubleshooting.',
            'Investigated and resolved system failures.'
          ]
        }
        // Add more items here if needed
      ]
    }
  }
}
</script>