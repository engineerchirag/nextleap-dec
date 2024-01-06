import { useCallback, useContext, useMemo, useState } from "react"
import { TodoContext } from "./TodoContext";

const Todo = () => {
    return  (
        <div className="todo-wrapper">
            <TodoForm />
            <TodoList />
        </div>
    )
}

const TodoForm = () => {
    const { todos, updateTodos } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState("");
    const handleChange = useCallback((e) => {
        setNewTodo(e.target.value);
    }, []);

    const handleAddTodo = useCallback(() => {
        updateTodos([...todos, {title: newTodo, completed: false}]);
    }, [todos, newTodo]);

    return (
        <div className="todo-form">
            <input placeholder="Add todo..." onChange={handleChange} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
}

const Progress = () => {
    const { todos } = useContext(TodoContext);
    const completedTodoCount = useMemo(() => {
        console.log("Todo Count Recomputation");
        return todos.filter(todo => todo.completed).length;
    }, [todos]);
    return (
        <div>Progress( {completedTodoCount} / {todos.length})</div>
    )
}

const TodoList = () => {
    const { todos, updateTodos } = useContext(TodoContext);
    const [readOnly, updateReadOnly] = useState(false);
    console.log('Render');

    const handleTodoCompletion = (e) => {
        const currentIdx = Number(e.target.dataset.index);
        const updatedTodo = { ...todos[currentIdx], completed: e.target.checked };
        const updatedTodos = [...todos];
        updatedTodos.splice(currentIdx, 1, updatedTodo);
        updateTodos(updatedTodos);
    }
    return (
        <div className="todo-list">
            <Progress />
            <div><input type="checkbox" value={readOnly} onChange={(e) => updateReadOnly(e.target.checked)}/>Read Only</div>
            { todos.length === 0 ? (<span>Please add todo...</span>) : ''}
            {
              todos.map((todo, idx) => (
                <div className="todo-item">
                    { !readOnly ? <input type="checkbox" checked={todo.completed} data-index={idx} onChange={handleTodoCompletion}/> : "" }
                    <span className={todo.completed ? 'strike' : ''}>{todo.title}</span>
                </div>
              ))
            }
        </div>
    )
}

export default Todo;
