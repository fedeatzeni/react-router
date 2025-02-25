import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export default function PostList() {

    // stati lista 
    const [articles, setArticles] = useState([]);

    //axios call express-blog-api-crud
    function fetchPosts() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => setArticles(res.data))
            .catch(error => { console.log(error); })
    }

    useEffect(fetchPosts, [])

    //delete
    function removeArticle(i) {
        axios.delete(`http://localhost:3000/posts/${i}`)
            .then((res) =>
                setArticles(articles.filter((article) => article.id !== i))
            )

            .catch(error => { console.log(error); })
    }

    return (
        <>
            <div className="posts">
                {/* se non ci sono posto */}
                {articles.length === 0 && <h2>Non ci sono post</h2>}
                {articles.map((el) =>
                    // <li key={el.id}>{el.title} <button onClick={() => removeArticle(el.id)}>elimina</button></li>
                    <div key={el.id}>
                        <h2>{el.title}</h2>
                        <div>{el.content}</div>
                        <img src={el.image} alt={el.title} />
                        <div>{el.tags.join(", ")}</div>

                        <Link to={`/posts/${el.id}`}>Vai al Post</Link>
                        <br />
                        <button onClick={() => removeArticle(el.id)}>elimina</button>
                    </div>
                )}
            </div>
        </>
    )
}