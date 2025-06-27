<script setup lang="ts">
import { onMounted } from 'vue'
import { useClothesStore } from './store/clothes'
import CUsersItems from './components/CUsersItems.vue'
import CSelectebleItems from './components/CSelectebleItems.vue'

const store = useClothesStore()

onMounted(() => {
  store.fetchClothes()
})
</script>

<template>
  <div class="flex gap-2 items-end">
    <CSelectebleItems class="w-1/2" />
    <CUsersItems class="w-1/2" />
  </div>
</template>
