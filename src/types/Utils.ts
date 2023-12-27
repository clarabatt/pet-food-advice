import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

export default interface Link {
  name: string
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>
  route: string
  disabled: boolean
}
