import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // state
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [taskList, setTaskList] = useState(TASKS); 

  // handle to delete a task
  function handleDeleteTask(textToRemove) { 
    const updatedTasks = taskList.filter((task) => task.text !== textToRemove);
    setTaskList(updatedTasks);
  }

  // handle to add a task
  function handleAddTask(newTask) {
    setTaskList([...taskList, newTask]);
  }

  // filter based on category
  const filteredTasks = selectedCategory === "All" 
    ? taskList
    : taskList.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>

     
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleAddTask} 
      />

      
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;
