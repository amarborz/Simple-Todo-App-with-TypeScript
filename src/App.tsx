import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  
  return (
    <TodosContextProvider>
      <NewTodo />
      <h1 style={{textAlign: 'center'}} >Tasks:</h1>
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
