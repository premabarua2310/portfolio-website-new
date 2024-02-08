import React from "react";
import "./Certificate.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
    SiBlockchaindotcom,
    SiHtml5,
    SiMaterialui,
    SiChai,
    SiEthereum,
    SiExpress,
    SiSocketdotio,
    SiTailwindcss,
    SiReactrouter,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import port1 from "../../assets/Java certificate.png";
import port2 from "../../assets/Prema Barua-01.jpg";

export const Certificate = () => {
    return (
        <>
            <div className="section">
                <h2 className="section__title different">Certificates</h2>
                <div className="allProjects">

                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src={port1}
                                        alt="Rockstar Games"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h3>Java Tutorial Course from</h3>
                                <p>
                                SOLOLEARN
                                </p>
                                
                                <div>
                                    <a
                                        href="https://drive.google.com/file/d/1vgsLps1k2znYGCoTB1p_Fi_wggCv7pMT/view?usp=sharing"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Certificate
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src={port2}
                                        alt="PulsePlus-Clone"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h3>Graphics Design Fundamentals</h3>
                                <p>
                                School of Inspiration
                                </p>
                                <div>
                                    <a
                                        href="https://drive.google.com/file/d/1WECWDRCHvW8JbWV0e9jw92NcSDMuEhVz/view?usp=sharing"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Certificate
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
