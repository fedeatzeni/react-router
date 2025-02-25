import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function PostDetail() {

    const { id } = useParams()

    //post selezionato
    const [article, setArticle] = useState([]);
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setArticle(res.data))
            .catch(err => console.log(err))
    }

    //tutti i post
    const [articles, setArticles] = useState([]);
    function fetchPosts() {
        axios.get(`http://localhost:3000/posts/`)
            .then(res => setArticles(res.data))
            .catch(err => console.log(err))
    }

    function log() {
        console.log("Articles:", articles);
        console.log("Current ID:", id);
        console.log("Last Article ID:", articles[articles.length - 1]?.id);
    }

    useEffect(fetchPost, [id])
    useEffect(fetchPosts, [id])
    
    return (
        <div className="post">
            <div key={article.id}>
                <h2>{article.title}</h2>
                <div>{article.content}</div>
                <img src={article.image} alt={article.title} />
                <div>{article.tags}</div>
                {parseInt(id) > 1 ? <Link to={`/posts/${parseInt(id) - 1}`}>&lt;-</Link> : <span>No</span>}
                {parseInt(id) < articles[articles.length - 1]?.id  ? <Link to={`/posts/${parseInt(id) + 1}`}>&gt;-</Link> : <span>No</span>}
            </div>
        </div>
    )


}