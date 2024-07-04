<script setup lang="ts">
import NavBarComponent from '@/components/NavBarComponent.vue';
import TemplateComponent from '@/components/TemplateComponent.vue';
</script>

<template>
  <TemplateComponent>
    <template #wrapper>
      <NavBarComponent />
    </template>
  </TemplateComponent>
</template>

<style scoped></style>
