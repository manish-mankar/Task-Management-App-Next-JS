import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import SearchBar from '../components/SearchBar'
import { Task } from '../types'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export const getServerSideProps: GetServerSideProps = async () => {
  const initialTasks: Task[] = [
    { id: '1', title: 'Complete project', description: 'Finish the task management app', priority: 'high', completed: false },
    { id: '2', title: 'Buy groceries', description: 'Get milk, eggs, and bread', priority: 'medium', completed: false },
    { id: '3', title: 'Go for a run', description: '30 minutes in the park', priority: 'low', completed: true },
  ]

  return {
    props: {
      initialTasks,
    },
  }
}


export default function Home({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'priority' | 'title'>('priority')

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (newTask: Omit<Task, 'id' | 'completed'>) => {
    const task: Task = {
      ...newTask,
      id: Date.now().toString(),
      completed: false,
    }
    setTasks([...tasks, task])
  }

  const editTask = (editedTask: Task) => {
    setTasks(tasks.map(task => task.id === editedTask.id ? editedTask : task))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const sortedAndFilteredTasks = tasks
    .filter(task => 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a.completed && !b.completed) return 1
      if (!a.completed && b.completed) return -1
      if (sortBy === 'priority') {
        const priorityOrder = { high: 0, medium: 1, low: 2 }
        return priorityOrder[a.priority] - priorityOrder[b.priority]
      } else {
        return a.title.localeCompare(b.title)
      }
    })

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Task Management App
      </motion.h1>
      <TaskForm onAddTask={addTask} />
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="mt-4 sm:mt-0">
          <Select onValueChange={(value) => setSortBy(value as 'priority' | 'title')}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="priority">Sort by : Priority</SelectItem>
              <SelectItem value="title">Sort by : Title</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <AnimatePresence>
        <TaskList
          tasks={sortedAndFilteredTasks}
          onEditTask={editTask}
          onDeleteTask={deleteTask}
          onToggleComplete={toggleComplete}
        />
      </AnimatePresence>
    </div>
  )
}
