import { REMOVE_ITEM, CLEAR_LIST, RESET_LIST } from "./actions";
import { data } from "../../../data";

export const reducer = (state, action) => {
    console.log("state in reducer", state)
    switch(action.type){
      case REMOVE_ITEM:
        const newArray = state.people.filter((elt) => elt.id !== action.payload.id)
        return {...state, people: newArray}
      case RESET_LIST:
        return { ...state, people: data}
      case CLEAR_LIST:
        return {...state, people: []}
      default:
        console.log("No action found")
        throw new Error(`No matching to ${action.type}`)
    }
  }