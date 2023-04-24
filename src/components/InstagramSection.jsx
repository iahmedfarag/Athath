import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import product8 from "../assets/product08.png";
import product9 from "../assets/product09.png";
import { Link } from "react-router-dom";
const InstagramSection = () => {
  return (
    <>
      <section className="insta">
        {/* <div className="container"> */}
        <article className="text">
          <div className="icon">
            <AiOutlineInstagram />
          </div>
          <h2>GET INSPIRED WITH INSTAGRAM</h2>
          <p>
            Suspendisse varius enim in eros elementum tristique cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
          <Link to="/products">
            <button className="discover-btn">DISCOVER MORE</button>
          </Link>
        </article>
        <article>
          <img src={product8} alt="" />
        </article>
        <article>
          <img src={product9} alt="" />
        </article>
        {/* </div> */}
      </section>
    </>
  );
};

export default InstagramSection;
