<template>
  <div class="catalog-grid">
    <CatalogCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import CatalogCard from '@/components/Catalog/CatalogCard.vue'

@Component({
  components: { CatalogCard },
})
export default class CatalogGrid extends Vue {
  @Prop({ required: true }) items!: Array<any>
}
</script>

<style lang="scss">
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
</style>
