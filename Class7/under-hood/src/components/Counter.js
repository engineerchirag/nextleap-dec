import { useEffect, useState } from "react";

export const Counter = ({ color }) => {
    const [count, setCount] = useState(0);

    const handleDecrease = (e) => {
        setCount(count - 1);
    }

    const handleIncrease = () => {
        setCount(count + 1);
    }
    return (
        <div className="counter" style={{
            backgroundColor: color
        }}>
            <h1>Counter!</h1>
            <div>
                <button onClick={handleDecrease}>-</button>
                {count}
                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}


export default Counter;