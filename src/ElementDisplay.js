export function ElementDisplay({ dispatch, handleSubmit, setNewElement, newElement, elementList }) {
    return <div>
        <button
            onClick={() => dispatch({
                // type determines what happens, based on conditions in the reducer
                type: 'ADD_ELEMENT',
                // payload is the thing you want to send to a reducer to add to an array/object
                payload: '🔥'
            })}>
            <h1>Add Element ⚛️</h1>
        </button>

        <form style={{ marginTop: '20px' }} onSubmit={handleSubmit}>
            <input type='text'
                placeholder='Element Name'
                onChange={(event) => setNewElement(event.target.value)}
                value={newElement}>
            </input>
            <button type='submit'>
                Add!
            </button>
        </form>



        <ul>
            {elementList.map((element, index) => {
                return <li key={index}>
                    {element}
                </li>;
            })}
        </ul>

        <h2>{elementList}</h2>
    </div>;
}
