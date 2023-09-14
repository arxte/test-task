import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGeneralStore = defineStore('general', () => {
  const photos = ref<Array<any>>([])
  const keyword = ref<string>('')
  const idClickedPhoto = ref<string>('')
  const likedPhotos = ref<Array<any>>([])

  return {
    photos,
    keyword,
    idClickedPhoto,
    likedPhotos
  }
})
