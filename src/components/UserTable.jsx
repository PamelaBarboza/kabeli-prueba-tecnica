import React from 'react';

const UserTable = (props) => {
    console.log(props.users)
    return (<table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Clave</th>
                <th>Teléfono</th>
            </tr>
        </thead>
        <tbody>
            {
                props.users.length > 0 ?
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.phone.contrycode}{user.phone.citycode}{user.phone.number}</td>
                        <td>
                            <button className="button muted-button"
                            onClick={
                                () => { props.editRow(user)}
                            }
                            
                            >Modificar</button>
                            <button className="button muted-button"
                                onClick={() => { props.deleteUser(user.id)}}
                            >Eliminar
                            </button>
                        </td>
                    </tr>

                )) : (
                        <tr>
                            <td colSpan={3}>No hay usuarios</td>
                        </tr>
                )
            }
           
        </tbody>
    </table>);
}

export default UserTable;