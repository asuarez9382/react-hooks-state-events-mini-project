import React, { useState } from "react";

function NewTaskForm({ categories, tasks, setTasks }) {

  const [details, setDetails] = useState("")
  const [formCategory, setFormCategory] = useState("")

  function onTaskFormSubmit(e) {
    e.preventDefault()
    setTasks([...tasks, {text: details, category: formCategory,}])
  }

  function handleDetailChange(e) {
    setDetails(e.target.value)
    console.log(details)
  }

  function handleCategoryChange(e) {
    setFormCategory(e.target.value)
    console.log(formCategory)
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailChange} />
      </label>
      <label>
        Category
        <select name="category" value={formCategory} onChange={handleCategoryChange}>
          {
            categories.map(category => (
              <option>{category == "All" ? "" : category}</option>
            ))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
