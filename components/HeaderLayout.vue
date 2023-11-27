<template>
  <VContainer class="headerLayout">
    <VRow no-gutters>
      <VCol cols="12" sm="4" lg="4">
        <v-sheet class="ma-0 pa-2 headerLayout__content-wrapper">
           <slot name="left"></slot>
        </v-sheet>
      </VCol>
      <VCol cols="12" sm="4" lg="4">
        <v-sheet class="ma-0 pa-2 headerLayout__content-wrapper">
          <slot name="center"></slot>
        </v-sheet>
      </VCol>
      <VCol cols="12" sm="4" lg="4">
        <v-sheet class="ma-0 pa-2 headerLayout__content-wrapper">
          <slot name="right"></slot>
        </v-sheet>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>

</script>
  
<style lang="scss" scoped>

.headerLayout {
  height: 100%;
  display: flex;
  align-items: center;
  &__content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}

</style>