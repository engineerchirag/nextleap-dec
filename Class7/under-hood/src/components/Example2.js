import { useCallback, useMemo, useState } from "react"

const Example2 = () => {
    const [newTodo, setNewTodo] = useState("");
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
        updateTodos([{title: newTodo, completed: false}, ...todos]);
    };

    const [todos, updateTodos] = useState([
        { title: "Item 1", completed: false},
        { title: "Item 2", completed: true},
        { title: "Item 3", completed: true},
        { title: "Item 4", completed: true},
        { title: "Item 5", completed: true},
        { title: "Item 6", completed: true},
        { title: "Item 7", completed: true},
        { title: "Item 8", completed: true},
        { title: "Item 9", completed: true},
        { title: "Item 10", completed: true},
        { title: "Item 11", completed: true},
        { title: "Item 12", completed: true}, 
    ]);
    return  (
        <div className="todo-wrapper">
            <div className="todo-form">
                <input placeholder="Add todo..." onChange={handleChange} />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <div>
                {
                todos.map((todo) => (
                    <div className="todo-item">
                        <span>{todo.title}</span>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Example2;
