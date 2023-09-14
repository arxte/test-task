<script setup lang="ts">
import { useGeneralStore } from '../stores/general'

const generalStore = useGeneralStore()
</script>

<template>
  <div class="container">
    <section class="favorites-photos">
      <h1 class="favorites-photos__title">Избранное</h1>

      <ul class="favorites-photos-list">
        <RouterLink
          to="/detail"
          v-for="photo in generalStore.likedPhotos"
          :key="photo.id"
          class="favorites-photos-list__link"
        >
          <li class="favorites-photos-list__item">
            <img :src="photo.urls.small" alt="liked photo" class="favorites-photos-list__img" />
          </li>
        </RouterLink>
      </ul>
    </section>
  </div>
</template>

<style scoped src="../assets/css/favoritesPhotos.css"></style>
