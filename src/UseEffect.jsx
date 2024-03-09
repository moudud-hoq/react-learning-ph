import { useEffect, useState } from "react";

function UseEffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // Update the state with the fetched data
        setUsers(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <div>
        {/* Display the fetched users */}
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
      <div>
        {/* Display the fetched users */}
        {users.map((user) => (
          <p key={user.id}>{user.phone}</p>
        ))}
      </div>
    </div>
  );
}

export default UseEffect;
