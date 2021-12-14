<template>
  <button class="button" :class="`button--${type}`">{{ label }}</button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseButton extends Vue {
  @Prop({ default: '' }) label!: string
  @Prop({
    default: 'primary',
    validator(value: any): boolean {
      return ['primary', 'secondary'].includes(value)
    },
  })
  type!: string
}
</script>

<style lang="scss">
.button {
  border: none;
  background: none;
  font-size: 14px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &--primary {
    background: $dark-blue;
    color: $white;
  }

  &--secondary {
    background: transparent;
    color: $dark-blue;
    border: 1px solid $dark-blue;
  }
}
</style>
