import React from "react";
import LinkBar from "../../components/LinkBar";
import AboutUs from "./AboutUs";

function about() {
  return (
    <div style={{ minHeight: "75px", paddingTop: "75px" }}>
      <LinkBar
        arrLink={[{ path: "/about", content: "Về chúng tôi", isActive: true }]}
      />
      <AboutUs />
    </div>
  );
}

export default about;
