<template>
  <component :is="shownModal" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { modal } from '~/utils/store-accessor'
import ModalSuccessOrder from '~/components/Modal/ModalSuccessOrder.vue'

@Component({
  components: {
    ModalSuccessOrder,
  },
})
export default class BaseModalViewer extends Vue {
  get shownModal(): string {
    return modal.getShownModal
  }
}
</script>
