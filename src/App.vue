<template>
<div>
  <div class="w-full bg-gray-200 flex item-center justify-around p-4">
    <div class="" id="nav">
      <router-link to="/" class="text-sm text-purple-800">Home</router-link> |
      <router-link to="/about" class="text-sm text-purple-800">About</router-link>
    </div>
    <div v-if="authenticated" class="flex items-center space-x-4 text-sm">
      <p class="text-green-600">{{ authenticated.name }}</p>
      <button @click.prevent="logout" class="text-gray-700">logout</button>
    </div>
  </div>
    <router-view />
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
            authenticated: 'authenticated',
            user: 'user'
        }),
  },
  methods: {
    ...mapActions({
      logoutAction: 'logout'
    }),

    logout() {
      this.logoutAction().then(() => {
        // this.$store.state.selectedCategory = ''
        // this.$store.state.notes = []
        this.$router.replace({ name: 'Home' })
      })
    }
  }
}
</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
