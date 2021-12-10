<template>
  <div class="w-full bg-gray-800 flex border border-l border-gray-700">
    <div v-if="!this.$store.state.selectedCategory" class="flex flex-col w-2/3 p-4 pt-10 ">
      <div class="relative my-2 ">
            <div class="absolute -inset-0.5 bg-gradient-to-t from-pink-800 to-yellow-500 opacity-50 rounded filter blur-sm"></div>
            <div class="relative rounded-md  bg-gray-900">
                <div class="flex flex-col ">
                    <div class="flex min-h-1/2 items-center justify-between w-full bg-gray-900 rounded-t text-md text-left text-gray-600 font-mono tracking-wider p-1">
                      <div class="flex min-h-1/2 items-center space-x-2">
                        <span><ExclamationIcon class="w-7 h-7 text-yellow-500 text-opacity-50" /></span>
                        <p class="text-yellow-500 font-bold text-opacity-50">message</p>
                      </div>
                    </div>
                    <div class="text-gray-300 font-bold p-4 space-y-1">
                        <!-- <p>{{ note.notes }}</p> -->
                        <p>You have to select a category first.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- Todos -->
    <div v-if="this.$store.state.selectedCategory" class="flex flex-col w-2/3 p-4">
      <div class="pb-8">
        <div>
        <h3 class="text-2xl font-bold text-white text-center uppercase tracking-wider">Todos</h3>
        </div>
        <div class="flex flex-row-reverse w-full p-8 text-gray-600 justify-around items-center focus-within:text-gray-400 border-b border-gray-700 pb-8">
                <PlusSmIcon @click="addNote" class="w-8 h-8  text-purple-500 cursor-pointer" />
            <input v-model="NewNote" type="text" name="notes" class="py-2 w-4/5 text-sm mx-4 text-white  bg-gray-800 border-0 border-b-2 border-purple-500 rounded-b-md focus:outline-none focus:ring-0 focus:bg-gray-700" placeholder="Add a Todo..." autocomplete="off">
          </div>
      </div>
    <!-- Card -->
    <div v-for="note in notes" :key="note.id" class="relative my-2">
            <div class="absolute -inset-0.5 bg-gradient-to-b from-gray-800 to-blue-500 opacity-50 rounded filter blur-sm"></div>
            <div class="relative rounded-md bg-gray-800">
                <div class="flex flex-col">
                    <div class="flex items-center justify-between w-full bg-gray-900 rounded-t text-xs text-left text-gray-600 font-mono tracking-widest p-1">
                      <div class="flex items-center space-x-2">
                        <span><ClockIcon class="w-5 h-5 text-blue-500 text-opacity-50" /></span>
                        <p class="text-blue-500 text-opacity-50">{{ note.created_at }}</p>
                      </div>
                      <div class="flex pr-2">
                        <CheckIcon @click="update(note)" class="text-gray-700 w-5 h-5 mx-5 hover:text-green-600" />
                        <XIcon @click="deleteNote(note)" class="text-gray-700 w-5 h-5 hover:text-pink-900" />
                      </div>
                    </div>
                    <div class="text-gray-300 p-4 space-y-1 font-thin">
                        <!-- <p>{{ note.notes }}</p> -->
                        <p>{{ note.notes }}</p>
                    </div>
                </div>
            </div>
        </div>
    <!-- End Card -->
    </div>
    <!-- End Todos -->

    <!-- DONE Todos -->
    <div class="flex flex-col w-1/3 p-4 border-l border-gray-700">
      <div class="pb-8">
        <h3 class="text-2xl font-bold text-white text-center uppercase tracking-wider">Done</h3>
      </div>
      <div v-for="note in doneNotes" :key="note.id" class="relative my-2">
        <div class="absolute -inset-0.5 bg-gradient-to-b from-gray-700 to-pink-800 opacity-50 rounded filter blur-sm"></div>
            <div class="relative rounded-md bg-gray-900">
                <div class="flex flex-col">
                    <div class="flex items-center justify-between w-full bg-gray-800 rounded-t text-xs text-left text-gray-600 font-mono tracking-widest border-b border-gray-700 p-1">
                      <div class="flex items-center space-x-2  ">
                        <span><ClockIcon class="w-5 h-5 text-pink-700 text-opacity-50" /></span>
                        <p class="text-pink-700 text-opacity-50">{{ note.completed_at }}</p>
                      </div>
                      <div class="flex pr-2">
                        <ChevronDoubleLeftIcon @click="undone(note)" class="text-gray-600 w-5 h-5 mx-5 hover:text-yellow-500" />
                        <XIcon @click="deleteNote(note)" class="text-gray-600 w-5 h-5 hover:text-pink-900" />
                      </div>
                    </div>
                    <div class="text-gray-500 p-4 space-y-1 font-thin">
                        <!-- <p>{{ note.notes }}</p> -->
                        <p>{{ note.notes }}</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
    <!-- End Incompleted Todos -->

  </div>
</template>

<script>
import { PlusSmIcon, XIcon, CheckIcon, ClockIcon, ChevronDoubleLeftIcon, ExclamationIcon  } from '@heroicons/vue/outline'
import { mapGetters } from 'vuex'

export default {
  components: { PlusSmIcon, XIcon, CheckIcon, ClockIcon, ChevronDoubleLeftIcon, ExclamationIcon  },

  data() {
    return {
      NewNote: '',
      user_id: '',
      category_id: '',
      completed: 'yes',
      note_id: ''
    }
  },

  methods: {
    addNote() {
      this.user_id = this.$store.getters.authenticated.id
      this.category_id = this.$store.getters.selected
      const data = {
                notes: this.NewNote,
                user_id: this.user_id,
                category_id: this.category_id
            }
      this.$store.dispatch('addNote', data)
      this.NewNote = ''
      this.$store.dispatch('getCategories')
    },

    update(note) {
      this.completed='yes'
      this.note_id = note.id
      let data = {
        id : this.note_id,
        completed : this.completed
      }
      this.$store.dispatch('updateNote', data);
      this.$store.dispatch('getCategories')
    },

    undone(note) {
      this.completed = 'no'
      this.note_id = note.id

      let data = {
        id: this.note_id,
        completed: this.completed
      }
      this.$store.dispatch('undone', data);
      this.$store.dispatch('getCategories')
    },

    deleteNote(note) {
      this.$store.dispatch('deleteNote', note);
    }
  },

  computed: {
    // Show notes by selected category
    notes() {
      let notes = Object.values(this.$store.state.notes)
      if(!this.$store.state.selectedCategory == '') {
        return this.$store.state.notes = notes.filter(notes => notes.category_id == this.$store.state.selectedCategory)
      } else {
        return ;
      }
    },

    ...mapGetters({
            authenticated: 'authenticated',
            user: 'user',
            categories: 'categories',
            // notes : 'notes',
            selected: 'selected',
            doneNotes: 'doneNotes'
        }),

    authenticated() {
      return this.$store.state.user
    },
  },

mounted() {
  return this.$store.state.notes
}

}
</script>