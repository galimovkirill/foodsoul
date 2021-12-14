<template>
  <div class="container">
    <h1 class="hero-title">Каталог</h1>
    <CatalogGrid :items="products" />
  </div>
</template>

<script lang="ts">
import api from '@/services/api'
import CatalogGrid from '~/components/Catalog/CatalogGrid.vue'

export default {
  name: 'PageIndex',
  components: { CatalogGrid },

  async asyncData() {
    const [products] = await Promise.all([api.products.getProducts()])

    return {
      products: products.data,
    }
  },
}
</script>
