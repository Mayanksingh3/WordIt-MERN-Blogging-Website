import React from "react";
import me from "../assets/mayank3.png";
import ayush from "../assets/myImage.png";
import "../css/Contact.css";
import { GoMail, GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

export default function Contact() {
  return (
    <div className="container mt-3">
      <div className="card p-3 mb-3 main-body">
        <div className="banner bg-warning">
          <h1>Hello, Welcome to our Contact Page!</h1>
          <div>
            <h3>Developers : </h3>
          </div>
        </div>
        <div className="d-flex  mt-3">
          <img className="mr-3" src={me} alt="Developer" />
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Mayank Kumar Singh</h3>
            </div>
            <br />
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:mayank.singh1_cs18@gla.ac.in"
            >
              <h5>{<GoMail />} : mayank.singh1_cs18@gla.ac.in</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.github.com/Mayanksingh2004"
            >
              <h5>{<GoMarkGithub />} : Mayanksingh2004</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/mayank-singh-27a3ba181/"
            >
              <h5>{<GrLinkedin />} : Mayanksingh2004</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              Hi, My Name is Mayank Kumar Singh from Renukoot, Uttar Pradesh ,
              India. I am currently pursuing B.Tech. from GLA University,
              Mathura, India. I like creating and designing websites. This is our
              project for Fullstack Development -2 taught by Mr. Pankaj Kapoor (Technical Trainer).
            </p>
          </div>
        </div>
      </div>


{/* ---------------- */}
<div className="card p-3 mb-3 main-body">
        {/* <div className="banner bg-primary">
          <h1>Hello, Welcome to our Contact Page!</h1>
          <div>
            <h3>Developer : </h3>
          </div>
        </div> */}
        <div className="d-flex  mt-3">
          <img className="mr-3" src={ayush} alt="Developer" />
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Ayush Gupta</h3>
            </div>
            <br />
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:ayush.gupta1_cs18@gla.ac.in"
            >
              <h5>{<GoMail />} : ayush.gupta1_cs18@gla.ac.in</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ayushgupta6387"
            >
              <h5>{<GoMarkGithub />} : ayushgupta6387</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ayush-gupta-29700a202/"
            >
              <h5>{<GrLinkedin />} : ayushgupta6387</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              Hi, My Name is Ayush Gupta I am from Sitapur, Uttar Pradesh,
              India. Currently pursuing B.Tech in Computer Science and Engineering from GLA University,
              Mathura. I am always keen to learn new things. Currently I am working on my web development skills.
              This is our project which we have made after learning MERN technology taught by Mr. Pankaj Kapoor (Technical Trainer).
            </p>
          </div>
        </div>
      </div>



    </div>
  );
}
