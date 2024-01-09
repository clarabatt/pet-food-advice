const API_BASE_URL = 'https://pet-food-advice.azurewebsites.net/api/'
const API_KEY = import.meta.env.VITE_API_CODE

interface RecommendationPayload {
  breed: string
  age: number
  weight: number
  conditions: string[]
}

interface RecommendationResponse {
  name: string
  brand: string
  price: number
  calories: number
}

export const getDogFoodRecommendations = async (payload: RecommendationPayload) => {
  const route = API_BASE_URL + 'recommendation/dogs?code=' + API_KEY
  try {
    const response = await fetch(route, {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(payload)
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const result = (await response.json()) as RecommendationResponse[]
    console.log('Success:', result)
    return result
  } catch (error) {
    console.log('Error: ' + error)
    throw error
  }
}
