<template>
  <div class="catalog-card">
    <div class="catalog-card-preview">
      <div class="catalog-card-preview__category">{{ item.category }}</div>

      <img :src="item.image" alt="" class="catalog-card-preview__image" />
    </div>

    <div class="catalog-card-body">
      <span class="catalog-card-body__price">{{ item.price }} $</span>
      <h3 class="catalog-card-body__title">{{ item.title }}</h3>

      <div class="catalog-card__buttons">
        <BaseButton
          v-if="!isCartContainsItem"
          label="В корзину"
          type="secondary"
          class="catalog-card-body__cart-button"
          @click.native="handleAddCartItem"
        />

        <div v-else>
          <BaseButton
            label="+"
            type="secondary"
            class="catalog-card-body__cart-button"
            @click.native="handleAddCartItem"
          />

          <span>{{ cartItemCount }}</span>

          <BaseButton
            label="-"
            type="secondary"
            class="catalog-card-body__cart-button"
            @click.native="handleRemoveCartItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import BaseButton from '~/components/Base/BaseButton.vue'
import { cart } from '~/utils/store-accessor'
import { isCartContainsItem, getCartItemCount } from '~/utils/cart'

@Component({
  components: { BaseButton },
})
export default class CatalogCard extends Vue {
  @Prop({ required: true }) item!: any

  get isCartContainsItem(): boolean {
    return isCartContainsItem(this.item.id)
  }

  get cartItemCount(): number {
    return getCartItemCount(this.item.id)
  }

  public handleAddCartItem(): void {
    cart.addCartItem(this.item)
  }

  public handleRemoveCartItem(): void {
    cart.removeCartItem(this.item)
  }
}
</script>

<style lang="scss">
.catalog-card {
  display: flex;
  flex-direction: column;

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
      display: block;
      margin: 0 auto;
      height: 180px;
      max-width: 180px;
      width: 100%;
      object-fit: contain;
    }
  }

  &-body {
    margin-top: auto;

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
