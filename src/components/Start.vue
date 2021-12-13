<template>
  <div class="min-h-screen w-full bg-gray-800 flex items-center justify-center">
      <div class="relative  w-2/3">
            <div class="absolute -inset-0.5 bg-gradient-to-b from-blue-800 to-purple-700 opacity-50 rounded filter blur-xs"></div>
            <div class="relative flex justify-around rounded-md bg-gray-800">
                <div class="bg-gray-800 flex flex-col w-1/2 border-r border-gray-700 rounded-l px-8 py-10">
                    <div class="text-white mt-10">
                        <h1 class="font-bold text-4xl">Welcome Back</h1>
                        <p class="font-semibold">Login and start noting!</p>
                    </div>
                    <form class="flex flex-col space-y-8 mt-10">
                        <input v-model="email" type="text" placeholder="Email" name="email" class="border text-white rounded py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500">
                        <input v-model="password" type="password" placeholder="Passowrd" name="password" class="border text-white rounded py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500">
                        <button @click.prevent="login" class="border border-purple-600 bg-purple-600 text-white rounded py-3 font-semibold">Log in</button>
                    </form>
                </div>

                <div class="bg-gray-800 flex flex-col w-1/2  rounded px-8 py-10">
                    <div class="text-white mt-10">
                        <h1 class="font-bold text-4xl">Welcome</h1>
                        <p class="font-semibold">Let's create your account!</p>
                    </div>
                    <form class="flex flex-col space-y-8 mt-10">
                        <input v-model="name" type="text" placeholder="Name" name="name" class="border rounded py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500 text-white">
                        <input v-model="regmEail" type="text" placeholder="Email" name="email" class="border rounded py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500 text-white">
                        <input v-model="regPass" type="password" placeholder="Password" name="password" class="border rounded py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500 text-white">
                        <input v-model="regPassConf" type="password" placeholder="Confirm Password" name="password_confirmation" class="border text-white rounded py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500">
                        <button @click.prevent="register()" class="border border-blue-700 bg-blue-700 text-white rounded py-3 font-semibold text-center">Register</button>
                    </form>
                </div>

            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            email:'',
            password:'',

            name:'',
            regmEail:'',
            regPass:'',
            regPassConf:''
        }
    },
    methods: {
        login() {
            const fields = {
                email: this.email,
                password: this.password
            }

            // console.log(fields);
            this.$store.dispatch('login', fields).then(()=> {
                this.$router.replace({ name: 'Dashboard' })
            })
        },

        register() {
            const creds = {
                name:this.name,
                email:this.regmEail,
                password:this.regPass,
                password_confirmation:this.regPassConf
            }

            this.$store.dispatch('register', creds).then(() => {
                this.$router.replace({ name: 'Dashboard' })
            })
        }
    }
}
</script>

<style>

</style>