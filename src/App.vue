<template>
  <div class="flex p-10 items-center flex-col divide-y divide-black-500">
    <h1 class="text-4xl font-extrabold py-5">
      VueJS  + VueX - <span class="text-green-600">Todo Task</span>
    </h1>

    <div class="sm:w-11/12 md:w-7/12 py-5">
      <menu-bar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menu from './components/Menu.vue'
import AddTask from './components/AddTask.vue'
import TaskList from './components/TaskList.vue'
import PendingList from './components/PendingList.vue';
export default {
  components: {
    'menu-bar': menu,
    'add-contact': AddTask,
    'contact-list': TaskList,
    'pendingtasks': PendingList
  },
}
</script>

<style>
body {
  background: #f3f4f6;
}
</style>
