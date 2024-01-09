const API_BASE_URL = 'https://pet-food-advice.azurewebsites.net/api/'
const API_KEY = import.meta.env.VITE_API_CODE

interface RecommendationPayload {
  breed: string
  age: number
  animalWeight: number
  conditions: string[]
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

    const text = await response.text()

    const result = JSON.parse(text.replace(/NaN/g, '"NaN"'), (key, value) =>
      value === 'NaN' ? null : value
    )

    return result
  } catch (error) {
    console.log(error)
    throw error
  }
}
