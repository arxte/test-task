<script setup lang="ts">
import { ref } from 'vue'
import { useGeneralStore } from '../stores/general'
import axios from 'axios'

const generalStore = useGeneralStore()

let clickedPhoto = ref<any>()

generalStore.photos.forEach((element: any) => {
  if (element.id === generalStore.idClickedPhoto) {
    clickedPhoto.value = element
  }
})

async function downloadPhoto() {
  await axios.get(`https://api.unsplash.com/photos/${clickedPhoto.value.id}/download`, {
    params: {
      id: clickedPhoto.value.id
    },

    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Client-ID REW54_Vu9Fe3sJ5aJT46eYb22ty1wl4htuum-i1P0Fc',
      'X-Ratelimit-Limit': 1000,
      'X-Ratelimit-Remaining': 999
    }
  })
}

function likePhoto() {
  if (!clickedPhoto.value.liked_by_user) {
    clickedPhoto.value.liked_by_user = true

    generalStore.likedPhotos.push(clickedPhoto.value)
  } else {
    clickedPhoto.value.liked_by_user = false
    generalStore.likedPhotos = generalStore.likedPhotos.filter(
      (photo) => photo.liked_by_user === true
    )
  }
  console.log(generalStore.likedPhotos)
}
</script>

<template>
  <section class="detail">
    <img src="../assets/images/rectangle.png" alt="bgc" class="detail-bgc" />
    <div class="detail-wrapper">
      <div class="container">
        <div class="detail-profile">
          <div class="detail-profile-info">
            <img
              :src="clickedPhoto.user.profile_image.large"
              alt="profile image"
              class="profile-img"
            />

            <div class="detail-profile-name">
              <span class="detail-name">{{ clickedPhoto.user.name }}</span>
              <span class="detail-instagram">@{{ clickedPhoto.user.instagram_username }}</span>
            </div>
          </div>

          <div class="detail-profile-actions">
            <div
              class="detail-profile-actions__like"
              :class="[{ liked_photo: clickedPhoto.liked_by_user }]"
              @click="likePhoto()"
            >
              <img
                src="../assets/svg/likeIcon.svg"
                alt="like icon"
                class="detail-profile-actions__img"
              />
            </div>

            <div class="detail-profile-actions__download" @click="downloadPhoto()">
              <img
                src="../assets/svg/downloadIcon.svg"
                alt="download icon"
                class="detail-profile-actions__img"
              />

              <span class="detail-profile-actions__text">Download</span>
            </div>
          </div>
        </div>

        <img :src="clickedPhoto.urls.full" alt="clicked photo" class="clickedPhoto" />
      </div>
    </div>
  </section>
</template>

<style scoped src="../assets/css/moreDetail.css"></style>
