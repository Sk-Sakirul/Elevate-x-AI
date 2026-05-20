import React, { useEffect, useState } from "react";

const UserDirectoryApp = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        let result = await response.json();
        setUsers(result);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: something went wrong</p>;

  return (
    <>
      <input
        type="text"
        value={searchInput}
        placeholder="Search users..."
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <p>Showing {filteredUsers.length} users</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 5,
        }}
      >
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            style={{
              backgroundColor: "lightgray",
              borderRadius: "6px",
              padding: "12px",
            }}
          >
            <h3>Name - {user.name}</h3>
            <p>Email - {user.email}</p>
            <p>City - {user.address.city}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDirectoryApp;