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
    selectedItem.value.push(item)
  }
}

function isSelected(item: ClothesItemType): boolean {
  return selectedItem.value.some((i) => i.id === item.id)
}
</script>
<template>
  <div class="flex flex-col gap-2">
    <div
      class="border-white border-2 p-2 w-1/2 gap-2 rounded-md min-h-28 flex flex-col justify-end"
    >
      <div class="grid grid-cols-4 gap-2">
        <CItem
          v-for="item of selectedItem"
          :key="item.id"
          :item="item"
          class="hover:!scale-100 !cursor-auto"
        />
      </div>
      <p class="text-xs text-gray-400">
        Selected: {{ selectedItem.length }} / {{ store.availibleForChooseClothes.length }}
      </p>
    </div>
    <div class="border-white border-2 p-2 rounded-md grid grid-cols-4 gap-2 min-h-30 w-full">
      <CItem
        v-for="item of store.availibleForChooseClothes"
        :key="item.id"
        :item="item"
        :class="{ 'shadow-blue-500 shadow-md': isSelected(item) }"
        @click="clickHandler(item)"
      />
    </div>
  </div>
</template>
