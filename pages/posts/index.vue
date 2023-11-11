<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <p class="home">Posts Page</p>
        <PostCard v-for="card in data.list" :key="card.id" :postCardItem="card" />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
definePageMeta({
  layout: 'cutom'
});

const { data } = await useFetch('/api/posts?category=firs', {
  method: 'post',
  body: { some: 'test' } // if need post in server
})

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Posts not found!',
    fatal: true
  })
}
</script>

<style lang="scss" scoped>
.home {
  color: rebeccapurple;
}
</style>