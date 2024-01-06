import { useEffect, useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    // Component Did Mounted
    useEffect(() => {
        console.log('Mounted');
    }, []);

    // Component updated - change state/props
    useEffect(() => {
        console.log('Updated');
    })

    // Component updated - when count is changing
    useEffect(() => {
        console.log('Updated');
    }, [count]);

    // Unmounting
    useEffect(() => {
        return () => {
            console.log('Unmounted');
        }
    }, []);



    useEffect(() => {
        const ref = setInterval(() => {
            alert('Started');
        }, 10000);
        return () => {
            clearInterval(ref);
        }
    }, []);

    const handleDecrease = (e) => {
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