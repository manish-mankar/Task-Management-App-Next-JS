import { Task } from '../types'
import TaskItem from './TaskItem'
import { motion } from 'framer-motion'

interface TaskListProps {
  tasks: Task[]
  onEditTask: (task: Task) => void
  onDeleteTask: (id: string) => void
  onToggleComplete: (id: string) => void
}

export default function TaskList({ tasks, onEditTask, onDeleteTask, onToggleComplete }: TaskListProps) {
  return (
    <motion.ul 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </motion.ul>
  )
}