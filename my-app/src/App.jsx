
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h1>Users List</h1>

      <div className="cards">
        {users.map((user) => (
          <div className="card" key={user.id}>

            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt={user.name}
            />

            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Phone: {user.phone}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
