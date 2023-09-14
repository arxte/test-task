<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import axios from 'axios'
import { useGeneralStore } from '../stores/general'

const generalStore = useGeneralStore()

async function getPhoto() {
  await axios
    .get('https://api.unsplash.com/search/photos', {
      params: {
        query: generalStore.keyword,
        per_page: 9
      },

      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Client-ID REW54_Vu9Fe3sJ5aJT46eYb22ty1wl4htuum-i1P0Fc',
        'X-Ratelimit-Limit': 1000,
        'X-Ratelimit-Remaining': 999
      }
    })
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        generalStore.photos = response.data.results
      } else {
        console.log('ERROR!!!')
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <section class="search-wrapper">
    <div class="input-wrapper">
      <input
        name="search"
        placeholder="Поиск"
        type="text"
        class="search"
        v-model="generalStore.keyword"
        @keyup.enter="getPhoto()"
      />

      <img
        src="../assets/svg/magnifying-glass.svg"
        alt="magnifying glass"
        class="search-img"
        @click="getPhoto()"
      />
    </div>
  </section>
</template>

<style scoped src="../assets/css/search.css"></style>
