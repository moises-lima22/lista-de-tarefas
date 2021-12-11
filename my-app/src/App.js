import React, { useState } from 'react';
import './App.css';
import './index.css';

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
      <div className='container'></div>
    </>
  );
};

export default App;