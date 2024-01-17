import React from "react";
import Task from "./Task.js"

function TaskList( { tasks, setTasks } ) {

  function handleDelete(taskId) {
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    setTasks(updatedTasks);
  }

  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task 
          task={task} 
          key={task.id} 
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
