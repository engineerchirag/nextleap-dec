import { createContext, useState } from "react";


export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, updateTodos] = useState([
        { title: "Item 1", completed: false},
        { title: "Item 2", completed: true}
    ]);
    return (
        <TodoContext.Provider value={{
            todos,
            updateTodos
        }}>
            { children }
        </TodoContext.Provider>
    )
}