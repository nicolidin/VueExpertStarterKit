<template>
  <v-app>
    <Header />
    below header
    <slot v-if="hasSidebarSlot" name="sidebar" />
    hasSidebarSlot: {{hasSidebarSlot}}
    <v-main :style="mainStyle">
      <v-container class="v-container">
        <div class="containerInner">
          <slot></slot>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import Header from "../Header/Header.vue";

const slots = useSlots();
const hasSidebarSlot = computed(() => !!slots.sidebar);
const mainStyle = computed(() => ({
  "--v-layout-left": hasSidebarSlot.value ? "256px" : "0px",
  "--v-layout-right": "0px",
  "--v-layout-top": "64px",
  "--v-layout-bottom": "44px",
}));
</script>

<style scoped lang="scss">
::v-deep(.v-container) {
  max-width: 100% !important; // it removes vuetify arbitrary rule
  padding: 0 16px;

  @media (min-width: $breakpoint-height-l) {
    padding-left: 15%;
    padding-right: 15%;
  }
}

.containerInner {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
