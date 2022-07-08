import React, {useEffect, useState} from "react";
import {fetchUsers} from "../data/userHelpers";

function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers().then((result) => { setUsers(result);})
    }, [])

    return(
        <table>
            {
                users.map((user) => {
                    return (<tr>
                        <td>{user.name}</td>
                        <td>
                            <select value={user.role}>
                                <option value='admin'>Admin</option>
                                <option value='user'>User</option>
                                <option value='guest'>Guest</option>
                            </select>
                        </td>
                    </tr>);
                })
            }
    </table>);
}

export default UserList;
