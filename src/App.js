import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';
import {useState} from 'react';

function App() {
  const[showAddedTask, setShowAddedTask] = useState(false)
  const[tasks, setTasks] = useState([

    {
      "id": 1,
      "text": "Sleep, Drive, Eat , Code, Dream, Repeat",
      "day": "Everyday 4am-11pm",
      "reminder": true,
    },

    {
      "id": 2,
      "text": "Sleep, Drive, Eat , Code, Dream, Repeat",
      "day": "Everyday 4am-11pm",
      "reminder": true,
    },
    {
      "id": 3,
      "text": "Sleep, Drive, Eat , Code, Dream, Repeat",
      "day": "Everyday 4am-11pm",
      "reminder": true,
    },

    {
      "text": "Sleep, Drive, Eat , Code, Dream, Repeat",
      "day": "Everyday 4am-11pm",
      "reminder": true,
    },

  ]);

  //Add Task.

  const addTask = (task) => {
 const id = Math.floor(Math.random() * 100 + 1)
 const newTask = {id, ...task }
 setTasks([...tasks, newTask])
  }


  //delete task.

  const deleteTask = (id) =>  {
   setTasks(tasks.filter((task) => task.id !== id))
 };

 // Toggle Reminder

 const toggleReminder = (id) => {
 setTasks(
  tasks.map((task) =>
  task.id === id ? {
    ...task, reminder: !task.reminder} : task
  ))
 }


 return (

    <div className="container">
     <Header onAdd={()=> setShowAddedTask(!showAddedTask)} showAddedTask={showAddedTask}/>
    {showAddedTask &&  <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}
     onToggle={toggleReminder}/>) : ('No Tasks to show')}

    </div>
  );
}

export default App;
