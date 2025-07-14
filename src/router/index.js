import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Experience from '../components/Experience.vue'
import Hobbies from '../components/Hobbies.vue'
import Education from '../components/Education.vue'

const routes = [
  { path: '/', redirect: '/about' },,
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  {path: '/experience', name: 'Experience', component: Experience },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
  {path: '/education', name: 'Education', component: Education },
  {path: '/hobbies', name: 'Hobbies', component: Hobbies},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router