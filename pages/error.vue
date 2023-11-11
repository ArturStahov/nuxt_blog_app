<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <p>
          {{ error.statusCode }}
        </p>
        <p>
          {{ error.message }}
        </p>
        <button @click="handleClearError">
          Go home page ...
        </button>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
defineProps(['error']);
const handleClearError = () => {
  clearError({ redirect: '/' });
}
</script>

<style lang="scss" scoped></style>