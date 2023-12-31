import React from 'react'
import {MdDeleteSweep} from 'react-icons/md'

const TaskList = ({task, deleteTask, toggleCheck}) => {
  return (
    <li className='items'>
        <div className="items-text">
            <input type="checkbox"
            checked={task.checked}
            onChange={() => toggleCheck(task.taskName) }
             />
            <p className={task.checked ? 'isChecked': ''}>
                {task.taskName}
                </p>
        </div>
        <div className='items'>
       
        <MdDeleteSweep 
        className="delete-icon"
        onClick={() => deleteTask(task.taskName)}
        />
        </div>
       
    </li>
    
  )
}

export default TaskList
