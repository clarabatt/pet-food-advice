<template>
  <h1>Who is the food for?</h1>
  <div class="pets">
    <PickingPet v-for="pet in pets" :key="pet.id" :name="pet.name" :species="pet.species" />
    <AddPet />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Pet } from '@/types'
import PickingPet from '@/components/PickingPet.vue'
import AddPet from '@/components/AddPet.vue'

export default defineComponent({
  name: 'Step1View',
  props: {
    pets: Array as PropType<Pet[]>
  },
  components: {
    PickingPet,
    AddPet
  }
})
</script>

<style lang="scss">
h1 {
  text-align: center;
  margin-top: 6rem;
}
.pets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>
