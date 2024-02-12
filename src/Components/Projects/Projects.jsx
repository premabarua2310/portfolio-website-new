import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import { SiHtml5, SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import port4 from "../../assets/port4.png";
import port5 from "../../assets/port5.png";
import port6 from "../../assets/port6.png";
import port7 from "../../assets/port7.png";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
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
                <h2>Tour Agency Website</h2>
                <p>
                  It's a tour agency website. This project is based on HTML, CSS, JavaScript. 
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://tour-website-a5e0ff.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/premabarua2310/Tour-Website.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
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
                    src={port7}                    alt="Todo-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Todo List App</h2>
                <p>
                  It's a simple todo List application built using ReactJs. Users allowed to add, edit, and delete tasks.
                </p>
                <div>
                <FaReact />
                <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://todo-list-app-3c3b16.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/premabarua2310/React-todo.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
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
                  <img src={port3} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Ecommerce Website</h2>
                <p>
                  It's a ecommerce based website. In this project  i am using HTML, CSS, JavaScript.
                </p>
                <div>
                <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://eceommercejs-ae08ce.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/premabarua2310/Ecommerce_js.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
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
                    src={port5}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Portfolio Website</h2>
                <p>
                It's a simple portfolio website. In this project  i am using HTML, CSS, JavaScript.
                </p>
                <div>
                <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://demo-portfolio-993b5c.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/premabarua2310/Protfolio-website.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
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
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Login Page</h2>
                <p>
                  It's a simple login page where i am using NextJS and Tailwind CSS.
                </p>
                <div>
                <TbBrandNextjs />
                  <SiTailwindcss />
                  {/* <IoLogoJavascript /> */}
                </div>
                <div>
                  <a
                    href="https://login-page-53df53.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/premabarua2310/login_nextjs.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
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
                    src={port6}
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Landing Page</h2>
                <p>
                  It's a simple landing page, in this page is build with ReactJs and Tailwind CSS.
                </p>
                <div>
                  <FaReact />
                  <SiTailwindcss />
                </div>
                <div>
                  {/* <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/premabarua2310/Landing_page.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
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
