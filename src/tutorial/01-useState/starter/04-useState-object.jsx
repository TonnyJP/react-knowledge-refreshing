import React from 'react';

const UseStateObject = () => {
  
/* 
****** This is functionaly correct but it is a bad approch caus to many state************
  const [name, setName] = React.useState('Tonny');
  const [age, setAge] = React.useState(29);
  const [hobby, setHobby] = React.useState('read books');

  const nextUser = () => {
    setAge(35);
    setName("Junior");
    setHobby("Sport and Fittness")
  } */

  /*
  **** good approch ******
  set all properties of an object as a single objet
  */
  const [person, setPerson ] = React.useState({name: "Tonny", age:33, hobby: "drawing"})
  const nextPerson = () => {
    setPerson({name: "Junior", age: 39, hobby: "Meditation"})
  }
  return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>Enjoys: {person.hobby}</h3>
  <button className='btn' onClick={nextPerson}>next User</button>
  </>;
};

export default UseStateObject;
