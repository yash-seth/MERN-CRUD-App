import React from "react";
import { useState, useEffect } from "react";

function ListData() {
  const [userData, setUserData] = useState([]);
  // console.log(userData);

  const getUserData = async (e) => {
    const res = await fetch("/list-users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data);
    setUserData(data);
    if (res.status === 404 || !data) {
      alert("Error fetching data");
    } else {
      console.log("Users fetched");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container">
      <div>
        <h1>List of users</h1>
        <button className="btn btn-success" onClick={()=>document.location.reload()}>Refresh</button>
        </div><br />
      <table class="table table-dark">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Age</th>
          <th scope="col">DOB</th>
        </tr>
        </thead>
        <tbody>
      {userData.map((element, id) => {
        return (
          <>
            <tr>
              <td>{id+1}</td>
              <td>{element.name}</td>
              <td>{element.username}</td>
              <td>{element.age}</td>
              <td>{element.dob}</td>
            </tr>
          </>
        );
      })}
      </tbody>
      </table>
    </div>
  );
}

export default ListData;
