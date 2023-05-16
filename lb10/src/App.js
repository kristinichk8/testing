import Home from './pages/home';
import Ideology from './pages/ideology';
import Articles from './pages/articles';
import Assortment from './pages/assortment';
import Contacts from './pages/contacts';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import Registration from './pages/registration';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {checkAuth, loginUser, setAuth} from "./actions/actions";
import Profile from "./pages/profile";
import Header from "./components/header";
import {useLocation} from "react-router";
import ArticlesID from "./pages/articlesID";
import ActivationSuccess from "./pages/ActivationSuccess";
import Admin from "./pages/admin";
import Order from "./pages/order";
import OrderSuccess from "./pages/order-success";
import CreateProduct from "./pages/createProduct";
import TakePassword from "./pages/takePassword";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth().then(data => {
        dispatch(setAuth(true))
        dispatch(loginUser(data.data.user))
      })
    }
  }, [])
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ideology' element={<Ideology />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:id' element={<ArticlesID />} />
          <Route path='/assortment' element={<Assortment />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/activation-success' element={<ActivationSuccess />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/take-password' element={<TakePassword />} />
          <Route path='/order/:id' element={<Order />} />
          <Route path='/order-success' element={<OrderSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
