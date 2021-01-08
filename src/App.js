
import './App.css';

import Title from "./Components/Title"
import NewTodo from "./Components/NewTodo"
import List from "./Components/List"
import Footer from "./Components/Footer"
import Filter from "./Components/Filter"
import { useState } from "react"


function App() {
  const [todos, setTodos] = useState([
    { checked: true, name: "Learn JavaScript" },
    { checked: false, name: "Learn React" },
    { checked: false, name: "Have a life!" },
  ]);

  function handleChange(task) {
    setTodos([...todos, { completed: "", name: task }]);
  }

  function setTask(list) {
    setTodos([...list]);
  }
  function filterChange(param) {
    console.log("todos", todos)
    var list = todos;
    if (param === "All") {
      setTodos([...list]);
      return;
    }
    if (param === "Active")
      list = todos.filter(t => !t.checked);
    if (param === "Completed")
      list = todos.filter(t => t.checked);
    setTodos([...list]);
  }

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <Title title="todos" />
          <NewTodo placeholder="What needs to be done?" onChange={handleChange} />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <List todos={todos} onChange={(list) => setTask(list)} />
          <Filter todos={todos} onChange={(param) => filterChange(param)} />
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App