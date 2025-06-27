<script setup lang="ts">
import { ref } from 'vue'
import { useClothesStore } from '../store/clothes'
import CItem from './CItem.vue'

import type { ClothesItemType } from '../types'
import CLoader from '@/components/CLoader.vue'

const store = useClothesStore()

const selectedItem = ref<ClothesItemType>()

function clickHandler(item: ClothesItemType) {
  if (selectedItem.value?.id === item.id) {
    selectedItem.value = undefined
  } else {
    selectedItem.value = item
  }
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="!w-1/2 !min-h-28 self-end flex">
      <CItem
        v-if="selectedItem"
        :item="selectedItem"
        class="hover:!scale-100 !cursor-auto !h-auto"
      />
      <p class="text-right self-end ml-auto" v-else>Nothing chosen</p>
    </div>
    <div
      class="border-white relative border-2 p-2 rounded-md grid grid-cols-4 min-h-30 gap-2 w-full"
    >
      <template v-if="!store.availibleClothes.length">
        <div class="absolute inset-0 flex items-center justify-center">
          <CLoader class="absolute inset-0 m-auto" />
        </div>
      </template>
      <template v-else>
        <CItem
          v-for="item of store.availibleClothes"
          :key="item.id"
          :item="item"
          :class="{
            'shadow-blue-500 shadow-md': selectedItem?.id === item.id,
          }"
          @click="clickHandler(item)"
        />
      </template>
    </div>
  </div>
</template>
