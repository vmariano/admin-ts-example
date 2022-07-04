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
                        {/*<td><img style="max-width: 30px" src={user.profilePic} alt="User avatar"/></td>*/}
                        <td><img style="max-width: 30px" src="../../images/avatars/roy.png" alt="User avatar"/></td>
                        <td>{user.name}</td>
                        <td>
                            <select>
                                <option>Admin</option>
                                <option>User</option>
                                <option>Guest</option>
                            </select>
                        </td>
                    </tr>);
                })
            }
    </table>);
}

export default UserList;
