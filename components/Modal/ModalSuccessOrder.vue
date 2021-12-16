<template>
  <BaseModal>
    <div class="success-order-modal">
      <h2>Ваш заказ успешно оформлен!</h2>
      <div @click="closeModal" style="cursor: pointer">Закрыть</div>
    </div>
  </BaseModal>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseModal from '~/components/Base/BaseModal.vue'
import { modal } from '~/utils/store-accessor'

@Component({
  components: { BaseModal },
})
export default class ModalSuccessOrder extends Vue {
  public closeModal(): void {
    modal.closeModal()
  }
}
</script>

<style lang="scss">
.success-order-modal {
  background: $white;
  padding: 2rem;
}
</style>
