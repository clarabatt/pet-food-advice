<template>
  <div class="conditions-step">
    <h1>Does {{ pet.name }} have any of those conditions?</h1>
    <p>Choose all that apply:</p>
    <div class="conditions">
      <ConditionToken
        v-for="condition in conditionsRef"
        :key="condition.toString()"
        :name="condition.toString()"
        :isActive="conditions.includes(condition)"
        @childEvent="toggleCondition"
      />
    </div>
    <ButtonComponent :handleClick="goToNextStep">Next</ButtonComponent>

    <div class="icons-credit">
      Icons made by
      <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import type { PetCondition } from '@/types/Pet'
import { useRecommendationStore } from '@/stores/recommendationStore'
import ConditionToken from '@/components/ConditionToken.vue'
import ButtonComponent from '@/components/Button.vue'

export default defineComponent({
  name: 'Step2View',
  props: {
    goToNextStep: {
      type: Function,
      required: true
    }
  },
  setup() {
    const recommendationStore = useRecommendationStore()
    const pet = computed(() => recommendationStore.selectedPet)
    const conditions = computed(() => recommendationStore.petConditions)

    const conditionsRef = ref<PetCondition[]>([
      'Allergies or Food Sensitivities',
      'Diabetes',
      'Digestive issues',
      'Dental issues',
      'Mobility concerns',
      'Overweight',
      'Urinary problems',
      'Heart Disease',
      'Skin/Coat problems'
    ])

    const toggleCondition = (condition: String) => {
      console.log('parent ', 'click')
      recommendationStore.toggleCondition(condition)
    }

    return { conditionsRef, pet, conditions, toggleCondition }
  },
  components: { ConditionToken, ButtonComponent }
})
</script>

<style lang="scss" scoped>
.conditions-step {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
}

h1 {
  text-align: center;
  width: 100%;
}

.conditions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  max-width: 66%;
}

.btn {
  margin-top: 2rem;
}

.icons-credit {
  margin-top: 4rem;
  font-size: 0.6rem;
}
</style>
