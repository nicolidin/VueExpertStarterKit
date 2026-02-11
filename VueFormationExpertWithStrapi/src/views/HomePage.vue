<template>
  <Layout>
    <div class="home">
      <h1 class="home__title">Bienvenue</h1>
      <nav class="home__nav">
        <RouterLink to="/notes" class="home__link">Mes notes</RouterLink>
      </nav>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from 'vue-lib-expert-starter-kit';
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  &__title {
    font-size: 2rem;
  }

  &__nav {
    display: flex;
    gap: 1rem;
  }

  &__link {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    background: rgb(var(--v-theme-primary));
    color: white;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
