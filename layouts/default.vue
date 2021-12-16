<template>
  <main class="main">
    <TheHeader />
    <div class="main-wrapper">
      <Nuxt />
    </div>

    <BaseModalViewer />
  </main>
</template>

<script lang="ts">
import TheHeader from '@/components/Header/TheHeader.vue'
import BaseModalViewer from '~/components/Base/BaseModalViewer.vue'

export default {
  components: { TheHeader, BaseModalViewer },
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
