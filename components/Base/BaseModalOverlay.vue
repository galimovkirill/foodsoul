<template>
  <div class="modal-overlay" @click="closeModal" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { modal } from '~/utils/store-accessor'

@Component
export default class BaseModalOverlay extends Vue {
  public closeModal(): void {
    modal.closeModal()
  }
}
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: $black;
  opacity: 0.7;
}
</style>
