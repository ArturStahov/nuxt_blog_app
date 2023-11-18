<template>
  <VContainer class="header-container">
    <VRow no-gutters>
      <VCol cols="12" sm="4" lg="4">
        <v-sheet class="ma-2 pa-2">
           <slot name="left"></slot>
        </v-sheet>
      </VCol>
      <VCol cols="12" sm="4" lg="4">
        <v-sheet class="ma-2 pa-2">
          <slot name="center"></slot>
        </v-sheet>
      </VCol>
      <VCol cols="12" sm="4" lg="4">
        <v-sheet class="ma-2 pa-2">
          <slot name="right"></slot>
        </v-sheet>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>

</script>
  
<style lang="scss" scoped>

.header-container {
  height: 100%;
  display: flex;
  align-items: center;
}

</style>