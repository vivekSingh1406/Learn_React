import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // Fetch users from backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:8080/api/users");
    setUsers(res.data);
  };

  const handleAddOrUpdate = async (user) => {
    if (editUser) {
      await axios.put(`http://localhost:8080/api/users/${editUser.id}`, user);
    } else {
      await axios.post("http://localhost:8080/api/users", user);
    }
    setEditUser(null);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/users/${id}`);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  return (
    <div className="app">
      <h1>React + Spring Boot CRUD</h1>
      <UserForm addOrUpdate={handleAddOrUpdate} editUser={editUser} />
      <UserList users={users} deleteUser={handleDelete} editUser={handleEdit} />
    </div>
  );
}

export default App;
