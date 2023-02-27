import React from "react";
const initialUser = {
  name: '',
  email: '',
  password: ''
}
const MultipleInputs = () => {
  const [ user, setUser ] = React.useState(initialUser)

  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.name && user.email && user.password){
      console.log(user)
      setUser(initialUser)
    }else{
      alert("fill the needed Infos")
    }
  }
  return (
    <div>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name="name" onChange={(e) => handleChange(e) } value={user.name} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name="email" onChange={(e) => handleChange(e) } value={user.email}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' name="password" onChange={(e) => handleChange(e) } value={user.password} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
