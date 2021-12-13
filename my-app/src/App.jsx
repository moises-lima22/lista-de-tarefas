import React, { useState } from 'react';
import './App.css';
import './index.css';
import './components/Tasks'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Salve from './components/teste';

const App = () => {
  // let message = "Mariass Alice"
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar React',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar Git Flow',
      completed: true,
    },
  ]);

  return (
    <>
      <div className='container'>
        <AddTask/>
        <Tasks tasks={tasks}/>
      </div>
    </>
  );
};

export default App;