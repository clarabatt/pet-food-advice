<template>
  <Step1 v-if="state.currentStep === 1" :pets="availablePets" :setPet="setPet" />
  <Step2 v-if="state.currentStep === 2" :petName="selectedPet.name" />
  <Step3 v-if="state.currentStep === 3" />
  <!-- 
  <button v-if="state.currentStep > 1" @click="goToPreviousStep">Prev</button>
  <button v-if="state.currentStep < totalSteps" @click="goToNextStep">Next</button> -->
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from 'vue'
import { Pet } from '@/types'
import { useUserStore } from '@/stores/userStore'
import { useRecommendationStore } from '@/stores/recommendationStore'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'

export default defineComponent({
  name: 'FoodAdviceView',
  setup() {
    const recommendationStore = useRecommendationStore()
    const userStore = useUserStore()

    const totalSteps = ref<Number>(3)
    const state = reactive({
      currentStep: 2
    })

    const availablePets = computed(() => userStore.getPetsList)
    const selectedPet = computed(() => recommendationStore.selectedPet)

    const setPet = (pet: Pet) => {
      recommendationStore.setPet(pet)
      goToNextStep()
    }

    const setConditions = (list: String[]) => {
      chosedConditions = list
    }

    const goToNextStep = () => {
      if (currentStep < totalSteps.value) {
        currentStep++
      }
    }

    const goToPreviousStep = () => {
      if (currentStep > 1) {
        currentStep--
      }
    }

    return {
      availablePets,
      selectedPet,
      state,
      goToNextStep,
      goToPreviousStep,
      totalSteps,
      setPet,
      setConditions
    }
  },
  components: {
    Step1,
    Step2,
    Step3
  }
})
</script>
