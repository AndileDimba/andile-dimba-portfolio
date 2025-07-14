<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-fade-transition> <!-- Fade-in for the main card -->
          <v-card outlined color="surface" class="pa-6" elevation="2" rounded>
            <h2 class="text-h5 font-weight-bold mb-4">My Hobbies: Running</h2>
            <p class="text-body-1 mb-6">
              Running is more than a hobby—it's my way to build discipline, stay healthy, and clear my mind after long coding sessions. Just like debugging a tough bug, pushing through a run teaches resilience and focus. I've been lacing up for years, chasing personal bests and enjoying the outdoors in South Africa. Here's a peek at my training and records!
            </p>

          <!-- Visual: Sample Training Program -->
          <h3 class="text-h6 mb-3">Sample Weekly Training Program</h3>
          <v-table density="compact" class="mb-6">
            <thead>
              <tr>
                <th>Day</th>
                <th>Activity</th>
                <th>Distance/Duration</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>Easy Run / Rest</td>
                <td>5km / 30-40 min</td>
                <td>Focus on form and recovery</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>Interval Training</td>
                <td>5km (intervals)</td>
                <td>Alternate sprints and jogs for speed</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>Rest or Cross-Train</td>
                <td>N/A</td>
                <td>Yoga or light walk to recover</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>Easy Run</td>
                <td>5km / 35 min</td>
                <td>Shakeout before long run</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>Tempo Run</td>
                <td>5km / 30 min</td>
                <td>Steady pace to build endurance</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>Rest</td>
                <td>N/A</td>
                <td>Sabbath / Isabatha</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Long Run</td>
                <td>8-16km / 60-90 min</td>
                <td>Build mileage gradually</td>
              </tr>
            </tbody>
          </v-table>

          <!-- Personal Best Records -->
          <h3 class="text-h6 mb-3">Personal Bests</h3>
          <v-row>
              <v-slide-y-transition group appear> <!-- Group for staggered slide-up -->
                <v-col cols="12" sm="6" md="4" v-for="(record, index) in personalBests" :key="index">
                  <v-card elevation="1" class="pa-4 text-center">
                    <v-chip color="primary" class="mb-2" size="small">{{ record.distance }}</v-chip>
                    <div class="text-h6 font-weight-bold">{{ record.time }}</div>
                    <div class="text-caption">{{ record.date }} - {{ record.event }}</div>
                  </v-card>
                </v-col>
              </v-slide-y-transition>
            </v-row>
          <p class="text-caption mt-4">Last updated: July 2025. Check back for new PBs!</p>
        </v-card>
        </v-fade-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Hobbies',
  data() {
    return {
      personalBests: [
        { distance: '400m', time: '1:41', date: 'April 2025', event: 'Interval session' },
        { distance: '1K', time: '4:45', date: 'July 2025', event: 'Sunday 8km Long run' },
        { distance: '5K', time: '27:41', date: 'April 2025', event: 'Altrack TT' },
        { distance: '10K', time: '1:06:43', date: 'April 2025', event: 'Sunday 16km Long run' },
        { distance: 'Half Marathon', time: '3:01:40', date: 'February 2025', event: 'Sunday 22km Long run' },
        // Add/update your real records here—easy to edit and redeploy!
      ]
    }
  }
}
</script>

<style scoped>
/* Optional: Add some flair to the table */
.v-table th {
  background-color: var(--v-theme-primary);
  color: white !important;
}
</style>