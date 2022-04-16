import React from "react";
import { Fade } from "react-reveal";
import Note from "../assets/image/note.jpg";
import { MAIN_HEADER } from "../Constants/ConstantsHeader";
import { UNIT_3 } from "../Constants/ConstantsUnits";

export default function UnitIII() {
  return (
    <section id="unitIII">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img className="unit-pic" src={Note} alt="smile" />
          </div>
          <div className="nine columns main-col">
            <h2>{MAIN_HEADER.title.unit3}</h2>

            <p>{UNIT_3.description}</p>

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
        </div>
      </Fade>
    </section>
  );
}
