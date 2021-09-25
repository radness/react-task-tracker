import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter())
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
