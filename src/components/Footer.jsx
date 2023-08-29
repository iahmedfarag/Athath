import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <article className="text">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            laborum Sapiente, laborum
          </p>
          <ul>
            <li>
              <Link to={`/`}>
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                <AiFillTwitterCircle />
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                <ImYoutube />
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={`/`}>Image Licensin</Link>
            </li>
            <li>
              <Link to={`/`}>Style Guide</Link>
            </li>
            <li>
              <Link to={`/`}>Privacy Policy</Link>
            </li>
          </ul>
        </article>
        <article>
          <h4>Shop Category</h4>
          <ul>
            <li>
              <Link to={`/`}>Image Licensin</Link>
            </li>
            <li>
              <Link to={`/`}>Style Guide</Link>
            </li>
            <li>
              <Link to={`/`}>Privacy Policy</Link>
            </li>
          </ul>
        </article>
        <article>
          <h4>Pertners</h4>
          <ul>
            <li>
              <Link to={`/`}>Image Licensin</Link>
            </li>
            <li>
              <Link to={`/`}>Style Guide</Link>
            </li>
            <li>
              <Link to={`/`}>Privacy Policy</Link>
            </li>
          </ul>
        </article>
      </div>
      <div className="overlay"></div>
      <div className="made">
        <p className="heart">&#10084;</p>
        <p>
          Made by <span>ahmedfarag</span>
        </p>
        <Link to={"https://github.com/iahmedfarag"} target="_blank">
          <AiOutlineGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/ahmed-farag-16433b260/"}
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
