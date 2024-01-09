<template>
  <div v-for="food in foodList" :key="food._id">
    {{ food.name }}
    {{ food.price }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRecommendationStore } from '@/stores/recommendationStore'
import type { RecommendationResponse } from '@/services/recommendationApi'

export default defineComponent({
  name: 'Step3View',
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
