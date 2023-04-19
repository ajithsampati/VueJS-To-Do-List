<template>
  <form
    @submit.prevent="submitContactData"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
  >
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-first-name"
        >
         Task Name
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          id="grid-first-name"
          type="text"
          v-model="taskName"
         
        />
      </div>
     
    </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-full px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-password"
        >
          Due date
        </label>
        <input
          class="block appearance-none w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
          id="grid-password"
          type="date"
          v-model="dueDate"
         
        />
      </div>
    </div>
   
    <button
      type="submit"
      class="bg-black my-5 px-4 py-2 text-lg font-semibold tracking-wider text-white rounded hover:bg-green-600 w-4/12"
    >
      Sbumit
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      taskName: '',
      dueDate: ''
   
    }
  },

  methods: {
    submitContactData() {
      const contact = {
        taskName: this.taskName,
        dueDate: this.dueDate,
        completed:false
       
      }
      if (
        this.taskName != '' &&
       this.dueDate != '' 
       
      ) {
        this.$store.commit('addContact', contact)
        this.taskName = ''
        this.dueDate = ''
      
        this.$router.push({ path: '/contact-list' })
      } else alert('Please fillup all the input box')
    },
  },
}
</script>

<style></style>
