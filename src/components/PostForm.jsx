import { useState } from "react";

import axios from "axios";

export default function PostForm() {
    const initialFormData = { title: "", content: "", image: "", tags: [] }

    // stati lista 
    const [articles, setArticles] = useState([]);
    const [newArticle, setNewArticle] = useState(initialFormData);

    //axios call express-blog-api-crud


    function addArticle(event) {
        event.preventDefault();

        //create, chiamta ajax in post con body come argomento
        axios.post("http://localhost:3000/posts/", newArticle)
            .then((res) =>
                setArticles((current => [...current, res.data]))
            )

            .catch(error => { console.log(error); })

        //resetta i campi
        setNewArticle(initialFormData)
    }

    // aggiunge proprietà all'oggetto
    function handleFormData(event) {
        // trasforma la stringa in un array 
        const value = event.target.name === "tags" ? event.target.value.split(",") : event.target.value
        setNewArticle((current) => ({ ...current, [event.target.name]: value }))
    }

    return (
        <>
            <form onSubmit={addArticle}>
                <input type="text"
                    value={newArticle.title}
                    name="title"
                    placeholder="inserire il titolo"
                    onChange={handleFormData} />

                <textarea
                    value={newArticle.content}
                    name="content"
                    placeholder="inserire il contenuto"
                    onChange={handleFormData}></textarea>

                <input type="text"
                    value={newArticle.image}
                    name="image"
                    placeholder="inserire l'immagine"
                    onChange={handleFormData} />


                <input type="text"
                    value={newArticle.tags}
                    name="tags"
                    placeholder="inserire i tag separati da ,"
                    onChange={handleFormData} />

                <button>Invia</button>
            </form >
        </>
    )
}