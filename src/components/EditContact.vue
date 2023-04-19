<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="modal-mask overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
      @click.self="close"
    >
      <div class="relative w-6/12 bg-green-100 shadow-lg rounded-md p-5">
        <button
          aria-label="close"
          class="absolute top-0 right-0 text-4xl text-gray-500 my-2 mx-4"
          @click.prevent="close"
        >
          ×
        </button>
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
                :value="editContactId.taskName"
                ref="taskName"
               
              />
            </div>
           
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-password"
              >
                dueDate
              </label>
              <input type="date"
           
                class="block appearance-none w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                :value="editContactId.dueDate"
                ref="dueDate"
               
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-2">
           <div class="md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-password"
              >
                taskstatus
              </label>
              <select class="block appearance-none w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                :value="editContactId.completed"  ref="completed">
                <option>true</option>
                <option>false</option>
              
              </select>
           
           
            </div>
          </div>
          <button
            type="submit"
            class="bg-black my-5 px-4 py-2 text-lg font-semibold tracking-wider text-white rounded hover:bg-green-600 w-4/12"
          >
            Sbumit
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
    editContactId: {},
  },
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    },
    submitContactData() {
      if (
        this.$refs.taskName.value != '' &&
        this.$refs.dueDate != ''&&
        this.$refs.completed!= ''
       
      ) {
        const contact = {
          id: this.editContactId.id,
          taskName: this.$refs.taskName.value,
          dueDate: new Date(this.$refs.dueDate.value),
          completed:this.$refs.completed.value,
        
        }
        this.$store.commit('editContact', contact)
        this.$emit('close')
      } else alert('Empty Input not allowed')
    },
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-mask {
  z-index: 9998;
  background-color: rgba(19, 15, 15, 0.5);
  transition: opacity 0.3s ease;
}
</style>
