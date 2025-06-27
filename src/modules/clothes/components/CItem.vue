<script setup lang="ts">
import type { ClothesItemType } from '../types'

const { item } = defineProps<{
  item?: ClothesItemType
}>()
</script>

<template>
  <div
    class="p-2.5 bg-stone-500 text-center rounded-lg w-full h-fit hover:outline-amber-100 hover:scale-110 duration-300 cursor-pointer"
  >
    {{ item?.name }}
  </div>
</template>
