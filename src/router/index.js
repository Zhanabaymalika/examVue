import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

import ContactForm from '../views/ContactForm.vue'; 

const routes = [
  { path: '/', component: Home },
 
  { path: '/contact', component: ContactForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
