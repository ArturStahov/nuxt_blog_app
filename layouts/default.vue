<template>
  <div class="layout-wrapper">
    <header class="header" :class="{ 'header-sticky': stickyHeader }">
      <HeaderLayout>
        <template v-slot:left>
          {{ $t('hello') }}
        </template>
        <template v-slot:center>
          <LogoComponent />
        </template>
        <template v-slot:right>
          <LocalizationSelect />
        </template>
      </HeaderLayout>
    </header>

    <main>
      <div>
        <VApp>
          <VMain>
            <slot />
          </VMain>
        </VApp>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'

const stickyHeader = ref(false);

const handlerScroll = () => {
  if (process.client && window.pageYOffset) {
    stickyHeader.value = true
  } else {
    stickyHeader.value = false
  }
}

onBeforeMount(() => {
  process.client && window.addEventListener('scroll', handlerScroll);
})

onBeforeUnmount(() => {
  process.client && window.removeEventListener('scroll', handlerScroll);
})




</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.header {
  height: 100px;
  background-color: $colorHeaderBackground;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  transition: height 0.4s ease-in;
  border-bottom: 1px solid $colorSeparator;
}

.header-sticky {
  height: 75px;
  background-color: $colorHeaderStickyBackground;
}
</style>