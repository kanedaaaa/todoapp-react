import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "something",
        day: "Today, Mars 8th",
        reminder: true,
    },
    {
        id: 2,
        text: "something else",
        day: "Tomorrow, Mars 9th",
        reminder: false,
    },
    {
        id: 3,
        text: "something something else",
        day: "Future",
        reminder: true,
    },
    ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task))

  };

  return ( 
    <div className="container">
      <Header /> 
      {tasks.length > 0 ? <Tasks  tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} 
      />
      : 'No Tasks'}
      
    </div>
  )
}

export default App;
