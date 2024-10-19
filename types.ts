export interface Task {
  id: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  completed: boolean
}

export type SortOption = 'priority' | 'title'