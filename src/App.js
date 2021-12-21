import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const usersData = [
    {
      id: uuidv4(),
      name: "Juan Rodriguez",
      email: "juan@rodriguez.org",
      password: "hunder2",
      phone: { number: 1234567, citycode: 1, contrycode: 57 },
    },
  ];

  // State
  const [users, setUsers] = useState(usersData);

  // Agregar Usuarisos
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  // Eliminar usuarios
  const deleteUser = (id) => {
    //console.log(id)
    setUsers(users.filter((user) => user.id !== id));
  };

  // Editar usuarios

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    phone: "",

    // phone: {
    //   citycode: "",
    //   contrycode: "",
    //   number: ""
    // },
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone.number
    });
  };

  return (
    <div className="container">
      <h1>Mantenedor de usuarios</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h3>Modificar Usuario</h3>
              <EditUserForm 
                currentUser={currentUser}/>
            </div>
          ) : (
            <div>
              <h3>Agregar Usuarios</h3>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h3>Lista de usuarios</h3>
          <UserTable
            users={users}
            deleteUser={deleteUser}
          
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
