import { useState } from 'react'
import { Task } from '../types'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from "./ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Checkbox } from "./ui/checkbox"

interface TaskItemProps {
  task: Task
  onEditTask: (task: Task) => void
  onDeleteTask: (id: string) => void
  onToggleComplete: (id: string) => void
}

export default function TaskItem({ task, onEditTask, onDeleteTask, onToggleComplete }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState<Task>(task)

  const handleEdit = () => {
    onEditTask(editedTask)
    setIsEditing(false)
  }

  const priorityColors: Record<Task['priority'], string> = {
    high: 'bg-red-300',
    medium: 'bg-yellow-300',
    low: 'bg-green-300',
  }

  return (
    <motion.li 
      className={`p-4 rounded-lg ${priorityColors[task.priority]} ${task.completed ? 'opacity-50' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {isEditing ? (
        <div className="space-y-2">
          <Input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
            className="w-full"
          />
          <Textarea
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            className="w-full"
          />
          <Select 
            onValueChange={(value) => setEditedTask({ ...editedTask, priority: value as Task['priority'] })}
            defaultValue={editedTask.priority}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex justify-end space-x-2">
            <Button onClick={handleEdit}>Save</Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">{task.title}</h3>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => onToggleComplete(task.id)}
              />
              <label
                htmlFor={`task-${task.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {task.completed ? 'Completed' : 'Pending'}
              </label>
            </div>
          </div>
          <p className="mt-2">{task.description}</p>
          <p className="text-sm mt-2">Priority: {task.priority}</p>
          <div className="mt-4 space-x-2">
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button variant="destructive" onClick={() => onDeleteTask(task.id)}>Delete</Button>
          </div>
        </div>
      )}
    </motion.li>
  )
}