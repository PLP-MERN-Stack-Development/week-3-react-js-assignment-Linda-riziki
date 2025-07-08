import { useState } from "react";
import Task from "@/components/TaskManager";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/footer";

export default function App(){
  const [tasks, setTasks] = useState([
    { id: 1, title: "Going Shopping", completed: false },
    { id: 2, title: "Visiting the Spa", completed: false },
    { id: 3, title: "Doing Yoga", completed: false }
  ]);

   const [newTask, setNewTask] = useState(""); 
  const [filter, setFilter] = useState("all"); 

  const toggleTask = id => {
  setTasks(curr => curr.map (t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleAdd = () => {
    if (newTask.trim() === "") return;
    const newItem = {
      id: Date.now(),
      title: newTask,
      completed: false
    };
    setTasks((curr) => [newItem, ...curr]);
    setNewTask("");
  };

  const handleDelete = (id) => {
    setTasks((curr) => curr.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true; // all
  });

  return(
    <div className="min-h-screen bg-blue-300 p-6 container mx-auto flex flex-col">
      <Navbar />
      <h1 className="font-bold text-3xl mb-4 p-6">Task Dashboard</h1>

       {/* Add Task */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          className="px-4 py-2 w-full bg-green-100"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

       {/* Filter Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded ${
            filter === "all" ? "bg-purple-400" : "bg-purple-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className={`px-3 py-1 rounded ${
            filter === "active" ? "bg-purple-400" : "bg-purple-200"
          }`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded ${
            filter === "completed" ? "bg-purple-400" : "bg-purple-200"
          }`}
        >
          Completed
        </button>
      </div>

       {/* List Tasks */}
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onToggle={toggleTask}
          onDelete={handleDelete}
        />
      ))}

       <Footer />
    </div> 
  );
  
}



