<template>
  <Step1 v-if="formState.currentStep === 1" :pets="formState.availablePets" />
  <Step2 v-if="formState.currentStep === 2" />
  <Step3 v-if="formState.currentStep === 3" />

  <button v-if="formState.currentStep > 1" @click="goToPreviousStep">Prev</button>
  <button v-if="formState.currentStep < totalSteps" @click="goToNextStep">Next</button>
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
      currentStep: 1,
      availablePets: computed(() => userStore.getPetsList),
      chosedPet: null,
      chosedConditions: []
    })

    const setPet = (pet: Pet) => {
      formState.chosedPet = pet
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

    return { formState, goToNextStep, goToPreviousStep, totalSteps, setPet }
  },
  components: {
    Step1,
    Step2,
    Step3
  }
})
</script>
