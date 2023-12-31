<template>
  <h1>Who is the food for?</h1>
  <div class="pets">
    <PetToken
      @click="setPet(pet)"
      v-for="pet in pets"
      :key="pet.id"
      :name="pet.name"
      :species="pet.species"
    />
    <AddPet />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Pet } from '@/types'
import PetToken from '@/components/PetToken.vue'
import AddPet from '@/components/AddPet.vue'

export default defineComponent({
  name: 'Step1View',
  props: {
    pets: {
      type: Array as PropType<Pet[]>,
      required: true
    },
    setPet: {
      type: Function as PropType<(pet: Pet) => void>,
      required: true
    }
  },
  components: {
    PetToken,
    AddPet
  }
})
</script>

<style lang="scss" scoped>
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
