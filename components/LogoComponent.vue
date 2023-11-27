<template>
  <h1 class="logo">
    BrainSphereConnect
  </h1>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.logo {
  margin: 0;
  font-size: 1rem;
  color: $colorLogo;
  user-select: none;
  transition: color 0.4s ease-in;
  font-weight: 700;
  font-family: $header-font;
  cursor: pointer;
  &:hover {
    color: $colorHoverLogo
  }
}
</style>