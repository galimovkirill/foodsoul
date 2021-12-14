<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-logo">Онлайн-магазин</div>

      <div class="header-menu">
        <nuxt-link to="/cart" class="header-menu__item">Корзина</nuxt-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background: black;
  color: white;
  padding: 1rem;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
