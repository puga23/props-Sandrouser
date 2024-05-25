import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div className="header">
      <img src="../../public/SiteLogo.png" alt="" />
      <ul className="lists">
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Gallery</li>
        <li>Team</li>
      </ul>
      <div className="btn">
        <Button color="mix">contact sales</Button>
        <Button color="mix1">sing in</Button>
      </div>
    </div>
  );
}

export default Header;
