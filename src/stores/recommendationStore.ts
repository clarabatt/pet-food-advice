// recommendationStore.js
import { defineStore } from 'pinia'
import type { Pet } from '@/types'

export const useRecommendationStore = defineStore('recommendationStore', {
  state: () => ({
    selectedPet: {
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
    } as Pet | null,
    petConditions: [] as String[],
    recommendations: [] as Object[]
  }),

  actions: {
    selectPet(pet: Pet) {
      this.selectedPet = pet
    },
    addCondition(condition: String) {
      if (!this.petConditions.includes(condition)) {
        const newConditions = [...this.petConditions, condition]
        this.petConditions = newConditions
      }
    },
    removeCondition(condition: String) {
      const index = this.petConditions.indexOf(condition)
      if (index > -1) {
        this.petConditions.splice(index, 1)
      }
    },
    toggleCondition(condition: String) {
      if (this.petConditions.includes(condition)) {
        this.removeCondition(condition)
      } else {
        this.addCondition(condition)
      }
    }
  },

  getters: {
    hasSelectedPet: (state) => state.selectedPet !== null
  }
})
