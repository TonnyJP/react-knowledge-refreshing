const url = 'https://api.github.com/users';
import React from "react";

const FetchData = () => {
  const [ allUsers, setAllUsers ] = React.useState([])

  React.useEffect(() => {
   try{
    const fetchUsersData = async() => {
     const response = await fetch(url);
     const users = await response.json()
     setAllUsers(users)
    }
    fetchUsersData();
   }catch (e) {
    console.log(e.message)
   }
  },[])

  return (<section>
    <h3>Github users</h3>

    <ul className="users">
    {allUsers.map((user) => {
    const {id, login, avatar_url:avatar, html_url:htmlUrl} = user;
    return <li key={id}>
      <img src={avatar} alt={login} />
      <div>
        <h5>{login}</h5>
        <a href={htmlUrl}>profile</a>
      </div>
    </li>
  })}
    </ul>
  </section>)

};
export default FetchData;
