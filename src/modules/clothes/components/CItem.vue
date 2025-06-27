<script setup lang="ts">
import type { ClothesItemType } from '../types'

const { item } = defineProps<{
  item?: ClothesItemType
}>()
</script>

<template>
  <div
    class="p-2.5 bg-red-500 rounded-lg w-full hover:outline-amber-100 hover:scale-110 duration-300 cursor-pointer"
  >
    {{ item?.name }}
  </div>
</template>
