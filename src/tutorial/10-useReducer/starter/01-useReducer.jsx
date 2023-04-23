import { data } from "../../../data";
import React from "react";
import { reducer } from "./reducer";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";

const defaultState = {
  people: data
}

const ReducerBasics = () => {
  const [ state, dispatch ] = React.useReducer(reducer, defaultState);
  console.log(state)

  const deleteSingleElement = (id) => {
    dispatch({type: REMOVE_ITEM, payload: {id}})
  }

  const resetList = () => {
    dispatch({ type: RESET_LIST})
  }

  const clearList = () => {
    dispatch({type: CLEAR_LIST});
  }
  return (
    <>{state.people.map((elt) => {
      return<div key={elt.id}>
        <h4>{elt.name}</h4>
        <button onClick={() => deleteSingleElement(elt.id)} className="btn">remove</button>
      </div>
    })} 
    <hr/>
    {
     state.people.length === 0 ? 
      <button onClick={resetList} className="btn"> reset </button>
      : 
      <button onClick={clearList} className="btn">clear List</button>
    }
    </>
  )
};

export default ReducerBasics;
