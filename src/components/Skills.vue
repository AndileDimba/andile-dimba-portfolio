<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card outlined color="surface" class="pa-6" elevation="2" rounded>
          <h2 class="text-h5 font-weight-bold mb-4">Technical Skills</h2>
          <v-row>
            <v-col
              v-for="(category, index) in skillsCategories"
              :key="index"
              cols="12"
              sm="12"
              md="6"
              lg="4"
            >
              <v-card class="mb-4" outlined>
                <v-card-title>
                  <v-icon left>{{ category.icon }}</v-icon>
                  {{ category.title }}
                </v-card-title>
                <v-card-text>
                  <v-chip-group column>
                    <v-chip
                      v-for="(skill, sIndex) in category.skills"
                      :key="sIndex"
                      color="primary"
                      outlined
                    >
                      {{ skill }}
                    </v-chip>
                  </v-chip-group>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillsCategories: [
        {
          title: 'Programming Languages',
          icon: 'mdi-code-tags', // Icon for languages
          skills: ['C#', 'Python', 'JavaScript', 'TypeScript', 'Node']
        },
        {
          title: 'Frameworks',
          icon: 'mdi-application-brackets', // Icon for frameworks
          skills: ['.NET', 'Vue.js', 'Angular', 'Blazor', 'React']
        },
        {
          title: 'Databases',
          icon: 'mdi-database', // Icon for databases
          skills: ['Microsoft SQL Server', 'Db2', 'PostgreSQL']
        },
        {
          title: 'Tools',
          icon: 'mdi-tools', // Icon for tools
          skills: ['Azure DevOps', 'Docker', 'Git', 'SourceTree']
        },
        {
          title: 'Other',
          icon: 'mdi-cog', // Icon for miscellaneous
          skills: ['RESTful API Design', 'HTML', 'CSS']
        },
        {
          title: 'Certifications',
          icon: 'mdi-certificate', // Icon for certifications
          skills: ['AWS Certified Cloud Practitioner']
        }
        // Add more categories here if needed
      ]
    }
  }
}
</script>