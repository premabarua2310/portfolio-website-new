import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/bg-photo.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Prema Barua </span> 
                {/* and I am from{" "}
                <span className="different">
                  {" "}
                  Gulshan, Dhaka (Bangladesh)
                </span> */}
                . I have completed my graduation in BSc. (Computer Science & Engneering)
                from{" "}
                <span className="different">
                University of Information Technology & Sciences | UITS
                </span>
                . Then I joined Junior Software developer at {" "}
                <span className="different">BMIT Solutions Ltd.</span>
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Teacher{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Singer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cartoon Artist{" "}
              </h4>
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
