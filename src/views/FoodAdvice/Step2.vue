<template>
  <div class="conditions-step">
    <h1>Does {{ petName }} have any of those conditions?</h1>
    <p>Choose all that apply:</p>
    <div class="conditions">
      <ConditionToken v-for="condition in conditions" :key="condition" :name="condition" />
    </div>
    <ButtonComponent @click="goToNextStep">Next</ButtonComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import ConditionToken from '@/components/ConditionToken.vue'
import ButtonComponent from '@/components/Button.vue'

export default defineComponent({
  name: 'Step2View',
  props: {
    petName: {
      type: String,
      required: true
    },
    setConditions: {
      type: Function as PropType<(l: String[]) => void>,
      required: true
    },
    goToNextStep: {
      type: Function as PropType<() => void>,
      required: true
    }
  },
  setup() {
    const conditions = ref<String[]>([
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
    return { conditions }
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
  margin-top: 6rem;
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
</style>
