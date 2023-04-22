import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { ImYoutube } from "react-icons/im";

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
              <a href="">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillTwitterCircle />
              </a>
            </li>
            <li>
              <a href="">
                <ImYoutube />
              </a>
            </li>
          </ul>
        </article>
        <article>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="">Image Licensin</a>
            </li>
            <li>
              <a href="">Style Guide</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </article>
        <article>
          <h4>Shop Category</h4>
          <ul>
            <li>
              <a href="">Image Licensin</a>
            </li>
            <li>
              <a href="">Style Guide</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </article>
        <article>
          <h4>Pertners</h4>
          <ul>
            <li>
              <a href="">Image Licensin</a>
            </li>
            <li>
              <a href="">Style Guide</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
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
        <a href="https://github.com/iahmedfarag" target="_blank">
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-farag-16433b260/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
