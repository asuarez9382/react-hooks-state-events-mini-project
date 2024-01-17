import React, { useState } from "react";
import { TASKS, CATEGORIES } from "../data"



function CategoryFilter({ tasks, setTasks, categories, setCategories }) {

  const [selectedCategory, setSelectedCategory] = useState('All');
  
  
  


  function handleCategoryClick(category) {
    setSelectedCategory(category) 

    setTasks(tasks=> {
      
      if(category == "All"){
        setTasks(TASKS)
      }
      else{
        
        tasks = TASKS
        const updatedFilteredItems = category === 'All'
        ? tasks
        : tasks.filter(task => task.category === category);
        return updatedFilteredItems
      }
      
    })

    

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'selected' : ''}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
        
    </div>
  );
}

export default CategoryFilter;



