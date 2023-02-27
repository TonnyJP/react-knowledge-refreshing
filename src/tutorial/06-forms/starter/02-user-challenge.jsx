import React from "react";
import { data } from "../../../data"

const UserChallenge = () => {

  const [ name, setName ] = React.useState("");
  const [persons, setPersons] = React.useState(data);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(name){
      const newPerson = {id: (persons.length + 1), name: name}
      setPersons((prev) => {
        prev = [...prev, newPerson]
        return prev
      })
      setName("")
    }
  }

  const removeUser = (id) => {
    const newList = persons.filter((pers) => pers.id !==id);
    setPersons(newList)
  }
  return (
    <div>
      <form className='form' onSubmit={onSubmitHandler}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h4>Users</h4>
      {persons.map((pers) => {
        console.log(pers)
        return <div key={pers.id} className="add-user">
          <h3 key={pers.id}> {pers.name}</h3> 
          <button className="btn" onClick={() => removeUser(pers.id)}>remove</button>
        </div>
      })}
    </div>
  );
};
export default UserChallenge;
