import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
<<<<<<< HEAD
          onClick={() => onDelete(task.id)} />
=======
          onClick={() => onDelete(task.id)}
        />
>>>>>>> 3460b178a9fc47806b101d8b8670bb9c72e90ef6
      </h3>
      <p>{task.day}</p>
      
    </div>
  )
}

export default Task
