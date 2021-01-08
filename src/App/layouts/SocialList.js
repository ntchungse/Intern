import React from "react";

import { Container } from "reactstrap";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { ReactComponent as PinterestIcon } from "../../assets/icons/pinterest.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";

function SocialList() {
  return (
    <Container className="socialList">
      <div className="socialList__item">
        <FacebookIcon />
        <p className="socialList__name">FACEBOOK</p>
      </div>
      <div className="socialList__item">
        <TwitterIcon />
        <p className="socialList__name">TWITTER</p>
      </div>
      <div className="socialList__item">
        <InstagramIcon />
        <p className="socialList__name">INSTAGRAM</p>
      </div>
      <div className="socialList__item">
        <GoogleIcon />
        <p className="socialList__name">GOOGLE+</p>
      </div>
      <div className="socialList__item">
        <PinterestIcon />
        <p className="socialList__name">PINTEREST</p>
      </div>
      <div className="socialList__item">
        <LinkedinIcon />
        <p className="socialList__name">LINKEDIN</p>
      </div>
    </Container>
  );
}

export default SocialList;
