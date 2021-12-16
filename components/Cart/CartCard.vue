<template>
  <div class="cart-card">
    <div class="cart-card__info">
      <img :src="item.image" alt="" class="cart-card__image" />
      <div class="cart-card__body">
        <h4 class="cart-card__body-title">{{ item.title }}</h4>
        <span class="cart-card__body-delete" @click="handleTotalRemoveCartItem">
          Удалить
        </span>
      </div>
    </div>

    <ProductCountButtons :item="item" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ProductCountButtons from '~/components/Base/ProductCountButtons'
import { cart } from '~/utils/store-accessor'
import { getElementIndex } from '~/utils'

@Component({
  components: { ProductCountButtons },
})
export default class extends Vue {
  @Prop({ required: true }) item!: any

  itemIndex = getElementIndex(this.cartItems, 'id', this.item)

  get cartItems(): any[] {
    return cart.getCartItems
  }

  public handleTotalRemoveCartItem(): void {
    cart.REMOVE_CART_ITEM(this.itemIndex)
  }
}
</script>

<style lang="scss">
.cart-card {
  min-height: 124px;
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &__info {
    display: flex;
    align-items: center;
  }

  &__image {
    max-width: 92px;
    max-height: 92px;
    width: 100%;
    object-fit: contain;
  }

  &__body {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    height: 100%;
    &-title {
      margin: 0;
      font-size: 14px;
    }
    &-delete {
      cursor: pointer;
      color: $orange;
      font-size: 14px;
      margin-top: auto;
    }
  }
}
</style>
