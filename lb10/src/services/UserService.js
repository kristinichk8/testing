import $api from "../http";

const AuthService = () => {
    const login = async (E_mail, Password) => {
        return $api.post('/login', {E_mail, Password})
    }

    const registration = async (
        E_mail,
        User_name,
        Password
    ) => {
        return $api.post('/registration', {E_mail, User_name, Password})
    }

    const logout = async () => {
        return $api.post('/logout')
    }

    const fetchUsers = async () => {
        return $api.get('/users')
    }

    const changeAdmin = async (state, id) => {
        return $api.post(`/users/${id}`, {state})
    }

    const createOrder = async (user_id, product_id, address, fio) => {
        return $api.post('/create-order', {user_id, product_id, address, fio})
    }

    const fetchOrders = async (id) => {
        return $api.get(`/orders/${id}`)
    }

    const createProduct = async (Name_product, Country_of_origin, Impact, Taste, Thumbnail, Price) => {
        return $api.post('/create-product', {Name_product, Country_of_origin, Impact, Taste, Thumbnail, Price})
    }

    const checkEmail = async (E_mail) => {
        return $api.post('/check-email', {E_mail})
    }

    const setPassword = async (E_mail, Password) => {
        return $api.post('/set-password', {E_mail, Password})
    }

    return {login, registration, logout, fetchUsers, changeAdmin, createOrder, fetchOrders, createProduct, checkEmail, setPassword}
}

export default AuthService
