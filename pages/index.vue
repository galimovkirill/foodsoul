<template>
  <div class="container">
    <h1 class="hero-title">Каталог</h1>
    <CatalogGrid />
  </div>
</template>

<script lang="ts">
import CatalogGrid from '~/components/Catalog/CatalogGrid.vue'

export default {
  name: 'PageIndex',
  components: { CatalogGrid },
}
</script>
