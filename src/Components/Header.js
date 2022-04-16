import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { MAIN_HEADER } from "../Constants/ConstantsHeader";

export default function Header() {
  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              {MAIN_HEADER.title.principal}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#unitI">
              {MAIN_HEADER.title.unit1}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#unitII">
              {MAIN_HEADER.title.unit2}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#unitIII">
              {MAIN_HEADER.title.unit3}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#unitIV">
              {MAIN_HEADER.title.unit4}
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">
            <i className="fa fa-heart"></i>
              {MAIN_HEADER.title.center}
              <i className="fa fa-heart"></i>
            </h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{MAIN_HEADER.description}</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a href={"/"} className="button btn introduction-btn">
                {MAIN_HEADER.title.introduction}
              </a>
              <a href={"/"} className="button btn units-btn">
                {MAIN_HEADER.title.units}
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}
