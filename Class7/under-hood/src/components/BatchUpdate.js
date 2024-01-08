import { useEffect, useState } from "react";

export const BatchUpdate = ({ color }) => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        // Async behaviour
        // console.log('A', count);
        // setCount(count + 1);
        // console.log('B', count);


        // Batching
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount((preVal) => preVal + 1);
        setCount((preVal) => preVal + 1);
        setCount((preVal) => preVal + 1);
        setCount((preVal) => preVal + 1);
        setCount((preVal) => preVal + 1);
    }
    return (
        <div className="counter" style={{
            backgroundColor: color
        }}>
            <h1>Counter!</h1>
            <div>
                <button onClick={handleIncrease}>+</button> {count}
            </div>
        </div>
    )
}


export default BatchUpdate;
