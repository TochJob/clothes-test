<script setup lang="ts">
import { ref } from 'vue'
import { useClothesStore } from '../store/clothes'
import CItem from './CItem.vue'

import type { ClothesItemType } from '../types'

const store = useClothesStore()

const selectedItem = ref<ClothesItemType>()

function selectItem(item: ClothesItemType) {
  selectedItem.value = item
}
</script>

<template>
  <div>
    <CItem :item="selectedItem" />
    <div class="border-white border-2 p-2 rounded-md grid grid-cols-4 gap-2 w-full">
      <CItem
        v-for="item of store.availibleClothes"
        :key="item.id"
        :item="item"
        @click="selectItem(item)"
      />
    </div>
  </div>
</template>
