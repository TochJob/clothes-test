<script setup lang="ts">
import { ref } from 'vue'
import { useClothesStore } from '../store/clothes'
import CItem from './CItem.vue'

import type { ClothesItemType } from '../types'

const store = useClothesStore()
const selectedItem = ref<ClothesItemType[]>([])

function clickHandler(item: ClothesItemType) {
  if (selectedItem.value.some((i) => i.id === item.id)) {
    selectedItem.value = selectedItem.value.filter((i) => i.id !== item.id)
  } else {
    selectedItem.value?.push(item)
  }
}
</script>
<template>
  <div>
    <div class="border-white border-2 p-2 rounded-md grid grid-cols-4 gap-2 w-full">
      <CItem v-for="item of selectedItem" :key="item.id" :item="item" />
    </div>
    <div class="border-white border-2 p-2 rounded-md grid grid-cols-4 gap-2 w-full">
      <CItem
        v-for="item of store.availibleForChooseClothes"
        :key="item.id"
        :item="item"
        @click="clickHandler(item)"
      />
    </div>
  </div>
</template>
