import React from 'react'
import {useState} from 'react';

function UpdateData() {
  const [userData, setUserData] = useState({
    name:"",
    username: "",
    age: "",
    dob: ""
  })

  const setData = e =>{
    const {name,value} = e.target;
    setUserData( preval => ({
        ...preval,
        [name]:value
    }));
  }

  const updateUserData = async(e) =>{
    e.preventDefault();
    const {name,username,age,dob} = userData;
    const res = await fetch("/update-user",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name,username,age,dob
      })
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 404 || !data){
      alert("User does not exist! Try another username");
    }
    else{
      alert("User Updated!");
    }
    setUserData({
      name:"",
      username:"",
      age:"",
      dob:""
    })
  }

  return (
    <div className="container">
      <h2>Update user data</h2>
      <h6>Your data will be updated according to your username</h6>
      <form>
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleFormControlInput1"><b>Name</b></label>
            <input
              type="name"
              class="form-control"
              id="name"
              value = {userData.name}
              onChange={setData}
              name="name"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleFormControlInput1"><b>Username</b></label>
            <input
              type="username"
              class="form-control"
              id="username"
              value = {userData.username}
              onChange={setData}
              name="username"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleFormControlInput1"><b>Age</b></label>
            <input
              type="Age"
              class="form-control"
              id="Age"
              value = {userData.age}
              onChange={setData}
              name="age"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleFormControlInput1"><b>DOB</b></label>
            <input
              type="DOB"
              class="form-control"
              id="DOB"
              value = {userData.dob}
              onChange={setData}
              name="dob"
            />
          </div>
        </div>
        <div className="btn btn-warning"  onClick={updateUserData}>Update</div>
      </form>
    </div>
  )
}

export default UpdateData