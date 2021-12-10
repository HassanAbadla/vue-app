<template>
<div class="min-w-full min-h-screen flex">
    <Side />
    <Main />
</div>
</template>

<script>
import Main from '../components/main.vue'
import Side from '../components/side.vue'

export default {
  components: { Main, Side }
}
</script>