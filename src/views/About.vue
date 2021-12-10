<template>
<div class="min-w-full min-h-screen p-8 bg-gray-800">
    <div class="p-4 flex flex-col items-center justify-center text-3xl font-bold text-white">
      <h2>About Note App</h2>
    </div>
      <div class="flex flex-col p-4 rounded ">
        <div class="relative my-2 ">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 opacity-50 rounded filter blur-sm"></div>
            <div class="relative rounded-md  bg-gray-900">
              <div class=" flex items-center ">
                <div class="flex flex-col ">
                    <div class="flex min-h-1/2  w-full bg-gray-900 rounded-t text-md text-left text-gray-600 tracking-wider p-1">
                      <div class="flex min-h-1/2 items-center space-x-2">
                        <span><ExclamationIcon class="w-7 h-7 text-yellow-500 " /></span>
                        <p class="text-yellow-500 font-bold uppercase text-lg tracking-wider">Description</p>
                      </div>
                    </div>
                    <div class="text-gray-300 my-5 p-4 space-y-6 leading-loose">
                      <div>
                         <p class="font-semibold text-yellow-400 pb-2">An App where you can organize notes and thought in categories</p>
                        <p>With a registration and login system; each user have a unique credentials and a unique account, where the user can keep his notes safe from others. The user can check done and undone the note or the toodo, and have a priefe sammary on his dashboard.</p>
                      </div>
                      <div class="leading-loose">
                        <h3 class="text-yellow-500 font-bold  uppercase text-lg tracking-wider pb-4 pt-2">The Tecknologies used</h3>
                        <p>○ php Laravel frame work for a seperate API </p>
                        <p>○ Vue.JS and Tailwind CSS for the UI </p>
                      </div>
                    </div>
                </div>
                <div class="flex items-center justify-around  w-full m-4">
                  <div class="w-1/3">
                  <img src="https://www.pravelsolutions.com/images/about/laravel.png" alt="Laravel" class="  bg-cover ">
                  </div>
                  <div class="w-1/3">
                  <img src="https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png" alt="VueJS" class=" h-32">
                  </div>
                  <div class="w-1/3">
                  <img src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png" alt="VueJS" class=" w-32">
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>
      <div>

      </div>
  <div class="p-4">
    <div class="relative my-2 ">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 opacity-50 rounded filter blur-sm"></div>
            <div class="relative rounded-md  bg-gray-900">
                <div class="flex flex-col ">
                    <div class="flex min-h-1/2 items-center justify-between w-full  rounded-t text-md text-left text-gray-600 tracking-wider p-1">
                      <div class="flex min-h-1/2 items-center space-x-2">
                        <span><ExclamationIcon class="w-7 h-7 text-yellow-500 text-opacity-50" /></span>
                        <p class="text-yellow-500 text-lg font-bold ">Contact Info</p>
                      </div>
                    </div>
                    <div class="flex items-center justify-center space-x-20 my-10 text-gray-300 p-4 space-y-1">
                        <!-- <p>{{ note.notes }}</p> -->
                        <a href="https://twitter.com/Hassan_87" class="px-6 py-2 border border-blue-400 rounded-2xl">Twitter</a>
                        <a href="https://www.facebook.com/halabadla/" class="px-6 py-2 border border-blue-600 rounded-2xl">Facebook</a>
                        <a href="https://github.com/HassanAbadla" class="px-6 py-2 border border-gray-400 rounded-2xl">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
  </div>
</div>
</template>

<script>

export default {
  components: { }
}
</script>