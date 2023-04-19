import { createRouter, createWebHashHistory } from 'vue-router'
import AddContact from './components/AddTask.vue'
import ContactList from './components/TaskList.vue'
import PendingList from './components/PendingList.vue'

const routes = [
  {
    path: '/',
    redirect: '/contact-list',
  },

  {
    path: '/contact-list',
    component: ContactList,
    name: ContactList,
  },

  {
    path: '/add-contact',
    component: AddContact,
    name: AddContact,
  },
  {
    path: '/pendinglist',
    component: PendingList,
    name: PendingList,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
