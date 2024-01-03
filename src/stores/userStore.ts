import { defineStore } from 'pinia'
import type { User } from '@/types/User'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    getPetsList: (state) => (state.user ? state.user.pets : []),
    getUser: (state) => state.user
  },
  actions: {
    async fetchUser() {
      try {
        const response = await new Promise<User>((resolve) => {
          setTimeout(() => {
            resolve({
              id: '8ba169f5-c216-4d84-ada5-fa234e91969d',
              first_name: 'Clara',
              last_name: 'Battesini',
              full_name: 'Clara Battesini',
              email: 'clarabattesini@gmail.com',
              pets: [
                {
                  id: '3eeacb5b-c0fe-4113-abba-26984c471298',
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
                }
              ]
            })
          }, 1000)
        })
        this.user = response
      } catch (e) {
        console.error('Failed to fetch user', e)
      }
    }
  }
})
