import { useEffect, useState } from "react";

const useMyState = function(initialValue) {
    const [count, setCount] = useState(initialValue);

    const newSetCount = (data) => {
        setCount(() => Number(data));
    }

    return [count, newSetCount];
}

export const Counter = () => {
    const [count, setCount] = useMyState(0);

    const handleDecrease = (e) => {
        setCount(count - 1);
    }

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleCountChange = (e) => {
        const newVal = Number(e.target.value);
        setCount(isNaN(newVal) || !newVal ? '' : newVal);
    }
    return (
        <div>
            <h1>Counter! - {count}</h1>
            <div>
                <button onClick={handleDecrease}>-</button>
                <input type="number" value={count} onChange={handleCountChange}/>
                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}


export default Counter;