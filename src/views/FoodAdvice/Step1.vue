<template>
  <h1>Who is the food for?</h1>
  <PickingPet v-for="pet in pets" :key="pet.id" :name="pet.name" :species="pet.species" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Pet } from '@/types'
import PickingPet from '@/components/PickingPet.vue'

export default defineComponent({
  name: 'Step1View',
  props: {
    pets: Array as PropType<Pet[]>
  },
  components: {
    PickingPet
  }
})
</script>

<style lang="scss">
h1 {
  text-align: center;
  margin-top: 6rem;
}
</style>
