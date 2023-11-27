<template>
  <VContainer fluid class="fill-height">
    <Head>
      <Title>
        Post {{ data.title }}
      </Title>
      <Meta name="description" :content="data.description" />
    </Head>
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <div>

          <p class="home">One Posts Page {{ id }}</p>
          <PostDetails :postItem="data" />
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { useI18n } from '#imports'
const { locale } = useI18n();

const { id } = useRoute().params;
const uri = `/api/description?category=firs&id=${id}&locale=${locale.value}`;
const { data } = await useFetch(uri, { key: id });
console.log('data:>>>>', data)
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found!',
    fatal: true
  })
}

</script>

<style lang="scss" scoped>
.home {
  color: rebeccapurple;
}
</style>