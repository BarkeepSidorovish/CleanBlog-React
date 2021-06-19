import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom'


export default function Article({ article, loading }) {

    let { id } = useParams();
    const [currentArticle, setCurrentArticle] = useState([])

    useEffect(() => {
        setCurrentArticle(article[id - 1])
    }, [article, id])
    if (loading && !currentArticle) {

        console.log(currentArticle)
        return <h2>Loading...</h2>
    } else {

        return (
            <>
                <Container>
                    <Link to="../">Go back</Link>
                    <h3>{currentArticle.title}</h3>
                    <p>{currentArticle.body}</p>
                    <pre>Posted by - {currentArticle.userId} | Article ID - {currentArticle.id}</pre>
                </Container>
            </>
        )
    }
}
