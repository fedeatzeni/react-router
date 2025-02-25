import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {

    const { id } = useParams()

    const [articles, setArticles] = useState([]);

    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
        .then(res => setArticles(res.data))
        .catch(err => console.log(err))
    }

    useEffect(fetchPost, [])

    return (
        <div className="post">
            <div key={articles.id}>
                <h2>{articles.title}</h2>
                <div>{articles.content}</div>
                <img src={articles.image} alt={articles.title} />
                <div>{articles.tags}</div>
            </div>
        </div>
    )


}