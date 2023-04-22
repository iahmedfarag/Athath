import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import product8 from "../assets/product08.png";
import product9 from "../assets/product09.png";
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
          <button className="discover-btn">DISCOVER MORE</button>
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
