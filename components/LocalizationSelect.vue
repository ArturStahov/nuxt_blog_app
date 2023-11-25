<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <v-btn variant="outlined" v-bind="props">
        {{ selected.name }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item 
        v-for="locale in locales" 
        :key="locale.code" 
        :value="locale.code"
        @click="handlerSelect(locale.code)"
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup>

import { useI18n } from '#imports'
const { locale, locales, setLocale } = useI18n();

const handlerSelect = (value) => {
  setLocale(value)
}

const selected = computed(() => locales?.value.find( i => i.code === locale.value ))

</script>

<style lang="scss" scoped></style>