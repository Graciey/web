import React from "react";
import Logo from "../../images/logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-dark fixed-top">
          <div className="container">
            <nav className="nav d-flex justify-content-between">
              <a href="http://128.199.97.198/emplug-home1.com//#/" className="navbar-brand d-flex align-items-center">
                <img src={Logo} alt="emplug logo" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
