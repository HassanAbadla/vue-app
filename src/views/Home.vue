<template>
  <div class="">
    <Start />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Start from '@/components/Start.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld, Start
  }
}
</script>
