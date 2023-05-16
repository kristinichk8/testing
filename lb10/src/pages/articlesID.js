import {useParams} from "react-router";
import {useEffect, useState} from "react";
import ProductService from "../services/ProductService";

const ArticlesID = () => {
    const {id} = useParams()
    const [article, setArticle] = useState({})
    const {fetchArticleID} = ProductService()
    useEffect(() => {
        fetchArticleID(id).then(data => setArticle(data.data[0]))
    }, [])
    return (
        <div className={'auth-background'}>
            <div className={'login-container'}>
                <img src={article.thumbnail}/>
                <div>
                    <hr/>
                    <h1>{article.title}</h1>
                    <hr/>
                    <p>{article.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ArticlesID
