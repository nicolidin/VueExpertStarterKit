<template>
  <HeaderLayout>
    <v-btn-toggle
      v-model="colorRef"
      mandatory
      size="small"
      class="toggle themeToggle"
    >
      <v-btn value="dark" size="small"> dark </v-btn>
      <v-btn value="light" size="small"> light </v-btn>
    </v-btn-toggle>
  </HeaderLayout>
</template>

<script setup lang="ts">
import HeaderLayout from "../../Molecules/HeaderLayout/HeaderLayout.vue";
import { useTheme } from "../../../modules/globalAppData/composables/useTheme.ts";

const { colorRef } = useTheme();
</script>

<style scoped lang="scss">
.toggle {
  // Styles optionnels pour le theme toggle
}
</style>
