import React from 'react';
const UserChallenge = () => {
  const [ user, setUser ] = React.useState(null);

  const login =() => {
    setUser({
      name: "Tonny",
      age: 25,
      hobby: "Sport"
    })
  }

  const logout = () => {
    setUser(null)
  }
  return (<>
  {user? 
  (<div>
    <h4>
    Hello there, user {user.name}
    </h4>
    <button onClick={logout}className="btn" >logout</button>
  </div> )
  : 
  (<div>
    <h4>
      Please login
    </h4>
    <button onClick={login} className="btn">Login</button>
  </div>)
  }
  </>)
};

export default UserChallenge;
