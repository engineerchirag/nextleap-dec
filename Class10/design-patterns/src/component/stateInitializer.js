function StateinitiliazerComponent() {
    return (
        <Counter initialValue={2} />
    )
}

function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);
    const incrementCount = () => {
        setCount((oldState) => oldState +  1);
    }
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={incrementCount}>+</button>
        </div>
    );
}

export default StateinitiliazerComponent;