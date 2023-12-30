<template>
  <h1>Who is the food for?</h1>
  <p v-for="pet in pets" :key="pet.id">{{ pet.name }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Pet } from '@/types'

export default defineComponent({
  name: 'Step1View',
  props: {
    pets: Array as PropType<Pet[]>
  }
})
</script>
