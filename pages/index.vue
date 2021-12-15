<template>
  <div class="container">
    <h1 class="hero-title">Каталог</h1>
    <CatalogGrid :items="products" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CatalogGrid from '~/components/Catalog/CatalogGrid.vue'
import { catalog } from '~/utils/store-accessor'

@Component({
  components: { CatalogGrid },
})
export default class extends Vue {
  async asyncData() {
    const [products] = await Promise.all([catalog.fetchProducts()])

    return {
      products,
    }
  }
}
</script>
