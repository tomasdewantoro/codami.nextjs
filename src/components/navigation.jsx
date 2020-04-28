import React, { Component } from "react";

class Navigation extends Component{
  render(){
    return (
      <>
        <nav role="navigation" className="mainnav">
            <div className="container">
                <div className="header-logo"><img src="https://mockflow.com/images/home-images2/mf-logo2x.png" height="26px" /></div>
                <div className="header-list">
                    <ul className="listedmenu">
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Contact Us</li>
                        <li>LogIn</li>
                    </ul>
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="mobilemenu">
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      </>
    );
  }
}

export default Navigation;