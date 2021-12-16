<template>
  <div>
    <BaseButton label="+" type="secondary" @click.native="handleAddCartItem" />

    <span>{{ cartItemCount }}</span>

    <BaseButton
      label="-"
      type="secondary"
      @click.native="handleRemoveCartItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import BaseButton from '~/components/Base/BaseButton.vue'
import { cart } from '~/utils/store-accessor'
import { getCartItemCount } from '~/utils/cart'

@Component({
  components: { BaseButton },
})
export default class ProductCountButtons extends Vue {
  @Prop({ required: true }) item!: any

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
