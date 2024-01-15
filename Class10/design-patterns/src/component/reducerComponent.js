import { useReducer, useState } from "react"


const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT' : {
            return { count: state.count < 10 ? state.count +  1 : state.count}
        }
        case 'DECREMENT': {
            return { count: state.count -  1 }
        }
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
    }
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            {state.count}
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

const ReducerPattern = () => {
    return <Counter />
}

export default ReducerPattern;