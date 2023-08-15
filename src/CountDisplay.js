export function CountDisplay({ dispatch }) {
    return <div>
        <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase Count</button>
        <button onClick={() => dispatch({ type: 'DECREASE' })}>Decrease Count</button>
    </div>;
}