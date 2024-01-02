import type { Pet } from './Pet'

export interface User {
  uuid: String
  first_name: String
  last_name: String
  full_name: String
  email: String
  pets: Pet[]
}
