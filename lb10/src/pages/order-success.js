import {Link} from "react-router-dom";

const OrderSuccess = () => {
    return (
        <div className={'auth-background'}>
            <div className={'login-container'}>
                <div className={'profile-card'} style={{textAlign: 'center'}}>
                    <h1>Заказ успешно оформлен!</h1>
                    <p style={{fontSize: '2rem'}}>Спасибо за оформление заказа. Следите за статусом заказа в профиле! Спасибо за покупку!</p>
                    <Link to={'/profile'} >
                        В профиль
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccess
