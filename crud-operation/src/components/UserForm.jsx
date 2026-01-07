import React, { useState, useEffect } from "react";

function UserForm({ addOrUpdate, editUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill all fields!");
    addOrUpdate({ id: editUser ? editUser.id : null, name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{editUser ? "Update" : "Add"} User</button>
    </form>
  );
}

export default UserForm;
