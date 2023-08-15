export function TacoCatDisplay({ dispatch, tacoCatCount }) {
    return <div>
        <button onClick={() => dispatch({ type: 'TACOCAT_INCREASE' })}><h1>🌮🐈 ⬆️</h1></button>
        <h2>Current TacoCat Count: {tacoCatCount}</h2>
        <button onClick={() => dispatch({ type: 'TACOCAT_DECREASE' })}><h1>🌮🐈 ⬇️</h1></button>
    </div>;
}
