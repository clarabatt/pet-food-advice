// recommendationStore.js
import { defineStore } from 'pinia'
import { Pet } from '@/types'

export const useRecommendationStore = defineStore('recommendationStore', {
  // State
  state: () => ({
    selectedPet: null as Pet | null,
    petConditions: [] as String[],
    recommendations: [] as Object[]
  }),

  actions: {
    selectPet(pet: Pet) {
      this.selectedPet = pet
    },
    addCondition(condition: String) {
      if (!this.petConditions.includes(condition)) {
        this.petConditions.push(condition)
      }
    },
    removeCondition(condition: String) {
      const index = this.petConditions.indexOf(condition)
      if (index > -1) {
        this.petConditions.splice(index, 1)
      }
    },
    async getFoodRecommendation() {
      
    }
  },

  getters: {
    hasSelectedPet: (state) => state.selectedPet !== null
  }
})
