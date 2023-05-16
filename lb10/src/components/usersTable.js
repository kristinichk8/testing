import {useEffect, useState} from "react";
import AuthService from "../services/UserService";
import UserService from "../services/UserService";

const UsersTable = () => {
    const [users, setUsers] = useState([])
    const {fetchUsers} = AuthService()
    const switcher = () => {

    }
    useEffect(() => {
        fetchUsers().then(data => {
            setUsers(data.data)
        })
    }, [switcher])
    return (
        <>
            <h1 style={{color: 'white', textAlign: 'start'}}>Таблица пользователей</h1>
            <hr/>
        <table id="customers">
            <tr>
                <th>ID</th>
                <th>Эл. почта</th>
                <th>Логин</th>
                <th>Активация</th>
                <th>Админ</th>
            </tr>
            {users.map(({...props}, index) => (
                <TableItem {...props} key={index} onTap={switcher}/>
            ))}
        </table>
        </>
    )
}

export default UsersTable

const TableItem = ({UsersID, E_mail, User_name, Admin, Activated, onTap}) => {
    const {changeAdmin} = AuthService()
    useEffect(() => {
        onTap()
    }, [changeAdmin])
    return (
        <tr onClick={() => changeAdmin(!Admin, UsersID)}>
            <td>{UsersID}</td>
            <td>{E_mail}</td>
            <td>{User_name}</td>
            <td>{Activated ? 'Да' : 'Нет'}</td>
            <td>{Admin ? 'Да' : 'Нет'}</td>
        </tr>
    )
}
