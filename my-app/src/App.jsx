import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

import "./App.css";
import "./index.css";
import "./components/Tasks";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  // let message = "Mariass Alice"
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar React",
      completed: false,
    },
    {
      id: "2",
      title: "Estudar Git Flow",
      completed: true,
    },
    {
      id: "2",
      title: "Estudar Git Flow",
      completed: true,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      { title: taskTitle, id: uuidv4(), completed: true },
    ];

    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;
