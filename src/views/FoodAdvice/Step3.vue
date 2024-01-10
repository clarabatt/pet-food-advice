<template>
  <div class="foodRecommendations">
    <h1>The recommended options for {{ petName ? petName : 'your pet' }} are:</h1>
    <PetFoodSubscription v-for="food in foodList" :key="food._id" :food="food" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRecommendationStore } from '@/stores/recommendationStore'
import type { RecommendationResponse } from '@/services/recommendationApi'
import PetFoodSubscription from '@/components/PetFoodSubscription.vue'

export default defineComponent({
  name: 'Step3View',
  props: {
    petName: {
      type: String,
      required: false
    }
  },
  components: { PetFoodSubscription },
  setup() {
    const recommendationStore = useRecommendationStore()

    const foodList = computed<RecommendationResponse[]>(
      () => recommendationStore.getRecommendations
    )

    return {
      recommendationStore,
      foodList
    }
  }
})
</script>

<style lang="scss" scoped>
.foodRecommendations {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}
</style>
