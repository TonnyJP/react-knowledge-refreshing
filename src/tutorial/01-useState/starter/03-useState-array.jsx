import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
  const [state, setState ] = React.useState(data);
  console.log(state)

  const deleteSingleElement = (id) => {
    const newArray = state.filter((elt) => elt.id !== id)
    setState(newArray);
  }

  const clearList = () => {
    setState([])
  }
  return (
    <>{state.map((elt) => {
      return<div key={elt.id}>
        <h4>{elt.name}</h4>
        <button onClick={() => deleteSingleElement(elt.id)} className="btn">remove</button>
      </div>
    })} 
    <hr/>
    <button onClick={clearList} className="btn">clear List</button>
    </>
  )
};

export default UseStateArray;
