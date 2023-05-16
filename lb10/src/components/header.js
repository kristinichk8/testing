import {Link} from "react-router-dom";
import logo from '../resources/img/valley 1.png'
import {Person, ArrowBarRight, Cart, Clipboard2Minus} from "react-bootstrap-icons";
import '../styles/globalStyles.css'
import {useDispatch, useSelector} from "react-redux";
import AuthService from "../services/UserService";
import {loginUser, setAuth} from "../actions/actions";
import {useLocation, useNavigate} from "react-router";

const Header = () => {
    const {isAuth, curUser} = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.pathname)
    const {logout} = AuthService()
    return (
        <>
        {location.pathname === '/registration' || location.pathname === '/login' || location.pathname === '/take-password' ? null : <div className={'header'}>
                <div style={{width: '20%', display:'flex', justifyContent: 'center'}}>
                    <Link to={'/ideology'} className={'custom-link'}>Идеология бренда</Link>
                </div>
                <div style={{width: '20%', display:'flex', justifyContent: 'center'}}>
                    <Link to={'/articles'} className={'custom-link'}>Статьи</Link>
                </div>
                <div style={{width: '20%', display:'flex', justifyContent: 'center'}}>
                    <Link to={'/'} className={'custom-link'}><img width={'100%'} src={logo}/></Link>
                </div>
                <div style={{width: '20%', display:'flex', justifyContent: 'center'}}>
                    <Link to={'/assortment'} className={'custom-link'}>Ассортимент</Link>
                </div>
                <div style={{display: 'flex', width: '20%', justifyContent: 'center'}}>
                    {isAuth ? <><div>
                        <Link to={'/profile'} className={'custom-link'} style={{fontSize: '30px'}}><Person/></Link>
                        {curUser.Admin ? <Link to={'/admin'} className={'custom-link'} style={{fontSize: '30px', paddingLeft: '3rem'}}><Clipboard2Minus/></Link> : null}
                    </div>
                        <div>
                            <Link onClick={async () => {
                                await logout()
                                localStorage.clear('token')
                                dispatch(setAuth(false))
                                dispatch(loginUser({}))
                                navigate('/')
                            }
                            } className={'custom-link'} style={{fontSize: '30px', paddingLeft: '3rem'}}><ArrowBarRight/></Link>
                        </div></> : <Link to={'/login'} className={'custom-link'} style={{border: '1px solid white', padding: '0.5rem 2rem 0.5rem 2rem', borderRadius: '15px'}}>Войти</Link>}
                </div>
            </div>}
        </>

    )
}

export default Header
