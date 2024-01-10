<template>
  <div class="petFood">
    <img :src="food.picture" alt="food.name" />
    <div class="description">
      <h3 class="brand">{{ food.brand }}</h3>
      <h2 class="name">{{ food.name }}</h2>
      <p>Suggested daily dose:</p>
      <h3 class="dailyAmount">280g</h3>
      <h5 class="details">
        *Amount may vary based on animal's condition. Please consult Vetster's veterinarian.
      </h5>
    </div>
    <div class="subscription">
      <Price :price="food.price" />
      <p class="description">
        Delivered monthly at your place<br />
        + Healthy organic treat pack
      </p>
      <ButtonComponent> Sign up for {{ food.brand }} </ButtonComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type RecommendationResponse } from '@/services/recommendationApi'
import ButtonComponent from '@/components/Button.vue'
import Price from '@/components/Price.vue'

export default defineComponent({
  name: 'PetFoodSubscriptionComponent',
  props: {
    food: {
      type: Object as PropType<RecommendationResponse>,
      required: true
    }
  },
  components: { ButtonComponent, Price }
})
</script>

<style lang="scss" scoped>
.petFood {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 2rem 0;
  cursor: pointer;
  border-bottom: 1px solid #e5e5e5;
}

.petFood:last-child {
  border-bottom: none;
}

.petFood > img {
  max-width: 10rem;
}
.petFood > .description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
}

.petFood > .description > .brand {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.35rem 0;
}

.petFood > .description > .name {
  font-size: 1.15rem;
  margin: 0.5rem 0;
}

.petFood > .description > p {
  font-size: 0.75rem;
  margin-top: 0.75rem;
}

.petFood > .description > .dailyAmount {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

.petFood > .description > .details {
  font-size: 0.75rem;
  margin-top: 0.8rem;
}

.petFood > .subscription {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
}

.petFood > .subscription > .description {
  font-size: 0.75rem;
  padding: 0 1.5rem 1rem 1.5rem;
}
</style>
