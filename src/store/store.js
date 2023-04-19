import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      contactList: [
        {
          id: 1,
          taskName: 'Learn AWS',
          dueDate: new Date(2023,5,5),
          completed:false
        },
        {
          id: 2,
        
          taskName: 'Learn Docker',
          dueDate: new Date(2023,5,5),
          completed:true
        },
       
       
      ],
    }
  },
  getters: {
    contactList: (state) => {
      return state.contactList
    },
  },
  mutations: {
    deleteContact(state, id) {
      const index = state.contactList
        .map((x) => {
          return x.id
        })
        .indexOf(id)
      state.contactList.splice(index, 1)
    },
    addContact(state, obj) {
      const contact = {
        id: Date.now(),
        ...obj,
      }
      state.contactList.push(contact)
    },

    editContact(state, item) {
      const items = state.contactList
      var foundIndex = items.findIndex((x) => x.id == item.id)
      items[foundIndex] = item
    },
  },
})

export default store
