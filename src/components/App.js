import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });




function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        tasks={tasks} 
        setTasks={setTasks} 
        categories={categories} 
        setCategories={setCategories} 
      />
      <NewTaskForm 
        categories={categories} 
        tasks={tasks} 
        setTasks={setTasks} 
      />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
