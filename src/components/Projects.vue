<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card outlined color="surface" class="pa-6" elevation="2" rounded>
          <h2 class="text-h5 font-weight-bold mb-4">Projects</h2>
          <v-timeline align="start" density="compact">
            <v-timeline-item
              v-for="(item, index) in projectItems"
              :key="index"
              dot-color="primary"
              icon="mdi-rocket-launch"
            >
              <v-card class="pa-4">
                <!-- Use title/subtitle props directly on v-list-item -->
                <v-list-item
                  :title="item.title"
                  :subtitle="item.subtitle"
                />
                <!-- Description as card text -->
                <v-card-text class="text-body-2">
                  {{ item.description }}
                </v-card-text>
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
  name: 'Projects',
  data() {
    return {
      projectItems: [
        {
          title: 'SARS System',
          subtitle: 'BBD',
          description: 'Developed and maintained the SARS system, delivering new features and resolving system issues in a fast-paced, agile environment. Contributed to both front-end (C#) and back-end (Python) components, ensuring seamless integration and reliable deployments.'
        },
        {
          title: 'Home Affairs System',
          subtitle: 'Interfile',
          description: 'Enhanced and supported the Home Affairs system, enabling efficient processing of applications for certificates, IDs, passports, and visas. Worked on both legacy modernization and new feature development using C#, Python, and Angular.'
        },
        {
          title: 'IFRS 17 Compliance Software',
          subtitle: 'Digital Solution Foundry',
          description: 'Built IFRS 17 compliance software, integrating client APIs with the company’s API to enable batch accounting calculations for major insurance companies, including Hollard Zambia and Hollard Mozambique.'
        },
        {
          title: 'Smart City Traffic Monitor',
          subtitle: 'Hackathon Winner',
          description: 'Led a team to develop a real-time traffic monitoring app using Vue.js and Node.js. Won first place for innovation and technical execution.'
        }
        // Add more items here if needed
      ]
    }
  }
}
</script>