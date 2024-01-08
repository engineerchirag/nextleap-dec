import { useCallback, useMemo, useState } from "react"

const Example2 = () => {
    const [newTodo, setNewTodo] = useState("");
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
        updateTodos([{title: newTodo, completed: false, id: Math.random()}, ...todos]);
    };

    const [todos, updateTodos] = useState([
        { title: "Item 1", completed: false, id: 1},
        { title: "Item 2", completed: true, id: 2},
        { title: "Item 3", completed: true, id: 3},
        { title: "Item 4", completed: true, id: 4},
        { title: "Item 5", completed: true, id: 5},
        { title: "Item 6", completed: true, id: 6},
        { title: "Item 7", completed: true, id: 7},
        { title: "Item 8", completed: true, id: 8},
        { title: "Item 9", completed: true, id: 9},
        { title: "Item 10", completed: true, id: 10},
        { title: "Item 11", completed: true, id: 11},
        { title: "Item 12", completed: true, id: 12}, 
    ]);
    return  (
        <div className="todo-wrapper">
            <div className="todo-form">
                <input placeholder="Add todo..." onChange={handleChange} />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {
                todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default Example2;
