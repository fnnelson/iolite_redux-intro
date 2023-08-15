import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { CountDisplay } from './CountDisplay';
import { TacoCatDisplay } from './tacoCatDisplay';
import { ElementDisplay } from './ElementDisplay';

function App() {

  // LOCAL STATE STUFF  
  const [newElement, setNewElement] = useState('')

  // REDUX REDUCER STUFF
  const count = useSelector(store => store.count)
  const tacoCatCount = useSelector(store => store.tacoCatCount)
  const elementList = useSelector(store => store.elementList)
  // dispatch is like our walkie talkie
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("inside of handleSubmit()", newElement)
    dispatch({
      type: 'ADD_ELEMENT',
      payload: newElement
    })
  }

  return (
    <div className="App">
      {/* {CountDisplay(dispatch)} */}
      <CountDisplay dispatch={dispatch} />

      <h1>Count is: {count}</h1>
      <hr />


      <ElementDisplay 
      dispatch={dispatch} 
      handleSubmit={handleSubmit} 
      setNewElement={setNewElement} 
      newElement={newElement} 
      elementList={elementList} />


      <hr />
      <TacoCatDisplay dispatch={dispatch} tacoCatCount={tacoCatCount} />
    </div>
  );
}

export default App;

