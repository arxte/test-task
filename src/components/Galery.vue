<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import axios from 'axios'
import { useGeneralStore } from '../stores/general'

const generalStore = useGeneralStore()

function getRandomPage(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

async function getMorePhoto() {
  await axios
    .get('https://api.unsplash.com/search/photos', {
      params: {
        query: generalStore.keyword,
        page: getRandomPage(1, 150),
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
        response.data.results.forEach((element: any) => {
          generalStore.photos.push(element)
        })
      } else {
        console.log('ERROR!!!')
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

function checkIdClickedPhoto(id: string) {
  generalStore.idClickedPhoto = id
}
</script>

<template>
  <section class="galery-wrapper">
    <div class="container">
      <ul class="galery">
        <RouterLink
          to="/detail"
          class="galery__link"
          v-for="photo in generalStore.photos"
          :key="photo.id"
        >
          <li class="galery__item" @click="checkIdClickedPhoto(photo.id)">
            <img :src="photo.urls.small" alt="image" class="galery__img" />
          </li>
        </RouterLink>
      </ul>

      <button
        type="button"
        class="more-photo"
        v-if="generalStore.photos.length > 0"
        @click="getMorePhoto()"
      >
        Показать еще
      </button>
    </div>
  </section>
</template>

<style scoped src="../assets/css/galery.css"></style>
