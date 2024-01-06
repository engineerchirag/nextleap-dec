import { useCallback, useMemo, useState } from "react"

const TodoApp = () => {
    const [todos, updateTodos] = useState([
        { title: "Item 1", completed: false},
        { title: "Item 2", completed: true}
    ]);
    return  (
        <div className="todo-wrapper">
            <TodoForm updateTodos={updateTodos} todos={todos}/>
            <TodoList updateTodos={updateTodos} todos={todos}/>
        </div>
    )
}

const TodoForm = ({ updateTodos, todos }) => {
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

const TodoList = ({todos, updateTodos}) => {
    const [readOnly, updateReadOnly] = useState(false);
    console.log('Render');
    const completedTodoCount = useMemo(() => {
        console.log("Todo Count Recomputation");
        return todos.filter(todo => todo.completed).length;
    }, [todos]);

    const handleTodoCompletion = (e) => {
        const currentIdx = Number(e.target.dataset.index);
        const updatedTodo = { ...todos[currentIdx], completed: e.target.checked };
        const updatedTodos = [...todos];
        updatedTodos.splice(currentIdx, 1, updatedTodo);
        updateTodos(updatedTodos);
    }
    return (
        <div className="todo-list">
            <div><input type="checkbox" value={readOnly} onChange={(e) => updateReadOnly(e.target.checked)}/>Read Only</div>
            <div>Progress( {completedTodoCount} / {todos.length})</div>
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

export default TodoApp;
