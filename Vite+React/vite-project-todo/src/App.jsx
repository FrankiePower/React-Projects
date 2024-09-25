import { useState } from "react";
function App() {
  const [todos, setTodos] = useState(["cook", "sleep", "code"]);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl border-b-4 border-black">Todo</h1>
      <ul>
        <li>{todos[0]}</li>
        <li>{todos[1]}</li>
        <li>{todos[2]}</li>
      </ul>
    </div>
  );
}

export default App;
