import Counter from './components/Counter';
import { useState } from 'react';
import LoginForm from './components/Form';
import TodoApp from './components/TodoApp';

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
      <TodoApp />
    </div>
  );
}

export default App;
