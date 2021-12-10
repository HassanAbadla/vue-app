import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './assets/tailwind.css'

require('@/store/subscriber')

store.dispatch('attempt', localStorage.getItem('token')).then(() => {
    createApp(App).use(store).use(router).mount('#app')
})


