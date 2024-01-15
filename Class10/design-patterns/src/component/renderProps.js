import { useState } from "react"

const Counter = ({render}) => {
    const [count, setCount] = useState(0);
    const handleCounter = () => {
        setCount(count + 1);
    }
    return render(count, handleCounter);
}

const RenderPropsPattern = () => {
    return  (
        <>
            <Counter
                render={(count, handleCounter) => {
                    return (
                        <div>
                            Special Count: {count}
                            <button onClick={handleCounter}>+</button>
                        </div>
                    )
                }}
            />
            <Counter
                render={(count, handleCounter) => {
                    return (
                        <div>
                            <div>New line Count: {count}</div>
                            <button onClick={handleCounter}>+</button>
                        </div>
                    )
                }}
            />
        </>
    )
}

export default RenderPropsPattern;