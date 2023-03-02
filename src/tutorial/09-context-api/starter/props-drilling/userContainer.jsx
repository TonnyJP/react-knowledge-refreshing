import React from "react";

const UserContainer = ({user, logout}) => {
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