import React from "react";
import { useAppContext } from "./NavBar";

const UserContainer = () => {

    const {user, logout} = useAppContext();
    console.log(user)
    if(!user.name){
        return <h4>Please login</h4>
    }
    return (
    <div className="user-container">
       <p> Name: {user.name},</p>
       <p> Age: {user.age}</p>
       <button className="btn" onClick={logout}>Logout</button>
    </div>)
}

export default UserContainer