import $api from "../http"

const ProductService = () => {
  const fetchProducts = async () => {
    return $api.get('/products')
  }

  const fetchArticles = async () => {
    return $api.get('/articles')
  }

  const fetchArticleID = async (id) => {
    return $api.get(`/articles/${id}`)
  }

  const fetchProductID = async (id) => {
    return $api.get(`/products/${id}`)
  }

  return {fetchProducts, fetchArticles, fetchArticleID, fetchProductID}
}

export default ProductService
