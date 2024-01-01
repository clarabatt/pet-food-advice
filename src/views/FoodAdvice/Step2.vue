<template>
  <div class="conditions-step">
    <h1>Does {{ petName }} have any of those conditions?</h1>
    <p>Choose all that apply:</p>
    <div class="conditions">
      <ConditionToken
        v-for="condition in conditionsRef"
        :key="condition"
        :name="condition"
        @click="toggleCondition(condition)"
      />
    </div>
    <ButtonComponent :handleClick="goToNextStep">Next</ButtonComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRecommendationStore } from '@/stores/recommendationStore'
import ConditionToken from '@/components/ConditionToken.vue'
import ButtonComponent from '@/components/Button.vue'

export default defineComponent({
  name: 'Step2View',
  props: {
    petName: String
  },
  setup() {
    const recommendationStore = useRecommendationStore()
    const conditions = computed(() => recommendationStore.petConditions)

    const conditionsRef = ref<String[]>([
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
      if (conditions.value.includes(condition)) {
        recommendationStore.removeCondition(condition)
      } else {
        recommendationStore.addCondition(condition)
      }
    }

    const goToNextStep = () => recommendationStore.goToNextStep()

    return { conditionsRef, conditions, toggleCondition, goToNextStep }
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
</style>
