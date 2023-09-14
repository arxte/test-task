<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-wrapper">
        <RouterLink to="/" class="logo-wrapper">
          <img src="../assets/svg/logo.svg" alt="art-gallery" class="logo" />
        </RouterLink>

        <RouterLink to="/favorites" class="favorites">
          <img src="../assets/svg/heart.svg" alt="heart" class="favorites__logo" />

          <span class="favorites__text">Избранное</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/css/header.css"></style>
