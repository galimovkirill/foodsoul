<template>
  <div class="catalog-card">
    <div class="catalog-card-preview">
      <div class="catalog-card-preview__category">men's clothing</div>

      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
        class="catalog-card-preview__image"
      />
    </div>

    <div class="catalog-card-body">
      <span class="catalog-card-body__price">22.3 $</span>
      <h3 class="catalog-card-body__title">
        Mens Casual Premium Slim Fit T-Shirts
      </h3>

      <BaseButton label="В корзину" type="secondary" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BaseButton from '~/components/Base/BaseButton.vue'

@Component({
  components: { BaseButton },
})
export default class CatalogCard extends Vue {}
</script>

<style lang="scss">
.catalog-card {
  &-preview {
    position: relative;

    &__category {
      position: absolute;
      left: 0;
      top: 0;

      text-transform: uppercase;
      font-size: 11px;

      background: $orange;
      color: $white;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }

    &__image {
      height: 180px;
      width: 100%;
      object-fit: contain;
    }
  }

  &-body {
    &__price {
      font-size: 18px;
      font-weight: bold;
    }

    &__title {
      font-size: 12px;
    }
  }
}
</style>
