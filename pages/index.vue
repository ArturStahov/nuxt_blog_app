<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <div>
          <p class="home">Home page</p>
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>

definePageMeta({
  layout: 'default'
})

</script>

<style lang="scss" scoped>
.home {
  color: rebeccapurple;
}
</style>