<template>
  <div class="base-modal">
    <div class="base-modal__wrapper">
      <BaseModalOverlay />
      <div
        class="base-modal__content"
        :class="[`modal-x-${posX} modal-y-${posY}`]"
      >
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import BaseModalOverlay from '~/components/Base/BaseModalOverlay.vue'

@Component({
  components: { BaseModalOverlay },
})
export default class BaseModal extends Vue {
  @Prop({
    default: 'center',
    validator(value: string): boolean {
      return ['left', 'center', 'right'].includes(value)
    },
  })
  posX!: string

  @Prop({
    default: 'center',
    validator(value: string): boolean {
      return ['top', 'center', 'bottom'].includes(value)
    },
  })
  posY!: string
}
</script>

<style lang="scss">
.base-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  &__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
  }
}

.modal-x {
  &-left {
    justify-content: flex-start;
  }
  &-center {
    justify-content: center;
  }
  &-right {
    justify-content: flex-end;
  }
}

.modal-y {
  &-top {
    align-items: flex-start;
  }
  &-center {
    align-items: center;
  }
  &-bottom {
    align-items: flex-end;
  }
}
</style>
