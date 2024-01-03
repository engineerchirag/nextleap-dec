import { useState } from "react";

export const Counter = ({ name, color }) => {
    const [count, setCount] = useState(0);

    const handleDecrease = (e) => {
        setCount(count - 1);
        // console.log(count, '-');
    }

    const handleIncrease = () => {
        // console.log(count, '+');
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{name}'s Counter! {color}</h1>
            <div>
                <button onClick={handleDecrease}>-</button>
                {count}
                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}
