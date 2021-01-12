import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
function LinkBar({ arrLink }) {
  return (
    <Container className="aboutLink">
      <ul className="aboutLink__list">
        <li className="aboutLink__item">
          <Link className="aboutLink__link" to="/">
            Home
          </Link>
        </li>
        {arrLink.map((item, index) => (
          <li key={index} className="aboutLink__item">
            <Link
              className={
                item.isActive
                  ? "aboutLink__link aboutLink__link--active"
                  : "aboutLink__link"
              }
              to={item.path}
            >
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default LinkBar;
