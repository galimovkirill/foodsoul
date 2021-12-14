<template>
  <div class="catalog-grid">
    <CatalogCard v-for="card in 7" :key="card" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CatalogCard from '@/components/Catalog/CatalogCard.vue'

@Component({
  components: { CatalogCard },
})
export default class CatalogGrid extends Vue {}
</script>

<style lang="scss">
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
</style>
