import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Articles.css'

export default function Articles({ articles, loading }) {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <Container id="articles">
                {articles.map((value) => {
                    return (
                        <div key={value.id}>
                            <article className="article">
                                <Link className="article_redirect" to={`${value.id}`}>
                                    <h3 className="article_title">{value.title}</h3>
                                    <h4 className="article_description">{value.body.slice(0, 30)}</h4>
                                </Link>
                                <blockquote className="article_informations">Posted by <Link className="article_redirect" to="/"><strong>{value.userId}</strong></Link></blockquote>
                            </article>
                            <hr />
                        </div>
                    )
                })}
            </Container>
        </>
    )
}
