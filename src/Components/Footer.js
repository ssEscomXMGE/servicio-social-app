import React from "react";
import Fade from "react-reveal";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="copyright">
              {/* <li>&copy; Copyright 2021 Nordic Giant</li> */}
              <li>Te amo por siempre y para siempre...</li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
