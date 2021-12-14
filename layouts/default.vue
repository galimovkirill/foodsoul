<template>
  <main>
    <TheHeader />
    <Nuxt />
  </main>
</template>

<script lang="ts">
import TheHeader from '@/components/Header/TheHeader.vue'

export default {
  components: { TheHeader },
}
</script>
