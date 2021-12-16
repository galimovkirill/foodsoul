<template>
  <div class="cart">
    <div class="container">
      <div v-if="cartItems.length">
        <div class="cart-body">
          <CartCard v-for="item in cartItems" :key="item.id" :item="item" />
        </div>

        <div class="cart-footer">
          <div>Финальная цена: {{ totalPrice }}$</div>
          <BaseButton
            label="Оформить заказ"
            type="primary"
            @click.native="handleCheckout"
          />
        </div>
      </div>

      <div v-else>Корзина пуста.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { cart, modal } from '~/utils/store-accessor'
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

  public handleCheckout(): void {
    modal.setShownModal('ModalSuccessOrder')
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
