import React from "react";
import { Fade } from "react-reveal";
import { MAIN_HEADER } from "../Constants/ConstantsHeader";
import { UNIT_2 } from "../Constants/ConstantsUnits";
import Happy from "../assets/image/happy.jpg";

export default function UnitII() {
  return (
    <section id="unitII">
      <Fade duration={1000}>
        <div className="row">
          <div className="nine columns main-col">
            <h2>{MAIN_HEADER.title.unit2}</h2>

            <p>{UNIT_2.description}</p>

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
            <img className="unit-pic" src={Happy} alt="smile" />
          </div>
        </div>
      </Fade>
    </section>
  );
}
