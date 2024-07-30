<script setup lang="ts"></script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink class="bg-slate-400 text-black" to="/">Go to Home</RouterLink>
    <RouterLink class="bg-slate-400 text-black" to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
