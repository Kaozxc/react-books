import '../styles/App.scss';
import StatusLine from "./StatusLine";
import React,{useState,useEffect} from 'react';

function App() {
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    console.log("using effect")
  },[]);

  function addEmptyTask(status) {
  ///
  }

  function addTask(taskToAdd) {
    ///
  }

  function deleteTask(taskID) {
    ///
  }

  function moveTask(id, newStatus) {
    ///
  }

  function saveTasksToLocalStorage(tasks) {

  }

  function loadTasksFromLocalStorage() {

  }



  return (
    <div className="App">
      <h1> Task Management</h1>
    <main>
      <section> 
      <StatusLine
      task={tasks}
      addEmptyTask={addEmptyTask}
      addTask={addTask}
      deleteTask={deleteTask}
      moveTask={moveTask}
      status="Backlog"
      />
      <StatusLine
      task={tasks}
      addEmptyTask={addEmptyTask}
      addTask={addTask}
      deleteTask={deleteTask}
      moveTask={moveTask}
      status="Backlog"
      />
      <StatusLine
      task={tasks}
      addEmptyTask={addEmptyTask}
      addTask={addTask}
      deleteTask={deleteTask}
      moveTask={moveTask}
      status="Backlog"
      />
      </section>
    </main>
    </div>
    );
}
export default App;
