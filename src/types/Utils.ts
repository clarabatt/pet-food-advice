import { type DefineComponent } from 'vue'

export default interface Link {
  name: string
  icon: DefineComponent
  route: string
  disabled: boolean
}
