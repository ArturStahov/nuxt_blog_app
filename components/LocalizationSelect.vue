<template>
   <div>
      <label for="locale">{{ `${$t('language')}:`}}</label>
      <select id="locale" v-model="language">
        <option v-for="locale in locales" :key="locale.code" :value="locale.code">
          {{ locale.name }}
        </option>
      </select>
    </div>
</template>
<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
import { useI18n, useLocalePath } from '#imports'
const { locale, locales, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
})

</script>

<style lang="scss" scoped>


</style>