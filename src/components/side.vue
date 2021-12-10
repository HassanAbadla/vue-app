<template>
          
  <div class=" flex flex-col bg-gray-800  shadow-sm">
      <!-- summary -->
      <div class="w-full border-b px-4 border-gray-700 pb-6 mb-4">
          <h3 class="text-lg uppercase font-bold tracking-wider text-purple-400 text-center py-4">Summary</h3>
          <div class="flex space-x-3">
              <div class="p-2 w-full border border-gray-700 rounded space-y-3">
                  <h4 class="text-xs text-white uppercase text-center">Done</h4>
                  <p class="text-sm font-bold text-purple-400 uppercase text-center">{{this.$store.state.data.doneCount}}</p>
              </div>
              <div class="p-2 w-full border border-gray-700 rounded space-y-3">
                  <h4 class="text-xs text-white uppercase text-center">Todo</h4>
                  <p class="text-sm font-bold text-purple-400 uppercase text-center">{{this.$store.state.data.notCompCount}}</p>
              </div>
          </div>
      </div>
<!-- Summary End -->
<!-- Add New Category -->
        <div class="flex flex-col space-y-8 w-full text-white">
            <div class="relative  text-gray-600 focus-within:text-gray-400 border-b border-gray-700 pb-8">
                    <PlusSmIcon @click="addCategory()" class="w-8 h-8 absolute inset-y-0 right-8 text-purple-500 cursor-pointer" />
                <input v-model="Category" type="text" name="NewCat" class="py-2 text-sm mx-4 text-white  bg-gray-800 border-0 border-b-2 border-purple-500 rounded-b-md focus:outline-none focus:ring-0 focus:bg-gray-700" placeholder="New Category" autocomplete="off">
            </div>
<!-- End Add new Category -->
<!-- Categories -->
            <div v-for="category in categories" :key="category.id"  class="flex flex-col cursor-pointer ">
                <div class="flex w-full justify-between  border-b border-gray-700">
                <a href="#" @click="filterCategories(category)" :class="{activeCategory: (category.id === activeId), category: (category.id !== activeId) }" >{{ category.category }}
                    <XIcon @click="deleteCat(category)" class="absolute top-1 m-1 right-1 w-5 h-5 text-gray-600 hover:text-purple-400" />
                </a>
                </div>
            </div>
<!-- End Categories -->
        </div>
  </div>
</template>

<script>

import { PlusSmIcon } from '@heroicons/vue/outline'
import { XIcon } from "@heroicons/vue/outline"

import { mapGetters } from 'vuex'
export default {
    components: { PlusSmIcon, XIcon },
    data() {
        return {
                Category:'',
                user_id: '',
                activeId: 0,
        }
    },
    methods: {
        addCategory() {
            this.user_id = this.$store.getters.authenticated.id
            const data = {
                category: this.Category,
                user_id: this.user_id
            }
            
            this.$store.dispatch('addCategory', data)
            this.$store.dispatch('getCategories')
            // console.log(this.$store.getters.authenticated.id);
            
            this.Category=''
        },
        deleteCat(category){
            console.log(category.id);
            this.$store.dispatch('deleteCat', category )
        },

        filterCategories(category) {
            // console.log(category.category);
            this.selected = category
            this.activeId = category.id
            this.$store.commit('setFilter', category)
            // this.$store.dispatch('getCategories')
        },

        clearFilter() {
            this.$store.state.selectedCategory == ''
        }
    },
    computed:{

        selectedCat: {
      get() {
        return this.$store.state.selected
      },

      set(caValue) {
        this.$store.commit('setFilter', caValue)
      }
    },

        categories() {
            // console.log(this.$store.state.data.categories);
            // return this.$stsore.state.data.categories
        },

        authenticated() {
            return this.$store.state.user
        },


        ...mapGetters({
            authenticated: 'authenticated',
            user: 'user',
            categories: 'categories'
        }),

        
    },

    mounted() {
        this.$store.dispatch('getCategories')
        this.$store.getters.notes
        // this.categories = this.$store.getters.categories.category
    },

}
</script>