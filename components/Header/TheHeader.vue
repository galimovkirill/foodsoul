<template>
  <header class="header">
    <div class="header-wrapper">
      <nuxt-link to="/" class="header-logo">Foodsoul</nuxt-link>

      <div class="header-menu">
        <nuxt-link to="/cart" class="header-menu__item">Корзина</nuxt-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background: $dark-blue;
  color: $white;
  padding: 1rem;

  &-logo {
    font-weight: 800;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
