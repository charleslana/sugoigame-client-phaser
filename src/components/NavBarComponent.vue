<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  msg?: string;
}>();

const sidebar = ref(false);
const menuItems = ref([
  { title: 'Início', path: '/', icon: 'mdi-home' },
  { title: 'Cadastrar', path: '/register', icon: 'mdi-account-plus' }
]);
</script>

<template>
  <v-toolbar class="toolbar-background" height="60">
    <v-app-bar-nav-icon @click="sidebar = true" class="d-md-none"></v-app-bar-nav-icon>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-text-field
      hide-details="auto"
      solo
      placeholder="E-mail"
      class="mr-2 d-none d-md-inline-block"
    ></v-text-field>
    <v-text-field
      hide-details="auto"
      label="Senha"
      type="password"
      class="d-none d-md-inline-block"
    ></v-text-field>
    <v-btn
      size="large"
      variant="flat"
      color="secondary"
      class="custom-button d-none d-md-inline-block"
      >Acessar</v-btn
    >
  </v-toolbar>
  <v-navigation-drawer v-model="sidebar" temporary right>Hello</v-navigation-drawer>
</template>

<style scoped>
.toolbar-background {
  background-color: black;
  color: white;
}
</style>
