import { defineStore } from 'pinia'
import { ref } from 'vue'

import { left, right } from '../consts/index'

import type { ClothesItemType } from '../types'

export const useClothesStore = defineStore('clothes', () => {
  const availibleClothes = ref<ClothesItemType[]>([])
  const availibleForChooseClothes = ref<ClothesItemType[]>([])
  const choosedClothes = ref<ClothesItemType[]>([])

  function fetchClothes() {
    availibleForChooseClothes.value = left

    setTimeout(() => {
      availibleClothes.value = right
    }, 1000)
  }

  return {
    availibleClothes,
    availibleForChooseClothes,
    choosedClothes,

    fetchClothes,
  }
})
