import CatalogCard from "../components/catalog_card"
import ProductService from "../services/ProductService"
import {useState, useEffect} from 'react'
import '../styles/globalStyles.css'

const Assortment = () => {
  const {fetchProducts} = ProductService()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then(data => setProducts(data.data))
  }, [])

  return (
      <div>
    <div className="class1">
      <h1 class = 'text'>Ассортимент</h1>
    </div>
        <div>
          <h1 style={{textAlign: 'center', color: 'darkgreen', padding: '1rem'}}>Ассортимент</h1>
          <div className="paddingContainer">
              {products.map(({...props}, index) => (
                  <CatalogCard {...props} key={index}/>
              ))}
          </div>
        </div>
      </div>
  )
}
export default Assortment
