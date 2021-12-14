<template>
  <div class="container">
    <h1>Hello</h1>
    <BaseButton label="Добавить в корзину" />
  </div>
</template>

<script lang="ts">
import BaseButton from '~/components/Base/BaseButton.vue'

export default {
  name: 'PageIndex',
  components: { BaseButton },
}
</script>
