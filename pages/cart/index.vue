<template>
  <div class="cart">
    <div class="container">
      <div class="cart-body">
        <CartCard v-for="item in cartItems" :key="item.id" :item="item" />
      </div>

      <div class="cart-footer">
        <div>Финальная цена: {{ totalPrice }}$</div>
        <BaseButton label="Оформить заказ" type="primary" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { cart } from '~/utils/store-accessor'
import CartCard from '~/components/Cart/CartCard.vue'
import BaseButton from '~/components/Base/BaseButton.vue'

@Component({
  components: { BaseButton, CartCard },
})
export default class extends Vue {
  get cartItems() {
    return cart.getCartItems
  }

  get totalPrice() {
    return cart.getCartTotalPrice
  }
}
</script>

<style lang="scss">
.cart {
  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 3rem;
    padding-top: 3rem;
    border-top: 1px solid $gray;
  }
}
</style>
