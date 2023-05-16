import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import AuthService from "../services/UserService";
import CatalogCard from "../components/catalog_card";

const Profile = () => {
    const {curUser, isAuth} = useSelector(state => state)
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    const {fetchOrders} = AuthService()

    useEffect(() => {
        if (!curUser) {
            navigate('/')
        }
        if (curUser.UsersID !== undefined)
        fetchOrders(curUser.UsersID).then(data => {
            console.log(data.data)
            setOrders(data.data)
        })
    }, [curUser])

    return (
        <div className={'auth-background'}>
            <div className={'login-container'}>
                <div className={'profile-card'}>
                    <div>
                        <h1>Здравствуйте, {curUser.User_name}</h1>
                        <hr/>
                    </div>
                    <div style={{width: '70%', paddingLeft:'4rem '}}>
                        <h1>Заказы</h1>
                        <div className={'orders-container'}>
                            {orders.map(({...props}, index) => (
                                <OrderItem {...props} key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

const OrderItem = ({Country_of_origin, Thumbnail, Price, fio, address, status, Taste, Name_product, Impact, status_id}) => {
    return (
        <div className={'order-item'}>
            <div style={{maxWidth: '20%'}}>
                <img width={'100%'} src={Thumbnail} style={{borderRadius: '15px'}}/>
            </div>
            <div style={{width: '80%', paddingLeft: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                    <Status status={status} status_id={status_id}/>
                    <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                        {Name_product}
                    </div>
                </div>
                <div>
                    Адрес: {address}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between',}}>
                    <div>
                        Получит: {fio}
                    </div>
                    <div>
                        Цена: {Price} ₽
                    </div>
                </div>
            </div>
        </div>
    )
}

const Status = ({status, status_id}) => {
    return (
        <div className={'status'} style={status_id === '1' ? {backgroundColor: 'red'} : status_id === '2' ? {backgroundColor: 'yellowgreen'} : {backgroundColor: "green"}}>
            {status}
        </div>
    )
}
