import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./styles/crud.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="container">
      <h1>React-CRUD-App</h1>

      <UserForm
        addUser={addUser}
        editUser={editUser}
        updateUser={updateUser}
      />

      <UserList
        users={users}
        onEdit={setEditUser}
        onDelete={deleteUser}
      />
    </div>
  );
}

export default App;
