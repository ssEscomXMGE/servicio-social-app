import React from "react";
import { Fade } from "react-reveal";
import { MAIN_HEADER } from "../Constants/ConstantsHeader";
import { UNIT_4 } from "../Constants/ConstantsUnits";
import Love from "../assets/image/love.jpg";

export default function UnitIV() {
  return (
    <section id="unitIV">
      <Fade duration={1000}>
        <div className="row">
          <div className="nine columns main-col">
            <h2>{MAIN_HEADER.title.unit4}</h2>

            <p>{UNIT_4.description}</p>

            <div className="row">
              <div className="columns download">
                <p>
                  <a href={"/"} className="button">
                    <i className="fa fa-download"></i>Ir a la unidad
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="three columns">
            <img className="unit-pic" src={Love} alt="smile" />
          </div>
        </div>
      </Fade>
    </section>
  );
}
