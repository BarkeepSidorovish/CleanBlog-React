import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Articles.css'

export default function Articles() {
    return (
        <>
            <Container>
                <article className="article">
                    <Link className="article_redirect" to="/">
                        <h3 className="article_title">Man must explore, and this is exploration at its greatest</h3>
                        <h4 className="article_description">Problems look mighty small from 150 miles up</h4>
                    </Link>
                    <blockquote className="article_informations">Posted by <Link className="article_redirect" to="/"><strong>Admin</strong></Link> on September 24, 2050</blockquote>
                </article>
                <hr />
                <article className="article">
                    <Link className="article_redirect" to="/">
                        <h3 className="article_title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h3>
                        <p className="article_description">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
                    </Link>
                    <blockquote className="article_informations">Posted by <Link className="article_redirect" to="/"><strong>Admin</strong></Link> on September 18, 2050</blockquote>
                </article>
                <hr />
                <article className="article">
                    <Link className="article_redirect" to="/">

                        <h3 className="article_title">Science has not yet mastered prophecy</h3>
                        <p className="article_description">We predict too much for the next year and yet far too little for the next ten.</p>
                    </Link>
                    <blockquote className="article_informations">Posted by <Link className="article_redirect" to="/"><strong>Admin</strong></Link> on August 24, 2050</blockquote>
                </article>
                <hr />
                <article className="article">
                    <Link className="article_redirect" to="/">

                        <h3 className="article_title">Failure is not an option</h3>
                        <p className="article_description">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</p>
                    </Link>
                    <blockquote className="article_informations">Posted by <Link className="article_redirect" to="/"><strong>Admin</strong></Link> on July 8, 2050</blockquote>
                </article>
                <hr />
            </Container>
        </>
    )
}
