<template>
  <main class="main">
    <TheHeader />
    <div class="main-wrapper">
      <Nuxt />
    </div>
  </main>
</template>

<script lang="ts">
import TheHeader from '@/components/Header/TheHeader.vue'

export default {
  components: { TheHeader },
}
</script>

<style lang="scss">
.main {
  padding-bottom: 3rem;
  &-wrapper {
    margin-top: 3rem;
  }
}
</style>
