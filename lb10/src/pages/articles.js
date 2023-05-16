import {useEffect, useState} from "react";
import ProductService from "../services/ProductService";
import '../styles/globalStyles.css'
import {Link} from "react-router-dom";

const Articles = () => {
    const [articles, setArticles] = useState([])
    const {fetchArticles} = ProductService()
    useEffect(() => {
        fetchArticles().then(data => {
            setArticles(data.data)
        })
    }, [])
  return (
      <div>
    <div className="class">
      <h1 class = 'text'>Статьи</h1>
    </div>
          <h1 style={{textAlign: 'center', color: 'darkgreen', padding: '1rem'}}>Статьи</h1>
          <div className={'paddingContainer'}>
              {articles.map(({...props}, index) => (
                  <ArticlesCard {...props} key={index}/>
              ))}
          </div>
      </div>
  )
}
export default Articles

const ArticlesCard = ({thumbnail, title, description, id}) => {
    return (
        <Link to={`/articles/${id}`} style={{textDecoration: 'none'}}>
            <div className='product-card'>
                <div className='product-img'>
                    <img width={'100%'} src={thumbnail}/>
                </div>
                <div className='product-body'>
                    <h1 className='product-title'>{title}</h1>
                    <div className='product-description' style={{color: 'gray'}}>
                        {description.length > 100 ? description.slice(0, 100) + '...' : description}
                    </div>
                </div>
            </div>
        </Link>
    )
}
