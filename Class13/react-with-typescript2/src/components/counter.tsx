import { useEffect, useState } from "react";

type Title = { title: String };

export const Counter = ({ title }: Title) => {
    const [count, setCount] = useState<number>(0);

    const handleDecrease = (e: React.MouseEvent<HTMLElement>) => {
        setCount(count - 1);
    }

    const handleIncrease = () => {
        setCount(count + 1);
    }
    return (
        <div>
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