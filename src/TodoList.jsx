import {useState} from "react";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function AddTask() {
    if(newTask.trim() !== ""){
      setTasks(t=>[...t, newTask]);
      setNewTask("");
    }
  }
  function DeleteTask(index) {
    const updatedTasks = tasks.filter((_,i) => i!==index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]]= [updatedTasks[index-1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]]= [updatedTasks[index+1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return <>

  <div className="to-do-list">

    <h1>To-Do-List</h1>

    <div>
        <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a new task"/>
        <button className="add-button" onClick={() => AddTask()}>Add Task</button>
    </div>

    <ol>
        {tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=> DeleteTask(index)}>
                    Delete
                </button>

                <button className="move-button" onClick={()=> moveTaskUp(index)}>
                👆   
                </button>

                <button className="move-button" onClick={()=> moveTaskDown(index)}>
                👇
                </button>

            </li>
        )}
    </ol>

  </div>
  
  </>;
}

export default TodoList;
