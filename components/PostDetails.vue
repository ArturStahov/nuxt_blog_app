<template>
  <div class="details-wrapper">
    <p>
     {{ postItem.title }}
    </p>
    <VTextField 
          :rules="[ruleRequired, rulePassLen]" 
          v-model="password" 
          prepend-inner-icon="fluent:password-20-regular"
          id="password" name="password" type="password" />
  </div>
</template>

<script setup>
   const { postItem } = defineProps(['postItem']);
   const password = ref("");

   const { rulePassLen, ruleRequired } = useFormRules();

   const submit = async () => { };
</script>

<style lang="scss" scoped>

</style>