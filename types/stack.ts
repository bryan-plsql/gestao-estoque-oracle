export interface Stack {
  id: string
  name: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'tools'
  icon: string
  color?: 'purple' | 'cyan' | 'blue' | 'green'
}

export type StackCategory = Stack['category']
