<template>
  <v-container class="py-8">
    <h1 class="text-h4 font-weight-bold mb-4">Technical Skills</h1>
    <v-row>
      <!-- Left Column (stacks on small screens) -->
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-card class="mb-4" outlined>
          <v-card-title>Programming Languages</v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip color="primary" outlined>C#</v-chip>
              <v-chip color="primary" outlined>Python</v-chip>
              <v-chip color="primary" outlined>JavaScript</v-chip>
              <v-chip color="primary" outlined>TypeScript</v-chip>
              <v-chip color="primary" outlined>Node</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
        <v-card class="mb-4" outlined>
          <v-card-title>Frameworks</v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip color="primary" outlined>.NET</v-chip>
              <v-chip color="primary" outlined>Vue.js</v-chip>
              <v-chip color="primary" outlined>Angular</v-chip>
              <v-chip color="primary" outlined>Blazor</v-chip>
              <v-chip color="primary" outlined>React</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
        <v-card class="mb-4" outlined>
          <v-card-title>Databases</v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip color="primary" outlined>Microsoft SQL Server</v-chip>
              <v-chip color="primary" outlined>Db2</v-chip>
              <v-chip color="primary" outlined>PostgreSQL</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Right Column (stacks on small screens) -->
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-card class="mb-4" outlined>
          <v-card-title>Tools</v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip color="primary" outlined>Azure DevOps</v-chip>
              <v-chip color="primary" outlined>Docker</v-chip>
              <v-chip color="primary" outlined>Git</v-chip>
              <v-chip color="primary" outlined>SourceTree</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
        <v-card class="mb-4" outlined>
          <v-card-title>Other</v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip color="primary" outlined>RESTful API Design</v-chip>
              <v-chip color="primary" outlined>HTML</v-chip>
              <v-chip color="primary" outlined>CSS</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
        <v-card class="mb-4" outlined>
          <v-card-title>Certifications</v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip color="primary" outlined>AWS Certified Cloud Practitioner</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Skills',
  // You can add data, methods, computed properties, etc. here if needed
}
</script>