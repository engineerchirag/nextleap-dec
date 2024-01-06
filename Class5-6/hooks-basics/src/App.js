import Counter from './components/Counter';
import { useState } from 'react';
import LoginForm from './components/Form';
// import TodoApp from './components/TodoApp';
import ResizeWidth from './components/ResizeWidth';
import Todo from './components/TodoWithContext/Todo';
import { TodoProvider } from './components/TodoWithContext/TodoContext';

function App() {

  const [isCounterVisible, toggleCounterVisibility] = useState(false);
  const handleToggleCounter = () => {
    toggleCounterVisibility(!isCounterVisible);
  }
  return (
    <div className="App">
      {/* <LoginForm /> */}
      {/* <button onClick={handleToggleCounter}>Toggle Counter</button>
      { isCounterVisible ? <Counter /> : '' } */}
      {/* <TodoApp /> */}
      {/* <ResizeWidth /> */}
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
}

export default App;
