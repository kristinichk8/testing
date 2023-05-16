import axios from "axios";
import {API_URL} from "../http";


export const setAdminLayout = (adminLayout) => {
    return {
        type: 'SET_ADMIN_LAYOUT',
        payload: adminLayout
    }
}

// export const productsFetched = (products) => {
//     return {
//         type: 'PRODUCTS_FETCHED',
//         payload: products
//     }
// }

// export const currentProductFetched = (currentProduct) => {
//     return {
//         type: 'CURRENT_PRODUCT_FETCHED',
//         payload: currentProduct
//     }
// }

export const setAuth = (bool) => {
    return {
        type: 'SET_AUTH',
        payload: bool
    }
}

export const loginUser = (user) => {
    return {
        type: 'USER_FETCHED',
        payload: user
    }
}

// export const logout = async () => {
//     try {
//         const {logout} = AuthService()
//         await logout()
//         localStorage.removeItem('token')
//     } catch (e) {
//         console.log(e.response?.data?.message)
//     }
// }

// export const addToCart = (currentProduct) => {
//     return {
//         type: 'ADD_TO_CART',
//         payload: currentProduct
//     }
// }

// export const removeFromCart = (productID) => {
//     return {
//         type: 'REMOVE_FROM_CART',
//         payload: productID
//     }
// }

// export const removeCart = () => {
//     return {
//         type: 'REMOVE_CART'
//     }
// }

// export const setQuantityReducer = (id, quantity) => {
//     return {
//         type: 'SET_QUANTITY',
//         payload: {
//             id,
//             quantity
//         }
//     }
// }

// export const usersFetched = (users) => {
//     return {
//         type: 'USERS_FETCHED',
//         payload: users
//     }
// }

export const checkAuth = async () => {
    try {
        const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        return response
    } catch (e) {
        console.log('')
    }
}
