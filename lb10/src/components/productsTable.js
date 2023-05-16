import {useEffect, useState} from "react";
import AuthService from "../services/UserService";
import UserService from "../services/UserService";
import ProductService from "../services/ProductService";
import {useNavigate} from "react-router";

const ProductsTable = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const {fetchProducts} = ProductService()
    useEffect(() => {
        fetchProducts().then(data => setProducts(data.data))
    }, [])
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <h1 style={{color: 'white', textAlign: 'start'}}>Таблица продуктов</h1>
                </div>
                <div>
                    <button onClick={() => navigate('/create-product')}>Добавить продукт +</button>
                </div>
            </div>
            <hr/>
            <table id="customers">
                <tr>
                    <th>Фото</th>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Страна производства</th>
                    <th>Воздействие</th>
                    <th>Вкус</th>
                    <th>Цена</th>
                </tr>
                {products.map(({...props}, index) => (
                    <TableItem {...props} key={index}/>
                ))}
            </table>
        </>
    )
}

export default ProductsTable

const TableItem = ({ProductID, Name_product, Country_of_origin, Impact, Taste, Thumbnail, Price}) => {
    return (
        <tr>
            <td width={'20%'} style={{maxWidth: '20%'}}><img width={'100%'} src={Thumbnail}/></td>
            <td>{ProductID}</td>
            <td>{Name_product}</td>
            <td>{Country_of_origin}</td>
            <td>{Impact}</td>
            <td>{Taste}</td>
            <td>{Price} ₽</td>
        </tr>
    )
}
