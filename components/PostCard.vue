<template>
  <div class="post-card">
    <NuxtLink :to="`posts/${postCardItem.id}`">
      {{ postCardItem.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { postCardItem } = defineProps(['postCardItem'])
const password = ref("");

const { rulePassLen, ruleRequired } = useFormRules();

const submit = async () => { };
</script>

<style lang="scss" scoped></style>