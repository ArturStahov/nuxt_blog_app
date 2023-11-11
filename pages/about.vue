<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <div>
          <p>
            {{ data.test }}
          </p>
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>

useHead({
  title: 'about',
  meta: [
    { name: 'description', content: 'My posts site about' }
  ]
});

const { data } = await useFetch('/api/test-dynamic-route/dynamic-category-key');
console.log('ABOUT DATA:', data.value);

</script>

<style lang="scss" scoped></style>