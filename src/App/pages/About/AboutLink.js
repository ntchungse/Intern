import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";

function AboutLink() {
    return (
        <Container className="aboutLink">
            <ul className="aboutLink__list">
                <li className="aboutLink__item">
                    <Link className="aboutLink__link" to="/">Home</Link>
                </li>
                <li className="aboutLink__item">
                    <Link className="aboutLink__link aboutLink__link--active" to="/about">Về chúng tôi</Link>
                </li>
            </ul>
        </Container>
    )
}

export default AboutLink
