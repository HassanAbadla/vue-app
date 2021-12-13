import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'

export default createStore({
  state: {
    user:[],
    token: null,
    data: [],
    doneNotes: [],
    notComNotes: [],
    notes:[],
    NewCat: '',
    selectedCategory:''
  },


  mutations: {

    login(state, user){
      state.user = user
    },

    setUser(state, user) {
      state.user = user
      router.push({ name: 'Dashboard' });
    },

    setToken(state, token) {
      state.token = token
    },

    logout(state) {
      state.data = null
      state.user = null
      state.token = null
    },
    
    getCategories( state, data) {
      state.data = data
      state.doneNotes = data.doneNotes
      state.notComNotes = data.notComp
      state.notes = data.notComp
      console.log(data.notComp);
    },

    addCategory(state, NewCategory) {
      state.NewCat = NewCategory
    },

    deleteCat(state, category) {
      // make array from objects
      let catVal = Object.values(state.data.categories)
      state.data.categories = catVal.filter(cat => {
          console.log(cat.id);
          return cat.id !== category.id
      })
      return state.data.categories
    },

    updateNote(state, note) {
      let noteVal = Object.values(state.notes)
      state.notes = noteVal.filter(notes => {
        return notes.id !== note.id
      })
    },

    undone(state, note) {
      let noteVal = Object.values(state.notes)
      state.notes = noteVal.filter(notes => {
        return notes.id !== note.id
      })
    },

    deleteNote(state, note) {
      let noteVal = Object.values(state.notes)
      state.notes = noteVal.filter(notes => {
        return notes.id !== note.id 
      })
      return state.notes
    },

    setFilter(state, selected){
      state.selectedCategory = selected.id
      state.notes = state.data.notComp
    }

  },


  actions: {

    async login({ dispatch }, fields){
      // console.log(mutation.payload);
      let response = await axios.post('http://mynots.gulfytrend.com/api/api/login', fields)
      console.log(response.data);
      return dispatch('attempt', response.data.token)
    },

    async attempt({ commit, state }, token){
      if (token) {
        commit('setToken', token)
      }
       
      if(!state.token) {
        return
      }

      try {
        let response = await axios.get('http://mynots.gulfytrend.com/api/api/user')
        console.log(response.data);
        commit('setUser', response.data)

      } catch (e) {
        commit('setToken', null)
        commit('setUser', null)
      }
    },

    async register({ dispatch }, creds) {
      console.log(creds);
      let response = await axios.post('http://mynots.gulfytrend.com/api/api/register', creds)
      return dispatch('attempt', response.data.token)
    },

    logout({commit}) {
      return axios.post('http://mynots.gulfytrend.com/api/api/logout').then(res => {
        commit('setToken', null)
        commit('setUser', null)
        
      })
    },

    getCategories({ commit }) {
      axios.get('http://mynots.gulfytrend.com/api/api/dashboard').then(res => {
        
          commit('getCategories', res.data)
      })
    },

    addCategory({commit}, NewCategory) {
      axios.post('http://mynots.gulfytrend.com/api/api/category/store', NewCategory)
      commit('addCategory', NewCategory)
    },

    deleteCat({ commit, dispatch }, category) {
      axios.delete('http://mynots.gulfytrend.com/api/api/category/' + category.id).then(res => {
          if(res.status == 200) {
              commit('deleteCat', category)
              dispatch('getCategories')
          }
      })
    },

    addNote({commit}, NewNote) {
      axios.post('http://mynots.gulfytrend.com/api/api/notes/store', NewNote).then(res => {
        if (res.status == 200) {
            commit('addNote')
        }
      })
    },

    deleteNote({ commit }, note) {
      axios.delete('http://mynots.gulfytrend.com/api/api/notes/' + note.id).then(res => {
          if(res.status == 200) {
              commit('deleteNote', note)
          }
      })
    },

    updateNote({ commit }, data) {
      axios.put('http://mynots.gulfytrend.com/api/api/notes/' + data.id, data).then(res => {
          if(res.status == 200) {
              commit('updateNote', data)
          }
      })
    },
    undone({ commit }, data) {
      axios.put('http://mynots.gulfytrend.com/api/api/notes/' + data.id, data).then(res => {
          if(res.status == 200) {
              commit('undone', data)
          }
      })
    }
  },

  getters: {
    authenticated(state){
      return state.token && state.user
    },

    user(state) {
      return state.user
    },
    categories(state) {
        return state.data.categories

    },

    notes(state) {
      return state.notes
    },

    doneNotes(state) {
      return state.data.doneNotes
    },

    selected(state) {
        return state.selectedCategory
    },

  },


  modules: {
  }
})