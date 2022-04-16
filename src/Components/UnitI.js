import React from "react";
import Fade from "react-reveal";
import Smile from "../assets/image/smile.jpg";
import { MAIN_HEADER } from "../Constants/ConstantsHeader";
import { UNIT_1 } from "../Constants/ConstantsUnits";
import { useNavigate } from "react-router-dom";

export default function UnitI() {
  var navigate = useNavigate();
  return (
    <section id="unitI">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img className="unit-pic" src={Smile} alt="smile" />
          </div>
          <div className="nine columns main-col">
            <h2>{MAIN_HEADER.title.unit1}</h2>

            <p>{UNIT_1.description}</p>

            <div className="row">
              <div className="columns download">
                <p>
                  <button
                    className="button"
                    onClick={() => navigate("/servicio-social-app/unit-drawer")}
                  >
                    <i className="fa fa-download"></i>Ir a la unidad
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
