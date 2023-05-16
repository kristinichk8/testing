import UsersTable from "../components/usersTable";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import ProductsTable from "../components/productsTable";

const Admin = () => {
    const {isAuth, curUser} = useSelector(state => state)
    const [tableSwitcher, setTableSwitcher] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuth === false || curUser.Admin === false) {
            navigate('/')
        }
    }, [])
    return (
        <div className={'auth-background'}>
            <div className={'login-container'}>
                <div style={{display: 'flex', alignItems: "center", justifyContent: 'space-around', paddingTop: '1rem'}}>
                    <button onClick={() => setTableSwitcher(false)}>
                        Пользователи
                    </button>
                    <button onClick={() => setTableSwitcher(true)}>
                        Продукты
                    </button>
                </div>
                {tableSwitcher ? <ProductsTable/> : <UsersTable/>}
            </div>
        </div>
    )
}

export default Admin
