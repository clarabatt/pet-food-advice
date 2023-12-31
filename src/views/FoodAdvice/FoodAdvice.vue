<template>
  <Step1 v-if="formState.currentStep === 1" :pets="formState.availablePets" :setPet="setPet" />
  <Step2
    v-if="formState.currentStep === 2"
    :petName="formState.chosedPet.name"
    :goToNextStep="goToNextStep"
    :setConditions="setConditions"
  />
  <Step3 v-if="formState.currentStep === 3" />
  <!-- 
  <button v-if="formState.currentStep > 1" @click="goToPreviousStep">Prev</button>
  <button v-if="formState.currentStep < totalSteps" @click="goToNextStep">Next</button> -->
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { Pet } from '@/types'
import { useUserStore } from '@/stores/userStore'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'

export default defineComponent({
  name: 'FoodAdviceView',
  setup() {
    const userStore = useUserStore()
    const totalSteps = ref<Number>(3)

    const formState = reactive({
      currentStep: 2,
      availablePets: computed(() => userStore.getPetsList),
      chosedPet: {
        uuid: '3eeacb5b-c0fe-4113-abba-26984c471298',
        name: 'Lola',
        species: 'DOG',
        breed: 'Potcake',
        color: 'BLACK',
        color_2: null,
        gender: 'FEMALE',
        spayed_neutered: true,
        has_photo: true,
        age: 9,
        weight: {
          value: 27.0,
          is_metric: 1
        },
        is_removed: false
      },
      chosedConditions: []
    })

    const setPet = (pet: Pet) => {
      formState.chosedPet = pet
      goToNextStep()
    }

    const setConditions = (list: String[]) => {
      formState.chosedConditions = list
    }

    const goToNextStep = () => {
      if (formState.currentStep < totalSteps.value) {
        formState.currentStep++
      }
    }

    const goToPreviousStep = () => {
      if (formState.currentStep > 1) {
        formState.currentStep--
      }
    }

    return { formState, goToNextStep, goToPreviousStep, totalSteps, setPet, setConditions }
  },
  components: {
    Step1,
    Step2,
    Step3
  }
})
</script>
