import React from "react";
import {useState} from 'react';

function DeleteData() {
  const [username, setUsername] = useState("");
  
  const deleteUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/delete-user",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({username})
    });

    const response = await res.json();
    console.log(response);
    if(res.status===200) alert("User deleted!");
    else alert("User does not exist!");
    setUsername("");
  }
  return (
    <div className="container pl-5 pr-5">
          <label for="exampleFormControlInput1"><b>Enter username of the user to be removed</b></label>
          <input type="name" class="form-control" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <br />
          <button className="btn btn-danger" onClick={deleteUser}>Delete</button>
    </div>
  );
}

export default DeleteData;
