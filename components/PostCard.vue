<template>
  <div class="post-card">
    <NuxtLink :to="`posts/${postCardItem.id}`">
      {{ postCardItem.title }}
      <VTextField 
        :rules="[ruleRequired, rulePassLen]" 
        v-model="password" 
        prepend-inner-icon="fluent:password-20-regular"
        id="password" name="password" type="password" />
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